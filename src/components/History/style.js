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

`

export { Container, Header }