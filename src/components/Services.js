import styled from "styled-components";
import { Classifier, Line, LineSq, Square, Who } from "../styles/General";
import pattern from "../img/pattern.png";
import { ServicesData } from "../data";

const Container = styled.div`
  padding: 50px 100px;
  background: var(--shadow_white) url(${pattern}) no-repeat center center/cover;
  position: relative;
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
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Image = styled.img`
  height: 70px;
  width: 70px;
  object-fit: contain;
`;
const IconContainer = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  /* height: 50px;
  width: 100px; */
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1rem;
`;

const Desc = styled.p`
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
  text-align: center;
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
              <IconContainer>
                <Image src={service.icon} alt={service.title} />
              </IconContainer>
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
