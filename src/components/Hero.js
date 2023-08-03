import styled from "styled-components";
import { SliderItems } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCallback } from "react";
import { useRef } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
    appearance: none;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.scrollnum * -100}vw);
`;

const Arrow = styled.div`
  width: 35px;
  height: 35px;
  font-size: 1.1rem;
  background: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  border: 3px solid var(--secondary_color);
  z-index: 2;
  color: var(--secondary_color);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 70px);
  background: #${(props) => props.bg};
  position: relative;

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    background: var(--shadow);
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    background: #00000040;
    top: 0;
    left: 0;
    position: absolute;
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const InfoContainer = styled.div`
  padding: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  color: var(--white);
  z-index: 2;

  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 40px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;

  @media only screen and (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Desc = styled.p`
  margin: 30px 0;
  font-weight: 500;
  letter-spacing: 2px;

  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  border-radius: 5px;
  text-transform: capitalize;
  font-weight: 700;
  color: ${(props) =>
    props.col === "pry" ? "var(--white)" : "var(--secondary_color)"};
  font-size: 0.9rem;
  border: none;
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background: ${(props) =>
    props.col === "pry" ? "var(--secondary_color)" : "var(--white)"};

  &:hover {
    background: ${(props) =>
      props.col === "pry" ? "var(--primary_color)" : "var(--secondary_color)"};
    color: var(--white);
  }

  @media only screen and (max-width: 768px) {
    padding: 15px 10px;
    font-size: 0.8rem;
  }
`;

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const timeOutRef = useRef(null);

  function resetTimeout() {
    if (timeOutRef.current) {
      console.log(timeOutRef.current)
      clearTimeout(timeOutRef.current);
    }
  }

  const prevSlide = () => {
    return setSlideIndex(
      slideIndex > 0 ? slideIndex - 1 : SliderItems.length - 1
    );
  };
  const nextSlide = useCallback(() => {
    return setSlideIndex(
      slideIndex < SliderItems.length - 1 ? slideIndex + 1 : 0
    );

  }, [slideIndex]);

  const handleClick = (direction) => {
    if (direction === "left") {
      prevSlide();
    } else if (direction === "right") {
      nextSlide();
    }
  };

  useEffect(() => {
    resetTimeout();

    timeOutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);
  }, [nextSlide]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Arrow>
      <Wrapper scrollnum={slideIndex}>
        {SliderItems.map((slide) => {
          return (
            <Slide bg={slide.bg} key={slide.id}>
              <ImageContainer>
                <Image src={slide.img} alt={slide.title} />
              </ImageContainer>
              <InfoContainer>
                <Title>{slide.title}</Title>
                <Desc>{slide.desc}</Desc>
                <ButtonContainer>
                  <Link to={`about`}>
                    <Button col="pry">Read More</Button>
                  </Link>
                  <Link to={`contact`}>
                    <Button col="sec">Contact Us</Button>
                  </Link>
                </ButtonContainer>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <FontAwesomeIcon icon={faAngleRight} />
      </Arrow>
    </Container>
  );
};

export default Hero;
