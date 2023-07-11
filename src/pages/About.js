import styled from "styled-components";
import AboutComp from "../components/About";
import Goals from "../components/Goals";
import { motion } from "framer-motion";
import { pageAnimation } from "../motions/animation";
import Header from "../components/Header";

const Container = styled(motion.div)``;

const About = () => {
  return (
    <Container
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Header title={`About Us`} />
      <Goals />
      <AboutComp />
    </Container>
  );
};

export default About;
