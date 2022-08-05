import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 100px 20px;

    h6 {
        margin-top: 30px;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    h1 {
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-weight: 400;
        font-size: 27px;
        color: white;
        cursor: pointer;
    }

    button:hover {
        filter: brightness(70%)
    }

    button:active {
        transform: translateY(2px);
    }
`

const NewHabitForm = styled.div`
    width: 100%;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 20px;

    input {
        height: 45px;
        width: 100%;
        font-size: 20px;
        padding-left: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    input::placeholder {
        color: #DBDBDB;
        opacity: 1;
    }
`

const DaysPanel = styled.div`
    display: flex;
    margin-top: 5px;
`

const ControlPanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 30px;

    &:nth-child(1){
        background-color: blue;
    }
`

const ControlButton = styled.button`
    width: 85px;
    height: 35px;
    border-radius: 5px;
    border: none;
    font-weight: 400;
    font-size: 16px;
    margin-left: 10px;
    cursor: pointer;
    
    ${props => {
        if (props.filledBackground === true){

            return `
                background-color: #52B6FF ;
                color: white;
            `;

        } else {

            return `
                background-color: rgba(0,0,0,0);
                color: #52B6FF;
            `;
        }
    }}

    &:hover{
        filter: brightness(70%);
    }

    &:active{
        transform: translateY(2px);
    }
`

const DayButton = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 20px;
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;

    ${props => {
        if (props.selected === true){

            return `
                background-color: #CFCFCF;
                color: white;
            `;

        } else {

            return `
                background-color: white ;
                color: #CFCFCF;
            `;

        }

    }}
`

const HabitCard = styled.div`
    width: 100%;
    height: 90px;
    padding: 15px;
    background-color: white;
    border-radius: 5px;
    margin-top: 10px;
`


export { Container, Header, NewHabitForm, DayButton, DaysPanel, ControlPanel, ControlButton, HabitCard }