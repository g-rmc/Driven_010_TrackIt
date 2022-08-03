import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/Logo.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 180px;
    }

    h1 {
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 70px;
        line-height: 86px;
        text-align: center;
        color: #126BA5;
    }
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledLink = styled(Link)`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`

export {
    Container,
    StyledForm,
    StyledLink,
    Logo,
}