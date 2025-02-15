import { loginWithSpotify } from "../../features/auth";
import * as S from "./styles";

const Login = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title className="text-white">Music is my life</S.Title>
        <S.Expalin>with spotify</S.Expalin>
      </S.Wrapper>
      <S.Button onClick={loginWithSpotify}>로그인</S.Button>
    </S.Container>
  );
};

export default Login;
