import { useContext, useEffect } from "react";
import { getToday } from "../services/trackit";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function BottomMenu(){

    const { user, percentage, setPercentage, setLoading, setToday, refresh, config } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {

        if(user === ''){ return; }

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

    return (
        <Container>
            
            <h2 onClick={() => navigate('/habitos')}>Hábitos</h2>

            <div onClick={() => navigate('/hoje')}>
                <CircularProgressbar
                    value={percentage}
                    text='Hoje'
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                    })}
                />
            </div>

            <h2 onClick={() => navigate('/historico')}>Histórico</h2>
            
        </ Container>
    )
}

const Container = styled.div`
    width:100%;
    max-width: 600px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: calc(100vw/2 - width/2);
    z-index: 1;
    background: white;
    padding: 0 35px;

    h2 {
        cursor: pointer;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }

    div {
        height: 90px;
        width: 90px;
        transform: translateY(-20px);
        border-radius: 50%;
        cursor: pointer;
    }

    h2:hover, div:hover {
        filter: brightness(70%);
    }
`