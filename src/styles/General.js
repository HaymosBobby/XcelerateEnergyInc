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
