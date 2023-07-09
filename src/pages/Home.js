import styled from "styled-components";
import Hero from "../components/Hero";
import Goals from "../components/Goals";
import About from "../components/About";
import Projects from "../components/Projects";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Hero />
      <Goals />
      <About />
      <Projects />
    </Container>
  )
}

export default Home;
