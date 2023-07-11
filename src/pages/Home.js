import styled from "styled-components";
import Hero from "../components/Hero";
import Goals from "../components/Goals";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Need from "../components/Need";
import Contact from "../components/Contact";
import { pageAnimation } from "../motions/animation";
import { motion } from "framer-motion";

const Container = styled(motion.div)``;

const Home = () => {
  return (
    <Container
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Hero />
      <Goals />
      <About />
      <Projects />
      <Services />
      <Need />
      <Contact />
    </Container>
  )
}

export default Home;
