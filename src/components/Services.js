import styled from "styled-components";
import { Classifier, Line, LineSq, Square, Who } from "../styles/General";
import pattern from "../img/pattern.png";
import { ServicesData } from "../data";

const Container = styled.div`
  padding: 50px 100px;
  background: var(--shadow_white) url(${pattern}) no-repeat center center/cover;
  position: relative;
  /* display: flex;
  align-items: center; */
  gap: 20px;
  z-index: 1;

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    background: var(--overlay);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px;
  }

  /* @media only screen and (max-width: 969px) {
    flex-direction: column;
  } */
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const IconContainer = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1rem;
`;

const Desc = styled.p`
  /* opacity: 0; */
  /* position: absolute; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* padding: 20px;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  color: var(--white);
  background: var(--tertiary_color_200);
  transition: all 0.3s ease-in-out;
  z-index: 3;
  line-height: 1.5;
  text-align: center; */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5) rotate(360deg);
  color: var(--white);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
  transition: all 0.75s ease-in-out;
  opacity: 0;
`;

const Box = styled.div`
  flex: 1 0 30%;
  padding: 50px 20px;
  background: var(--white);
  box-shadow: 0 0 10px var(--shadow);
  border-radius: 30px;
  position: relative;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  z-index: 1;

  /* &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #00000040;
    transition: all 0.75s ease-in-out;
    transform: scale(0) rotate(360deg);
    opacity: 0;
    border-radius: 50%;
    margin: auto;
  } */

  &:nth-child(odd) {
    color: var(--primary_color);

    &:hover ${Desc} {
      background: var(--secondary_color_100);
    }
  }
  &:nth-child(even) {
    color: var(--secondary_color);

    &:hover ${Desc} {
      background: var(--primary_color_100);
    }
  }

  &:hover ${Desc} {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) rotate(0);
  }

  &:hover {
    &::after {
      opacity: 1;
      transform: scale(1) rotate(0);
      border-radius: 0;
    }
  }

  @media only screen and (max-width: 969px) {
    flex: 1 0 45%;
  }
  @media only screen and (max-width: 550px) {
    flex: 1 0 90%;
  }
`;

const Services = () => {
  return (
    <Container>
      <Classifier>
        Services
        <LineSq>
          <Square></Square>
          <Line></Line>
        </LineSq>
      </Classifier>
      <Who>What we do</Who>
      <Wrapper>
        {ServicesData.map((service) => {
          return (
            <Box key={service.id}>
              <IconContainer>{service.icon}</IconContainer>
              <Title>{service.title}</Title>
              <Desc>{service.desc}</Desc>
            </Box>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Services;
