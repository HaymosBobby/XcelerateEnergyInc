import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";

function App() {
  const location = useLocation();
  const key = location.key;

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={key}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="our-team" element={<OurTeam />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
