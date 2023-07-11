import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Classifier = styled.div`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: ${(props) => (props.design === "white" ? "40" : "10")}px;
  color: ${(props) => props.design === "white" && "var(--white)"};
`;

export const Who = styled.h2`
  font-weight: 900;
  color: ${(props) =>
    props.design === "pry" ? "var(--primary_color)" : "var(--secondary_color)"};
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  height: 300px;
  position: relative;

  `;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: relative;
  
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: var(--shadow);
  }
`;

export const InfoContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 100px;
  left: 100px;
  margin: auto;
  color: var(--white);

  a {
    color: inherit;
  }
`;

export const PageTitle = styled.h1``;

export const GoHome = styled.div``;