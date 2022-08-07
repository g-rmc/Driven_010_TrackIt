import { useState, useEffect, useContext } from "react";
import { getHabits, postNewHabit, deleteHabit } from "../../services/trackit";
import UserContext from "../../contexts/UserContext";
import { BsTrash } from 'react-icons/bs';

import TopBar from "../TopBar";
import BottomMenu from "../BottomMenu";

import { Container, Header, NewHabitForm, DayButton, DaysPanel, ControlPanel, ControlButton, HabitCard } from "./style";

const daysBase = [  { id: 0, initial: 'D', selected: false },
                { id: 1, initial: 'S', selected: false },
                { id: 2, initial: 'T', selected: false },
                { id: 3, initial: 'Q', selected: false },
                { id: 4, initial: 'Q', selected: false },
                { id: 5, initial: 'S', selected: false },
                { id: 6, initial: 'S', selected: false }
];

let days = daysBase.map(day => {return {...day}});

export default function Habits(){

    const { user, habits, setHabits, refresh, setRefresh, config } = useContext(UserContext);
    const [newHabit, setNewHabit] = useState({name:'', days:[]});
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {

        if(user === ''){ return; }

        const promise = getHabits(config);

        promise.then(response => {
            setHabits(response.data);
        })

        promise.catch(error => {
            alert (`Oh no! Erro ${error.response.status}!`)
        })
    },[refresh]);

    function CreateDayButton({day}){

        const [click, setClick] = useState(day.selected);

        function whenClick() {
            day.selected = !click;
            setClick(day.selected);
            let idDays = days.filter(day => day.selected);
            idDays = idDays.map(day => day.id);
            setNewHabit({ ...newHabit, days: idDays });
        }

        return(
            <DayButton selected={day.selected} onClick={loading? null : whenClick} disabled={loading}>
                {day.initial}
            </DayButton>
        )
    }

    function handleForm(){

        if(newHabit.name === ''){
            alert('Insira o nome do seu hábito!');
            return
        }

        if(newHabit.days.length === 0){
            alert('Insira os dias do seu hábito!');
            return
        }

        setLoading(true);
        const promise = postNewHabit(newHabit, config);

        promise.then(() => {
            setNewHabit({name:'', days:[]});
            days = daysBase.map(day => {return {...day}});
            setLoading(false);
            setShowForm(false);
            setRefresh(!refresh);
        })

        promise.catch(error => {
            alert (`Oh no! Erro ${error.response.status}!`);
            setLoading(false);
        })
    }

    function handleDelete(id) {
        if (window.confirm('Você realmente deseja excluir esse hábito?')) {
            deleteHabit (id, config).then(() => setRefresh(!refresh));
        }
    }

    function CreateHabitCard ({habit}) {

        habit.days.sort();

        const selectedDays = [];
        let arrId = 0;

        for (let i = 0; i < daysBase.length; i++){
            if (daysBase[i].id === habit.days[arrId]){
                selectedDays.push(true);
                arrId++;
            } else {
                selectedDays.push(false);
            }
        }

        return (
            <HabitCard>
                <div>
                    <h1>{habit.name}</h1>
                    <DaysPanel>
                        {daysBase.map((day, index) => <DayButton key={index} selected={selectedDays[index]}>{day.initial}</DayButton>)}
                    </DaysPanel>
                </div>
                <BsTrash onClick={() => handleDelete(habit.id)}/>
            </HabitCard>
        )
    }
    
    return (
        <>
            <TopBar/>

            <Container>
                <Header>
                    <h1>Meus Hábitos</h1>
                    <button onClick={() => setShowForm(!showForm)} disabled={loading}>+</button>
                </Header>

                {showForm ?
                    <NewHabitForm>
                        <input
                            type='text'
                            value={newHabit.name}
                            onChange={e => setNewHabit({ ...newHabit, name: e.target.value })}
                            placeholder='nome do hábito'
                            required
                            disabled={loading}
                        />

                        <DaysPanel>
                            {days.map((day, index) => <CreateDayButton key={index} day={day}/>)}
                        </DaysPanel>

                        <ControlPanel>

                            <ControlButton onClick={() => setShowForm(!showForm)} disabled={loading} filledBackground={false}>Cancelar</ControlButton>

                            <ControlButton onClick={handleForm} disabled={loading} filledBackground={true}>Salvar</ControlButton>

                        </ControlPanel>

                        
                    </NewHabitForm>
                    : <></>
                }

                {habits.length === 0 ?
                    <h6>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h6>
                    :
                    <>
                        {habits.map((habit, index) => <CreateHabitCard key={index} habit={habit} />)}
                    </>
                }
                
            </Container>

            <BottomMenu />
        </>
    )
}