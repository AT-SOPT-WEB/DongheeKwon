import {
  InputWrapper,
  LoginLink,
  PageWrapper,
  SubTitle,
  Title,
  GuideWrapper,
  LoginText,
  ErrorMessage,
} from "./Signup.styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useSignUpForm } from "../../hook/useSignUp/useSignUpForm";
import { useSignUp } from "../../hook/useSignUp/useSignUp";
import { useStep } from "../../hook/useStep/useStep";
import {
  isValidLoginId,
  isValidPassword,
  isValidNickname,
} from "../../utils/validators";

export default function Signup() {
  const {
    loginId,
    setLoginId,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    nickname,
    setNickname,
  } = useSignUpForm();

  const { step, next } = useStep(1);
  const { handleSubmit } = useSignUp();
  const idLengthExceeded = loginId.length > 20;
  const passwordError = password !== confirmPassword;
  const passwordLengthExceeded = password.length > 20;
  return (
    <PageWrapper>
      <Title>회원가입</Title>

      {step === 1 && (
        <>
          <SubTitle>아이디</SubTitle>
          <Input
            placeholder="아이디를 입력하세요 (8~20자, 대소문자/숫자만 가능)"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
          {idLengthExceeded && (
            <ErrorMessage>최대 길이는 20글자 이하로 입력해주세요.</ErrorMessage>
          )}
          <Button
            text="다음"
            disabled={!isValidLoginId(loginId)}
            onClick={next}
          />
        </>
      )}

      {step === 2 && (
        <>
          <SubTitle>비밀번호</SubTitle>
          <InputWrapper>
            <Input
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              icon={true}
            />
            <Input
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
            />
          </InputWrapper>
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않아요.</ErrorMessage>
          )}
          {passwordLengthExceeded && (
            <ErrorMessage>최대 길이는 20글자 이하로 입력해주세요.</ErrorMessage>
          )}
          <Button
            text="다음"
            disabled={
              !isValidPassword(password) ||
              !isValidPassword(confirmPassword) ||
              password !== confirmPassword
            }
            onClick={next}
          />
        </>
      )}

      {step === 3 && (
        <>
          <SubTitle>닉네임</SubTitle>
          <InputWrapper>
            <Input
              placeholder="닉네임을 입력하세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </InputWrapper>

          <Button
            text="회원가입 하기"
            disabled={!isValidNickname(nickname)}
            onClick={() => handleSubmit(loginId, password, nickname)}
          />
        </>
      )}
      <GuideWrapper>
        <LoginText>이미 회원이신가요?</LoginText>
        <LoginLink to="/login">로그인</LoginLink>
      </GuideWrapper>
    </PageWrapper>
  );
}
