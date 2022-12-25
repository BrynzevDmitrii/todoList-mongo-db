import Container from "@mui/material/Container";
import { useEffect } from "react";
import { Routes, Route} from "react-router-dom";

import { observer } from 'mobx-react';

import { Header } from "./components/Header/index.jsx";
import { Home, FullList, Registration, Login } from "./pages";

import isAuthme from "./store/isAuthMe.js";
import allList from "./store/allList.js";


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
          <Route path ='/' element = {<Home />} />
          <Route path ='/list/:id' element = {<FullList />} />
          <Route path ='/login' element = {<Login />} />
          <Route path ='/register' element = {<Registration />} />
        </Routes>
      </Container>
    </>
  );
})

export default App;
