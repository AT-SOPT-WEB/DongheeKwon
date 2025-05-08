import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  InputWrapper,
  PageWrapper,
  Title,
  GuideWrapper,
  LoginLink,
} from "./Login.styles";
import { useSignInForm } from "../../hook/useSignIn/useSignInForm";
import { useSignIn } from "../../hook/useSignIn/useSignIn";

export default function Login() {
  const { loginId, password, handleLoginId, handlePassword } = useSignInForm();
  const { handleSubmit } = useSignIn();

  return (
    <PageWrapper>
      <Title>로그인</Title>
      <InputWrapper>
        <Input
          placeholder={"아이디"}
          value={loginId}
          onChange={handleLoginId}
        />
        <Input
          placeholder={"비밀번호"}
          type={"password"}
          value={password}
          onChange={handlePassword}
        />
      </InputWrapper>
      <Button
        text="로그인"
        disabled={!loginId || !password}
        onClick={() => handleSubmit(loginId, password)}
      />
      <GuideWrapper>
        <LoginLink to="/signup">회원가입</LoginLink>
      </GuideWrapper>
    </PageWrapper>
  );
}
