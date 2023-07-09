import styled from "styled-components";
import Hero from "../components/Hero";
import Goals from "../components/Goals";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Hero />
      <Goals />
    </Container>
  )
}

export default Home;
