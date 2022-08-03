import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../styles/globalStyles"

import UserContext from "../contexts/UserContext";

import Login from "./Start/Login";
import Register from "./Start/Register";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";


export default function App() {

  const [login, setLogin] = useState({email:'', password:''});
  const [register, setRegister] = useState({email:'', password:'', name:'', image:''});
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  
  return (
    <>
      <GlobalStyle />

      <UserContext.Provider value={{  login, setLogin,
                                      user, setUser,
                                      token, setToken,
                                      register, setRegister,
                                    }}>
        <Container>

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

`