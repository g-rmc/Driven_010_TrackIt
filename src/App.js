import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import UserContext from "./contexts/UserContext";

export default function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <UserContext.Provider value={{tasks, setTasks}}>

      Oi :D
      
    </UserContext.Provider>
  );
}