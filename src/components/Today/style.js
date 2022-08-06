import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 100px 20px;
`

const Header = styled.div`
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
        margin-top: 10px;

        ${props => props.coloredGreen === true ?
            'color: #8FC549;' :
            'color: #BABABA;'
        }
    }
`

export { Container, Header }