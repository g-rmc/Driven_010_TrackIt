import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../styles/globalStyles"

import UserContext from "../contexts/UserContext";
import Logo from "../assets/Logo.svg"

import Login from "./Login";
import Register from "./Register";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";


export default function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <GlobalStyle />

      <UserContext.Provider value={{ tasks, setTasks }}>
        <Container>

          <img src={Logo} alt='Logo' style={{width: 180}}/>
          <h1>TrackIt</h1>

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />}/>
              <Route path='/cadastro' element={<Register />}/>
              <Route path='/habitos' element={<Habits />}/>
              <Route path='/hoje' element={<Today />}/>
              <Route path='/historico' element={<History />}/>
            </Routes>
          </BrowserRouter>

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