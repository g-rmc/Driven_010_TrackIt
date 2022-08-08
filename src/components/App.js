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

  const [user, setUser] = useState(''); 
  const [habits, setHabits] = useState('');
  const [today, setToday] = useState('');
  const [percentage, setPercentage] = useState(0);
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(false);

  const config = {headers: {Authorization: `Bearer ${user.token}`}};
  
  return (
    <>
      <GlobalStyle />

      <UserContext.Provider value={{  user, setUser,
                                      habits, setHabits,
                                      today, setToday,
                                      percentage, setPercentage,
                                      refresh, setRefresh,
                                      loading, setLoading,
                                      config
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
  background-color: #f2f2f2;
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`