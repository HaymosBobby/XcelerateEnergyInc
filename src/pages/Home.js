import styled from "styled-components";
import Hero from "../components/Hero";
import Goals from "../components/Goals";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Need from "../components/Need";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Hero />
      <Goals />
      <About />
      <Projects />
      <Services />
      <Need />
    </Container>
  )
}

export default Home;
