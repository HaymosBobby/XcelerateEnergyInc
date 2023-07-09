import styled from "styled-components";
import { Classifier, Image } from "../styles/General";
import { ProjectsData } from "../data";
import prjtBgd from "../img/project-image.jpg";

const Container = styled.div`
  background: var(--shadow_white) url(${prjtBgd}) no-repeat center center/cover;
  padding: 50px 100px;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--pro_overlay);
    z-index: -1;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 550px) {
    /* flex-direction: column; */
    justify-content: center;
  }
`;

const Circle = styled.div`
  z-index: 2;
  height: 180px;
  width: 180px;
  min-width: 180px;
  max-width: 180px;
  flex: 1 0 20%;
  color: var(--white);
  position: relative;
  border: 5px solid var(--white);
  border-radius: 50%;
  overflow: hidden;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--shadow);
  }
`;

const Title = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Projects = () => {
  return (
    <Container>
      <Classifier design="white">Projects</Classifier>
      <Wrapper>
        {ProjectsData.map((project) => {
          return (
            <Circle key={project.id}>
              <Image src={project.img} />
              <Title>{project.title}</Title>
            </Circle>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Projects;
