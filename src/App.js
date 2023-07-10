import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Footer from "./components/Footer";



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
      <Footer />
    </div>
  );
}

export default App;
