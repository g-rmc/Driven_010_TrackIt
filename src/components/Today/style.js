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
    margin-bottom: 30px;

    h1 {
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5; 
    }

    h2 {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin-top: 5px;

        ${props => props.coloredGreen === true ?
            'color: #8FC549;' :
            'color: #BABABA;'
        }
    }
`

const Card = styled.div`
    width: 100%;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 12px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 8px;
    }

    h2 {
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }

    b {
        ${props => props.isDone ?
            'color: #8FC549;' :
            'color: inherit'
        }
    }

    em {
        ${props => props.isRecord ?
            'color: #8FC549;' :
            'color: inherit'
        }
    }

    button {
        width: 70px;
        height: 70px;
        border-radius: 5px;
        border: none;
        color: white;
        cursor: pointer;

        ${props => props.isDone ?
            'background: #8FC549;' :
            'background: #E7E7E7'
        }
    }

    button:hover {
        filter: brightness(70%);
    }

    button:active {
        transform: translateY(2px);
    }

    svg {
        font-size: 30px;
    }
`

export { Container, Header, Card }