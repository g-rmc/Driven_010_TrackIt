import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 100px 20px;
`

const Header = styled.div`
    margin-bottom: 30px;

    h1 {
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5; 
    }
`

const CalendarContainer = styled.div `

    font-size: 20px;

    div {
        border: none;
    }
    
    & > div {
        width: 100%;
        height: 500px;
        border-radius: 5px;
    }

    button {
        height: 80px;
        font-size: 14px;
    }
`

export { Container, Header, CalendarContainer }