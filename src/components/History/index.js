import { useState, useContext, useEffect } from 'react';
import { getHistory } from "../../services/trackit";
import UserContext from "../../contexts/UserContext";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import TopBar from "../TopBar";
import BottomMenu from "../BottomMenu";

import { Container, Header, CalendarContainer } from "./style";

export default function History(){

    const [value, onChange] = useState(new Date());
    const [history, setHistory] = useState('');
    const { config } = useContext(UserContext);

    useEffect(() => {
        getHistory(config).then((response) => {
            console.log(response.data);
        })
    }, []);

    return (
        <>
        <TopBar/>
        
        <Container>
            <Header>
                <h1>Histórico</h1>
            </Header>

            <CalendarContainer>
                <Calendar
                    onChange={onChange}
                    value={value} 
                    calendarType='US'
                    /> 
            </CalendarContainer>

        </Container>

        <BottomMenu />
    </>
    )
}