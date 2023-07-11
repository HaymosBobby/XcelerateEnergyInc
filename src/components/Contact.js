import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
// import { useInView } from "react-intersection-observer";

const Container = styled.div`
  padding: 70px;

  @media only screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 1.1rem;
  font-weight: 600;
`;

const Desc = styled.p`
  margin-bottom: 10px;
  font-size: 0.9rem;
  z-index: 2;
`;

const IconContainer = styled.div`
  position: absolute;
  color: var(--primary_color);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  text-align: center;
  transform: translateX(50%);
  opacity: 0;
  transition: all 0.3s ease-in-out;
  font-size: 4rem;

  &:nth-child(odd) {
    color: var(--secondary_color);
  }
`;

const Box = styled.div`
  flex: 1 0 30%;
  box-shadow: 0 0 10px var(--shadow);
  background: var(--white);
  padding: 20px;
  border-radius: 10px;
  line-height: 1.3;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: ${(props) => (props.anim ? "animate 0.7s ease-in-out" : "")};

  @keyframes animate {
    from {
      transform: translateX(50%);
    }
    to {
      transform: translateX(0);
    }
  }

  &:hover {
    background: var(--primary_color_100);

    &:nth-child(even) {
      background: var(--secondary_color_100);
    }
  }

  &:hover ${Desc} {
    color: var(--white);
  }

  &:hover ${IconContainer} {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Contact = () => {
  // const [element, view] = useInView();
  // const [element1, view1] = useInView();
  // const [element2, view2] = useInView();

  return (
    <Container>
      <Wrapper>
        {/* <Box ref={element} anim={view}> */}
        <Box>
          <Title>Call us now</Title>
          <Desc>Office Telephone: 4096552465</Desc>
          <Desc>Mobile: 4096552465</Desc>
          <IconContainer>
            <FontAwesomeIcon icon={faPhone} />{" "}
          </IconContainer>
        </Box>
        {/* <Box ref={element1} anim={view1}> */}
        <Box>
          <Title>Come visit us</Title>
          <Desc>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</Desc>
          <IconContainer>
            <FontAwesomeIcon icon={faLocationDot} />
          </IconContainer>
        </Box>
        {/* <Box ref={element2} anim={view2}> */}
        <Box>
          <Title>Send us a message</Title>
          <Desc>General: info@xcelerate.com</Desc>
          <Desc>Sales: sales@xcelerate.com</Desc>
          <IconContainer>
            <FontAwesomeIcon icon={faEnvelope} />
          </IconContainer>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Contact;
