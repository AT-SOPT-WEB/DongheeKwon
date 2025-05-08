import type { AxiosResponse } from "axios";
import instance from "../instance/instance.js";
import handleAxiosError from "../../utils/handleAxiosError.js";
interface SignUpInterface {
  user: {
    loginId: string;
    password: string;
    nickname: string;
  };
}

// 전체 Axios 응답 타입으로 wrapping
type SignUpResponse = AxiosResponse<SignUpInterface>;

const PostSignUp = async (
  loginId: string,
  password: string,
  nickname: string
): Promise<SignUpResponse> => {
  try {
    const response = await instance.post<SignUpResponse>(
      "/api/v1/auth/signup",
      {
        loginId,
        password,
        nickname,
      }
    );
    return response.data;
  } catch (error) {
    alert("회원가입에 실패했습니다. 아이디와 비밀번호, 닉네임을 확인해주세요.");
    handleAxiosError(error, "회원가입 실패");
  }
};

export default PostSignUp;
