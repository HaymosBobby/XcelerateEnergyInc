import styled from "styled-components";
import { GoalsData } from "../data";

const Container = styled.div`
  background: var(--white_100);
  padding: 50px 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: auto;

  @media only screen and (max-width: 969px) {
    flex-direction: column;
  }
`;

const IconContainer = styled.div`
  font-size: 1.5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h3`
  text-transform: uppercase;
`;

const Desc = styled.p`
  line-height: 1.7;
  font-size: 0.9rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1 0 30%;
  padding: 30px;
  color: var(--white);
  border-radius: 30px;
  background: var(--primary_color);
  box-shadow: 0 0 10px var(--shadow);
  transition: all 0.3s ease-in-out;

  &:nth-child(odd) {
    background: var(--secondary_color);

    &:hover {
      background: var(--primary_color);
    }
  }

  &:hover {
    background: var(--secondary_color);
  }

  @media only screen and (max-width: 969px) {
    width: 80%;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const Goals = () => {
  return (
    <Container>
      <Wrapper>
        {GoalsData.map((goal) => {
          return (
            <Box key={goal.id}>
              <InfoContainer>
                <IconContainer>{goal.icon}</IconContainer>
                <Title>{goal.title}</Title>
              </InfoContainer>
              <Desc>{goal.desc}</Desc>
            </Box>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Goals;
