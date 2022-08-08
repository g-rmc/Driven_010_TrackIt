import { useState, useContext, useEffect } from 'react';
import { getHistory } from "../../services/trackit";
import UserContext from "../../contexts/UserContext";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import TopBar from "../TopBar";
import BottomMenu from "../BottomMenu";

import { Container, Header, CalendarContainer, CalendarDay } from "./style";
import dayjs from 'dayjs';

export default function History(){

    const [value, onChange] = useState(new Date());
    const [history, setHistory] = useState('');
    const { config } = useContext(UserContext);

    useEffect(() => {
        getHistory(config).then((response) => {
            setHistory(response.data);
        })
    }, []);

    function checkHabits(date) {
        date = dayjs(date).format('DD/MM/YYYY');
        const today = dayjs().format('DD/MM/YYYY');

        if (history === '' || date === today){
            return null;
        }

        for (let i = 0; i < history.length; i++){
            if (history[i].day === date) {
                const dayHabits = history[i].habits
                const numHabits = dayHabits.length;
                let numDone = 0;
                
                for (let j = 0; j < numHabits; j++){
                    if (dayHabits[j].done === true){
                        numDone++;
                    }
                }

                if (numDone === numHabits){
                    return 'green'
                } else {
                    return 'red'
                }
            }  
        }
        return null
    }

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
                    formatDay={(locale, date) => {
                        const colorDone = checkHabits(date)
                        if (colorDone === 'red') {
                            return (
                                <CalendarDay color='red'>{dayjs(date).format('DD')}</CalendarDay>
                            )
                        } else if (colorDone === 'green') {
                            return (
                                <CalendarDay color='green'>{dayjs(date).format('DD')}</CalendarDay>
                            )
                        } else {
                            return (
                                <CalendarDay>{dayjs(date).format('DD')}</CalendarDay>
                            );
                        }
                    }}
                /> 
            </CalendarContainer>

        </Container>

        <BottomMenu />
    </>
    )
}