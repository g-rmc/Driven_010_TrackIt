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
`


export { Container, Header, NewHabitForm }