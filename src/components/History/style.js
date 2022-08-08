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

    button {
        padding: 0;
    }
`

const CalendarDay = styled.div `
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & div {
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
    }
    
`

const BottomCard = styled.div`

    div {
        font-weight: 300;
        width: 100%;
        height: 30px;
        font-size: 16px;
        color: #818181;
        background-color: white;
        margin-top: 10px;
        padding: 0 5px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        margin-top: 20px;
        font-weight: 400;
        font-size: 18px;
        line-height: 29px;
        color: #126BA5; 
    }
`

export { Container, Header, CalendarContainer, CalendarDay, BottomCard }