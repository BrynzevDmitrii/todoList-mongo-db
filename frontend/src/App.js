import Container from "@mui/material/Container";

import { Routes, Route} from "react-router-dom";

import { Header } from "./components/Header/index.jsx";
import {  ProfileList, Registration, Login, Home} from "./pages";



const App = ()=> {

console.log('app');

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path ='/' element = {<Home/>} />
          <Route path ='/profile/:id' element = {<ProfileList />} />
          <Route path ='/login' element = {<Login />} />
          <Route path ='/register' element = {<Registration />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
