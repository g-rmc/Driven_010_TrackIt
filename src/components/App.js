import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../styles/globalStyles"

import UserContext from "../contexts/UserContext";
import Logo from "../assets/Logo.svg"

export default function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <GlobalStyle />

      <UserContext.Provider value={{ tasks, setTasks }}>
        <Container>
          <img src={Logo} alt='Logo' style={{width: 180}}/>
          <h1>TrackIt</h1>

        </Container>
      </UserContext.Provider>
    </>
  );
}

const Container = styled.div`
  background-color: white;
  width: 100%;
  max-width: 600px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 70px;
    line-height: 86px;
    text-align: center;
    color: #126BA5;
  }
`