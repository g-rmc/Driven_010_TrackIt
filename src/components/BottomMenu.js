import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function BottomMenu(){

    const percentage = 66;

    return (
        <Container>
            
            <h2>Hábitos</h2>
            <div>
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
            <h2>Histórico</h2>
            
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

    h2:hover {
        color: #3985bb;
    }

    div {
        height: 90px;
        width: 90px;
        transform: translateY(-20px);
        border-radius: 50%;
        cursor: pointer;
    }
`