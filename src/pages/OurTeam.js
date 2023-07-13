import styled from "styled-components";
import Header from "../components/Header";
import Need from "../components/Need";
import {
  Classifier,
  Image,
  Line,
  LineSq,
  Square,
  Who,
} from "../styles/General";
import ex from "../img/xcross-team.png";
import pattern from "../img/pattern.png";
import { TeamData } from "../data";
import { pageAnimation } from "../motions/animation";
import { motion } from "framer-motion";

const Container = styled(motion.div)``;

const Wrapper = styled.div`
  padding: 0 100px;
  background: var(--shadow_white) url(${pattern}) no-repeat center center/cover;
  position: relative;
  display: flex;
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
    padding: 30px 50px;
  }
`;

const Left = styled.div`
  flex: 1 0 80%;
  padding: 50px 0;

  @media only screen and (max-width: 1020px) {
    flex: 1 0 70%;
  }
  @media only screen and (max-width: 969px) {
    flex: 1 0 60%;
  }
  @media only screen and (max-width: 910px) {
    flex: 1 0 50%;
  }
`;

const TeamContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

const ImageContainer = styled.div`
  padding: 0 8px;
  margin-bottom: -5px;
`;

const Name = styled.div`
  background: var(--primary_color);
  padding: 3px 15px;
  font-size: 1.4rem;
`;

const Position = styled.div`
  background: var(--secondary_color);
  padding: 3px 15px;
  width: 80%;
`;

const Box = styled.div`
  color: var(--white);
  flex: 0 0 200px;
  font-family: "Bebas Neue", sans-serif;

  &:nth-child(odd) ${Name} {
    background: var(--secondary_color);
  }

  &:nth-child(odd) ${Position} {
    background: var(--primary_color);
  }
`;

const Right = styled.div`
  flex: 1 0 20%;
  background: url(${ex}) center center/cover no-repeat;

  @media only screen and (max-width: 800px) {
    display: none;
  }

  @media only screen and (max-width: 1020px) {
    flex: 1 0 30%;
  }
  @media only screen and (max-width: 969px) {
    flex: 1 0 40%;
  }
  @media only screen and (max-width: 910px) {
    flex: 1 0 50%;
  }
`;

const OurTeam = () => {
  return (
    <Container
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Header title={`Our Team`} />
      <Wrapper>
        <Left>
          <Classifier>
            Our Team
            <LineSq>
              <Square></Square>
              <Line></Line>
            </LineSq>
          </Classifier>
          <Who>Management Team</Who>
          <TeamContainer>
            {TeamData.map((member) => {
              return (
                <Box key={member.id}>
                  <ImageContainer>
                    <Image
                      src={member.img}
                      alt={member.name}
                      style={{ borderRadius: "15px 15px 0 0" }}
                    />
                  </ImageContainer>
                  <Name>{member.name}</Name>
                  <Position>{member.position}</Position>
                </Box>
              );
            })}
          </TeamContainer>
        </Left>
        <Right></Right>
      </Wrapper>
      <Need />
    </Container>
  );
};

export default OurTeam;
