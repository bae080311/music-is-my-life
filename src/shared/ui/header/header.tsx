import * as S from "./styles";
import Logo from "../../../assets/logo.svg";
import Home from "../../../assets/home.svg";
import Profile from "../../../assets/profile.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Logo
        onClick={() => navigate("/callback")}
        src={Logo}
        alt="Spotify Logo"
      />
      <S.Wrapper>
        <img onClick={() => navigate("/callback")} src={Home} alt="Home" />
        <S.Input type="text" />
      </S.Wrapper>
      <S.Profile
        onClick={() => navigate("/profile")}
        src={Profile}
        alt="Profile"
      />
    </S.Header>
  );
};

export default Header;
