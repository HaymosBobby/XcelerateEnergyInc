import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../motions/animation";

const Container = styled(motion.div)`
  height: 50vh;
  padding: 70px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  a {
    color: var(--primary_color);
  }
`;

const Title = styled.h1`
  color: var(--primary_color);
`;

const Desc = styled.p`
  color: var(--grey);
  margin: 30px 0;
`;

const NotFound = () => {
  return (
    <Container
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Wrapper>
        <Title>Page Not Found</Title>
        <Desc>
          Oops! Looks like the page you're looking for is not available
        </Desc>

        <Link to="/">Go Back Home</Link>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
