import styled from "styled-components";
import { Classifier, Image } from "../styles/General";
import { Link } from "react-router-dom";
import abtBgd from "../img/abt-ico.png";
import pattern from "../img/pattern.png";

const Container = styled.div`
  padding: 50px 100px;
  background: var(--shadow_white) url(${pattern}) no-repeat center center/cover;
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    background: var(--overlay);
    position: absolute;
    top: 0;
    left: 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px;
  }

  @media only screen and (max-width: 969px) {
    flex-direction: column;
  }
`;

const Who = styled.h2`
  font-weight: 900;
  color: var(--primary_color);
  margin-bottom: 20px;
`;

const Left = styled.div`
  flex: 0 0 45%;
  z-index: 2;
`;

const Desc = styled.p`
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Read = styled.div`
  a {
    color: var(--primary_color);
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 0 0 55%;
  height: max-content;
  z-index: 2;
`;

const AbtImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

const About = () => {
  return (
    <Container>
      <Left>
        <Classifier>About Us</Classifier>
        <Who>Who we are</Who>
        <Desc>
          Xcelerate Energy Inc helps oil and gas companies accelerate
          sustainable and inclusive growth by guiding their journey to a more
          efficient and sustainable future.
        </Desc>
        <Desc>
          Our years of experience and knowledge in international standards,
          technological changes and industrial systems. Xcelerate Energy Inc. is
          primarily engaged in providing pipeline, hottapping and plugging
          services without shutting down the system or losing products
        </Desc>
        <Read>
          <Link>Read More...</Link>
        </Read>
      </Left>
      <Right>
        <AbtImage src={abtBgd} alt="Xclerate" />
      </Right>
    </Container>
  );
};

export default About;
