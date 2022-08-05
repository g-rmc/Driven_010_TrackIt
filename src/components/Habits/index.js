import { useState, useEffect, useContext } from "react";
import { getHabits, postNewHabit } from "../../services/trackit";
import UserContext from "../../contexts/UserContext";

import TopBar from "../TopBar";
import BottomMenu from "../BottomMenu";

import { Container, Header, NewHabitForm, DayButton, DaysPanel, ControlPanel } from "./style";

const daysBase = [  { id: 0, initial: 'D', selected: false },
                { id: 1, initial: 'S', selected: false },
                { id: 2, initial: 'T', selected: false },
                { id: 3, initial: 'Q', selected: false },
                { id: 4, initial: 'Q', selected: false },
                { id: 5, initial: 'S', selected: false },
                { id: 6, initial: 'S', selected: false }
];

let days = [...daysBase];

export default function Habits(){

    const { habits, setHabits, config } = useContext(UserContext);
    const [newHabit, setNewHabit] = useState({name:'', days:[]});
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    let controlRefresh = true;

    console.log(newHabit);

    useEffect(() => {

        const promise = getHabits(config);

        promise.then(response => {
            setHabits(response.data);
        })

        promise.catch(error => {
            alert (`Oh no! Erro ${error.response.status}!`)
        })
    },[showForm]);

    function CreateDayButton(day){

        const [click, setClick] = useState(day.day.selected);

        function whenClick() {
            day.day.selected = !click;
            setClick(day.day.selected);
            let idDays = days.filter(day => day.selected);
            idDays = idDays.map(day => day.id);
            setNewHabit({ ...newHabit, days: idDays });
        }

        return(
            <DayButton selected={day.day.selected} onClick={loading? null : whenClick} disabled={loading}>
                {day.day.initial}
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
            let days = [...daysBase];
            setLoading(false);
            setShowForm(false);
        })

        promise.catch(error => {
            alert (`Oh no! Erro ${error.response.status}!`);
            setLoading(false);
        })
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

                            <h1 onClick={() => setShowForm(!showForm)}>Cancelar</h1>

                            <button onClick={handleForm} disabled={loading}>Salvar</button>

                        </ControlPanel>

                        
                    </NewHabitForm>
                    : <></>
                }

                {habits.length === 0 ?
                    <h6>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h6>
                    :
                    <>
                        {habits.map((habit, index) => <div key={index}>{`Id: ${habit.id} | Hábito: ${habit.name} | Dias: ${habit.days}`}</div>)}
                    </>
                }
                
            </Container>

            <BottomMenu />
        </>
    )
}