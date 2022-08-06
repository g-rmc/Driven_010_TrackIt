import { useState, useEffect, useContext } from "react";
import { getToday, postCheck, postUncheck } from "../../services/trackit";
import UserContext from "../../contexts/UserContext";
import { BsCheckLg } from 'react-icons/bs';

import TopBar from "../TopBar";
import BottomMenu from "../BottomMenu";

import { Container, Header, Card } from "./style";

import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');

export default function Today(){

    const { today, setToday, percentage, setPercentage, refresh, setRefresh, config } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    let weekday = dayjs().format('dddd, DD/MM');
    weekday = weekday.replace('-feira', '');
    weekday = weekday.replace(weekday[0], weekday[0].toUpperCase());    

    useEffect(() => {

        const promise = getToday(config);

        promise.then(response => {
            setToday(response.data);
            calculatePercentage(response.data);
            setLoading(false);
        })

        promise.catch(error => {
            alert (`Oh no! Erro ${error.response.status}!`)
        })
    },[refresh]);

    function calculatePercentage (arrToday) {
        const numTotal = arrToday.length;
        let numDone = 0;
        if (numTotal === 0){
            setPercentage(numDone);
            return;
        }
        for (let i = 0; i < numTotal; i++) {
            if (arrToday[i].done === true){
                numDone++
            }
        }
        const calc = Math.round((numDone/numTotal)*100);
        setPercentage(calc);
    }

    function handleClick(habitId, isDone) {
        setLoading(true);
        if (isDone === false) {
            postCheck(habitId, config).then(() => {
                setRefresh(!refresh);
            });
        }
        if (isDone === true) {
            postUncheck(habitId, config).then(() => {
                setRefresh(!refresh);
            });
        }
    }

    function Habit({habit}){

        const isRecord = habit.currentSequence === habit.highestSequence && habit.done;
        

        return (
            <Card isDone={habit.done} isRecord={isRecord}>
                <div>
                    <h1>{habit.name}</h1>
                    <h2>Sequência atual: <b>{habit.currentSequence} dia</b></h2>
                    <h2>Seu recorde: <em>{habit.highestSequence} dia</em></h2>
                </div>
                <button onClick={() => handleClick(habit.id, habit.done)} disabled={loading}>
                    <BsCheckLg />
                </button>
            </Card>
        )
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

            <>
                {today.length === 0 ?
                <h6>Você não possui hábitos cadastrados para hoje :(</h6> :
                today.map((habit, index) => <Habit key={index} habit={habit}/>)
                }
            </>
        </Container>

        <BottomMenu />
    </>
    )
}