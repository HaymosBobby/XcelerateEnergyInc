import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/xclere-white.png";
const Container = styled.div`
  background: var(--primary_color);
  color: var(--white);
`;

const Wrapper = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 30px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1 0 30%;
`;

const Logo = styled.div`
  margin-bottom: 20px;
`;

const Icon = styled.img`
  object-fit: cover;
  width: 180px;
`;

const Desc = styled.p`
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const SocialIcon = styled.div`
  display: flex;
  gap: 10px;

  a {
    svg {
      background: var(--white);
      /* font-weight: 700; */
      font-size: 1.2rem;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      padding: 10px;
      color: var(--primary_color);
    }
  }
`;

const Center = styled.div`
  flex: 1 0 30%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;

  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Title = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 20px;
  display: inline-block;
  font-size: 1.25rem;
`;

const Services = styled.ul`
  text-transform: capitalize;
`;

const Service = styled.li`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--white_100);
`;

const Right = styled.div`
  flex: 1 0 30%;
`;

const Description = styled.p`
  margin-bottom: 20px;
`;

const FormContainer = styled.form``;

const InputContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  display: flex;

  @media only screen and (max-width: 768px) {
    width: 70%;
  }
`;

const Input = styled.input`
  padding: 10px;
  border-color: white;
  border: none;
  border-radius: 0;
  color: var(--primary_color);
  width: 100%;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
    color: var(--primary_color);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  color: var(--white);
  background: var(--secondary_color);
  cursor: pointer;
`;

const Divider = styled.div`
  height: 1px;
  background: var(--white_100);
`;

const Bottom = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
`;



const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Container>
      <Wrapper>
        <Top>
          <Left>
            <Logo>
              {/* <Ex>X</Ex>celerate */}
              <Link to="/">
                <Icon src={logo} alt="" />
              </Link>
            </Logo>
            <Desc>
              Xcelerate Energy Inc. primarily helps oil and gas companies
              accelerate sustainable and inclusive growth by guiding their
              journey to a more efficient and sustainable future.
            </Desc>
            <SocialIcon>
              <Link to="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link to="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to="https://www.google.com">
                <FontAwesomeIcon icon={faGoogle} />
              </Link>
            </SocialIcon>
          </Left>
          <Center>
            <div>
              <Title>Our Services</Title>
              <Services>
                <Link to="/">
                  <Service>- Home</Service>
                </Link>
                <Link to="/about">
                  <Service>- About us</Service>
                </Link>
                <Link to="/our-team">
                  <Service>- Our team</Service>
                </Link>
                <Link to="/services">
                  <Service>- Services</Service>
                </Link>
                <Link>
                  <Service>- Contact</Service>
                </Link>
              </Services>
            </div>
          </Center>
          <Right>
            <Title>Join Our Community</Title>
            <Description>
              Subscribe to our newsletter to receive news and updates.
            </Description>
            <FormContainer>
              <InputContainer>
                <Input type="text" placeholder="Enter your email" />
                <Button>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </Button>
              </InputContainer>
            </FormContainer>
          </Right>
        </Top>
        <Divider></Divider>
        <Bottom>
          <Message>
            &copy;{" "}
            {`${date} Xcelerate, The Awesome Oil Industry. All right reserved.`}
          </Message>

        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Footer;
