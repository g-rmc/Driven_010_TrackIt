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

    font-size: 18px;

    div {
        border: none;
    }
    
    & > div {
        width: 100%;
        border-radius: 5px;
    }
`

const CalendarDay = styled.div `
    margin: auto;
    width: 10vw;
    height: 10vw;
    max-width: 60px;
    max-height: 60px;
    min-width: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    ${props => {
        if (props.color === 'red') {

            return `
                background-color: #EA5766;
            `;

        } else if (props.color === 'green') {

            return `
                background-color: #8CC654;
            `;

        } else {

            return `
                background-color: rgba(0,0,0,0) ;
            `;

        }

    }}
`

export { Container, Header, CalendarContainer, CalendarDay }