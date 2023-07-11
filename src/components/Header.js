import { Link } from "react-router-dom";
import {
  Image,
  Wrapper,
  ImageContainer,
  InfoContainer,
  PageTitle,
  GoHome,
} from "../styles/General";
import bgd from "../img/hero-1.jpg";


const Header = ({title}) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={bgd} alt="" />
      </ImageContainer>
      <InfoContainer>
        <PageTitle>{title}</PageTitle>
        <Link to="/">
          <GoHome>Go Home</GoHome>
        </Link>
      </InfoContainer>
    </Wrapper>
  );
};

export default Header;
