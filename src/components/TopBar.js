import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";

export default function TopBar(){

    const { user } = useContext(UserContext);

    return (
        <Container>
            
            <h1>TrackIt</h1>
            <img src={user.image} alt="profile"/>
            
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
    top: 0;
    left: calc(100vw/2 - width/2);
    z-index: 1;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 20px;

    h1 {
        font-family: 'Playball', cursive;
        color: white;
        font-size: 39px;
        line-height: 49px;
    }

    img {
        height: 50px;
        width: 50px;
        object-fit: cover;
        border-radius: 50%;
    }
`