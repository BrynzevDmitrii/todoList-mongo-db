import Container from "@mui/material/Container";

import { Header } from "./components/Header/index.jsx";
import { Home, FullList, Registration, AddList, Login } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Home />
        {/*<FullList />*/}
        {/*<AddList />*/}
        {/*<Login />*/}
        {/*<Registration />*/}
      </Container>
    </>
  );
}

export default App;
