import styled from "styled-components";
import ContactComp from "../components/Contact";
import { Link } from "react-router-dom";
import bkgrnd from "../img/industry.jpg";
import { motion } from "framer-motion";
import { pageAnimation } from "../motions/animation";
import { Image } from "../styles/General";
import Header from "../components/Header";
const Container = styled(motion.div)``;

const ContactContainer = styled.div`
  position: relative;
  top: -100px;
  margin-bottom: -50px !important;
  padding: 30px;
  background: var(--white_100);
  width: 90%;
  margin: auto;
  display: flex;
  gap: 30px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    top: 0;
    margin-top: 20px;
    margin-bottom: 0 !important;
  }
`;

const FormContainer = styled.div`
  flex: 1 0 60%;

  @media only screen and (max-width: 768px) {
    flex: 1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactDesc = styled.p``;

const ContactTitle = styled.h2`
  margin: 20px 0;
`;

const InputContainer = styled.div``;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--primary_color);
  colot &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
    color: var(--primary_color);
  }
`;

const Textarea = styled.textarea`
  border: 1px solid var(--primary_color);
  width: 100%;
  padding: 10px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
    color: var(--primary_color);
  }
`;

const Button = styled.button`
  padding: 15px 20px;
  width: 200px;
  border: none;
  background: var(--primary_color);
  color: var(--white);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--white);
    color: var(--primary_color);
    box-shadow: 0 0 5px var(--primary_color_100);
  }
`;

const ImgContainer = styled.div`
  flex: 1 0 35%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  return (
    <Container
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Header title={`Contact Us`} />

      <ContactContainer>
        <FormContainer>
          <ContactDesc>
            Send us a message using this form and we would reply you in 24
            hours.
          </ContactDesc>

          <ContactTitle>Contact Details</ContactTitle>
          <Form>
            <InputContainer>
              <Input type="text" placeholder="Full Name" />
            </InputContainer>
            <InputContainer>
              <Input type="text" placeholder="Enter Address" />
            </InputContainer>
            <InputContainer>
              <Input type="text" placeholder="Subject..." />
            </InputContainer>
            <InputContainer>
              <Textarea rows={5} placeholder="Write message"></Textarea>
            </InputContainer>
            <Button>Send Message</Button>
          </Form>
        </FormContainer>
        <ImgContainer>
          <Image src={bkgrnd} alt="" />
        </ImgContainer>
      </ContactContainer>
      <ContactComp />
    </Container>
  );
};

export default Contact;
