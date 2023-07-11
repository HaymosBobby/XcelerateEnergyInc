import styled from "styled-components";
import { Image } from "../styles/General";
import logo from "../img/xclere-white.png";
import logoWhite from "../img/xceleratelogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Container = styled.div`
  background: ${(props) =>
    props.design ? "var(--white)" : "var(--primary_color)"};
  width: 100%;
  padding: 5px 20px;
  z-index: 99999;
  transition: all 0.3s ease-in-out;
  position: ${(props) => (props.design ? "fixed" : "")};
  top: 0;
  box-shadow: ${(props) => props.design && "0 0 10px var(--shadow)"};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

const Left = styled.div``;

const Logo = styled.div`
  width: 150px;
`;

const Center = styled.div`
  color: ${(props) => (props.design ? "var(--primary_color)" : "var(--white)")};

  @media only screen and (max-width: 950px) {
    color: var(--primary_color);
    background: var(--white);
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    z-index: 9;
    padding-top: 70px;
    box-shadow: 0 0 10px var(--shadow);
    transition: all 0.75s ease-in-out;
    transform: translateX(${(props) => (props.open ? "0" : "-100")}vw);
    opacity: ${(props) => (props.open ? "1" : "0")};
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 10px;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Services = styled.div`
  position: absolute;
  top: 100%;
  left: -50%;
  background: var(--white);
  box-shadow: 0 0 10px var(--shadow);
  padding: 10px;
  width: max-content;
  color: var(--primary_color);
  display: none;
  z-index: 9;

  @media only screen and (max-width: 950px) {
    left: 0;
  }
`;

const MenuItem = styled.li`
  text-transform: uppercase;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  padding: 15px;

  &:nth-child(4) {
    position: relative;
    cursor: pointer;

    &:hover ${Services} {
      display: block;
      animation: classifier 0.5s ease-in-out 0.00001ms;

      @keyframes classifier {
        from {
          transform: translateY(10px);
        }
        to {
          transform: translateY(0);
        }
      }
    }

    svg {
      margin-left: 5px;
    }
  }

  &:hover {
    background: var(--secondary_color);
    color: var(--white);
  }
`;

const Serve = styled.div`
  display: flex;
`;

const ServiceMenu = styled.ul``;

const ServiceMenuItem = styled.li`
  padding: 10px;
`;

const Right = styled.div`
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

const Get = styled.div`
  background: var(--secondary_color);
  color: var(--white);
  padding: 15px 10px;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: 0 0 0 20px;

  svg {
    margin-right: 5px;
    font-size: 18px;
  }
`;

const MobileNavToggler = styled.div`
  height: 50px;
  width: 50px;
  background: var(--white);
  padding: 10px;
  border-radius: 5px;
  box-shadow: ${(props) => props.design && "0 0 5px var(--shadow_white)"};
  cursor: pointer;
  display: none;

  @media only screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ToggleLine = styled.div`
  height: 3px;
  background: var(--primary_color);
  transition: 0.3s ease-in-out;
  border-radius: 5px;

  &:nth-child(1) {
    width: ${(props) => (props.open ? "100" : "100")}%;
    margin-bottom: 5px;
    transform: translateY(${(props) => (props.open ? "5" : "0")}px)
      rotate(${(props) => (props.open ? "45" : "0")}deg);
  }
  &:nth-child(2) {
    width: 85%;
    opacity: ${(props) => (props.open ? "0" : "1")};
  }
  &:nth-child(3) {
    margin-top: 5px;
    width: ${(props) => (props.open ? "100" : "65")}%;
    transform: translateY(${(props) => (props.open ? "-11" : "0")}px)
      rotate(${(props) => (props.open ? "-45" : "0")}deg);
  }
`;

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleMobileNav = () => {
    setOpen(!open);
  };

  window.onscroll = () => {
    setOpen(false);

    window.scrollY > 100 ? setScroll(true) : setScroll(false);
  };

  return (
    <Container design={scroll}>
      <Wrapper>
        <Left>
          <Logo>
            <Image src={scroll ? logoWhite : logo} alt="Xcelerate" />
          </Logo>
        </Left>
        <Center open={open} design={scroll}>
          <Menu>
            <Link to={`/`} onClick={handleMobileNav}>
              <MenuItem>Home</MenuItem>
            </Link>

            <Link to={`/about`} onClick={handleMobileNav}>
              <MenuItem>About us</MenuItem>
            </Link>

            <Link to={`/our-tem`} onClick={handleMobileNav}>
              <MenuItem>Our Team</MenuItem>
            </Link>

            <MenuItem>
              <Serve>
                Services
                <FontAwesomeIcon icon={faSortDown} />
              </Serve>
              <Services>
                <ServiceMenu>
                  <ServiceMenuItem>Power Engineering</ServiceMenuItem>
                  <ServiceMenuItem>Chemical Research</ServiceMenuItem>
                  <ServiceMenuItem>Material Engineering</ServiceMenuItem>
                  <ServiceMenuItem>Oils And Lubricants</ServiceMenuItem>
                  <ServiceMenuItem>Mechanical Engineering</ServiceMenuItem>
                  <ServiceMenuItem>Agricultural Processing</ServiceMenuItem>
                </ServiceMenu>
              </Services>
            </MenuItem>

            <Link to={`/contact`} onClick={handleMobileNav}>
              <MenuItem>Contact</MenuItem>
            </Link>
          </Menu>
        </Center>
        <Right>
          <Link to={"/contact"}>
            <Get>
              <FontAwesomeIcon icon={faCheckCircle} /> Get A Quote
            </Get>
          </Link>
        </Right>

        <MobileNavToggler onClick={handleMobileNav} open={open} design={scroll}>
          <ToggleLine open={open}></ToggleLine>
          <ToggleLine open={open}></ToggleLine>
          <ToggleLine open={open}></ToggleLine>
        </MobileNavToggler>
      </Wrapper>
    </Container>
  );
};

export default Nav;
