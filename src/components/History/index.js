import { useState, useContext, useEffect } from 'react';
import { getHistory } from "../../services/trackit";
import UserContext from "../../contexts/UserContext";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";

import TopBar from "../TopBar";
import BottomMenu from "../BottomMenu";

import { Container, Header, CalendarContainer, CalendarDay, BottomCard } from "./style";
import dayjs from 'dayjs';

export default function History(){

    const [value, onChange] = useState(new Date());
    const [history, setHistory] = useState('');
    const [dayList, setDayList] = useState('');
    const { user, config } = useContext(UserContext);

    useEffect(() => {

        if(user === ''){ return; }

        getHistory(config).then((response) => {
            setHistory(response.data);
        })
    }, []);

    function checkHabits(date) {
        date = dayjs(date).format('DD/MM/YYYY');
        const today = dayjs().format('DD/MM/YYYY');

        if (history === '' || date === today){
            return {color: null};
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
                    return {status:{dayHabits:dayHabits, date:date}, color:'green'}
                } else {
                    return {status:{dayHabits:dayHabits, date:date}, color:'red'}
                }
            }  
        }
        return {color: null};
    }

    function CardHabit({habit}) {
        return (
            <div>
                {habit.name}{habit.done === true ? <BsCheckCircleFill style={{color:'#8CC654'}}/> : <BsFillXCircleFill style={{color:'#EA5766'}}/>}
            </div>
        )
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
                        const habitsStatus = checkHabits(date)
                        if (habitsStatus.color === 'red') {
                            return (
                                <CalendarDay color='red' onClick={() => setDayList(habitsStatus.status)}>
                                    <div>{dayjs(date).format('DD')}</div>
                                </CalendarDay>
                            )
                        } else if (habitsStatus.color === 'green') {
                            return (
                                <CalendarDay color='green' onClick={() => setDayList(habitsStatus.status)}>
                                    <div>{dayjs(date).format('DD')}</div>
                                </CalendarDay>
                            )
                        } else {
                            return (
                                <CalendarDay onClick={() => setDayList('')}>
                                    <div>{dayjs(date).format('DD')}</div>
                                </CalendarDay>
                            );
                        }
                    }}
                /> 
            </CalendarContainer>

            {dayList === ''?
                <BottomCard>
                    <h1> Você não possui histórico para o dia selecionado :)</h1>
                </BottomCard> :
                <BottomCard>
                    <h1> Hábitos do dia {dayList.date}</h1>
                    {dayList.dayHabits.map((habit, index) => <CardHabit key={index} habit={habit}/>)}
                </BottomCard> 
            }

        </Container>

        <BottomMenu />
    </>
    )
}