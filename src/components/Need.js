import styled from "styled-components";
import bgd from "../img/service-image.jpg";

const Container = styled.div`
  background: linear-gradient(var(--shadow), var(--shadow)),
    var(--shadow) url(${bgd}) no-repeat center center/cover fixed;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--need_overlay);
    z-index: -1;
  }
`;

const Wrapper = styled.div`
  padding: 70px 100px;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  text-align: center;

  @media only screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Desc = styled.p`
  margin: 20px 0;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 15px 30px;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 0.9rem;
  height: 100%;
  border-radius: 5px;
  background: var(--white);
  color: var(--secondary_color);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    background: var(--secondary_color);
    color: var(--white);
    transform: scale(1.02);
  }
`;

const Need = () => {
  return (
    <Container>
      <Wrapper>
        <Title>If you need Oil & Gas solution, get in touch with us!</Title>
        <Desc>
          Our culture is built upon the principles of responsibility, trust and
          integrity. Our leadership is a profound source of pride and we will
          lead in the future of energy
        </Desc>
        <Button>Contact Us</Button>
      </Wrapper>
    </Container>
  );
};

export default Need;
