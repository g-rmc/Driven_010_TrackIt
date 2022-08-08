import { useState, useContext, useEffect } from 'react';
import { getHistory } from "../../services/trackit";
import UserContext from "../../contexts/UserContext";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import TopBar from "../TopBar";
import BottomMenu from "../BottomMenu";

import { Container, Header, CalendarContainer } from "./style";
import dayjs from 'dayjs';

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
                    formatDay={ (locale, date) => {
                        if (dayjs(date).format('DD/MM/YYYY') === '17/08/2022') {
                            return (
                                <div style={{backgroundColor: 'red', color: 'white', height:'40px', borderRadius:'50%'}}>{dayjs(date).format('DD')}</div>    
                            )
                        } else {
                            return (
                                <h1>{dayjs(date).format('DD')}</h1>
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