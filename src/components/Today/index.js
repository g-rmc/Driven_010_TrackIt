import { useState, useEffect, useContext } from "react";
import { getToday } from "../../services/trackit";
import UserContext from "../../contexts/UserContext";
import { BsCheckLg } from 'react-icons/bs';

import TopBar from "../TopBar";
import BottomMenu from "../BottomMenu";

import { Container, Header } from "./style";

import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');

export default function Today(){

    const { today, setToday, percentage, setPercentage, config } = useContext(UserContext);
    let weekday = dayjs().format('dddd, DD/MM');
    weekday = weekday.replace('-feira', '');
    weekday = weekday.replace(weekday[0], weekday[0].toUpperCase());    

    useEffect(() => {

        const promise = getToday(config);

        promise.then(response => {
            setToday(response.data);
            setPercentage(calculatePercentage);
            console.log(response.data);
        })

        promise.catch(error => {
            alert (`Oh no! Erro ${error.response.status}!`)
        })
    },[]);

    function calculatePercentage () {
        let numDone = 0;
        const numTotal = today.length;
        for (let i = 0; i < today.length; i++) {
            if (today[i].done === true){
                numDone++
            }
        }
        setPercentage((numDone/numTotal)*100);
        return percentage;
    }

    return (
        <>
        <TopBar/>

        <Container>
            <Header coloredGreen={percentage !== 0}>
                <h1>{weekday}</h1>
                <h2>
                    {percentage === 0 ?
                    'Nenhum hábito concluído ainda' :
                    `${percentage}% dos hábitos concluídos`
                    }
                </h2>
            </Header>
        </Container>

        <BottomMenu />
    </>
    )
}