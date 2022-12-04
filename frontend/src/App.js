import Container from "@mui/material/Container";
import { Routes, Route} from "react-router-dom";

import { Header } from "./components/Header/index.jsx";
import { Home, FullList, Registration, Login } from "./pages";

function App() {
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
}

export default App;
