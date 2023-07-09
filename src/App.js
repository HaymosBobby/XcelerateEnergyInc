import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>

        <Route path="/" >
          <Route index element={<Home /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
