import { useNavigate } from "react-router";
import PostSignUp from "../../apis/auth/postSignUp";

export const useSignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    loginId: string,
    password: string,
    nickname: string
  ) => {
    try {
      const res = await PostSignUp(
        loginId.trim(),
        password.trim(),
        nickname.trim()
      );
      alert(`${nickname}님 회원가입에 성공하셨습니다!`);
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패", error);
    }
  };

  return { handleSubmit };
};
