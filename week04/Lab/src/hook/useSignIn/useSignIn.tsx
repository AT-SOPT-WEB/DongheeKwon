import { useNavigate } from "react-router";
import PostSignIn from "../../apis/auth/PostSignIn";

export const useSignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = async (loginId: string, password: string) => {
    try {
      console.log("in");
      const res = await PostSignIn(loginId.trim(), password.trim());
      console.log(res);
      if (res.data?.data.userId) {
        localStorage.setItem("userId", res.data.data.userId);
        navigate("/mypage");
      }
    } catch (error) {
      console.error("로그인 실패", error);
    }
  };

  return { handleSubmit };
};
