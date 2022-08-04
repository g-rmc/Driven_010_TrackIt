import { useState, useEffect, useContext } from "react";
import { getHabits } from "../../services/trackit";
import UserContext from "../../contexts/UserContext";

import TopBar from "../TopBar";
import BottomMenu from "../BottomMenu";

import { Container, Header, NewHabitForm } from "./style";

export default function Habits(){

    const { user, habits, setHabits } = useContext(UserContext);
    const [newHabit, setNewHabit] = useState({name:'', days:[]});
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {

        const config = {headers: {Authorization: `Bearer ${user.token}`}};
        const promise = getHabits(config);

        promise.then(response => {
            setHabits(response.data);
        })

        promise.catch(error => {
            alert (`Oh no! Erro ${error.response.status}!`)
        })
    },[])
    
    return (
        <>
            <TopBar/>

            <Container>
                <Header>
                    <h1>Meus Hábitos</h1>
                    <button onClick={() => setShowForm(!showForm)}>+</button>
                </Header>

                {showForm ?
                <NewHabitForm>
                    Formulário que fica oculto enquanto não clicar no +
                </NewHabitForm>                  
                : <></>}
                
                {habits.length === 0 ? 
                <h6>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h6>
                : <></>}
                
            </Container>

            <BottomMenu />
        </>
    )
}