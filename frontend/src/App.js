import Container from "@mui/material/Container";
import { useEffect } from "react";
import { Routes, Route} from "react-router-dom";

import { observer } from 'mobx-react';

import { Header } from "./components/Header/index.jsx";
import {  FullList, Registration, Login, Home } from "./pages";

import isAuthme from "./store/isAuthMe.js";
import { HomePage } from "./pages/HomePage.jsx";


const App = observer(()=> {

useEffect(()=>{
    isAuthme.fetchAuthMe()
  },[]);

console.log('app');

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path ='/' element = {<HomePage />} />
          <Route path ='/list/:id' element = {<FullList />} />
          <Route path ='/login' element = {<Login />} />
          <Route path ='/register' element = {<Registration />} />
        </Routes>
      </Container>
    </>
  );
})

export default App;
