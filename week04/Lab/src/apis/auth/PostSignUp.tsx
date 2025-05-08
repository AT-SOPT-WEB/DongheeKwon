import instance from "../instance/instance.js";

interface SignUpResponse {
  data: any;
  user?: {
    loginId: string;
    password: string;
    nickname: string;
  };
}

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
    return response;
  } catch (error: any) {
    if (error.response) {
      alert(
        "회원가입에 실패했습니다. 아이디와 비밀번호, 닉네임을 확인해주세요."
      );
      console.error("Login failed:", error.response.data);
    } else {
      alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
      console.error("Network error:", error);
    }
    throw error;
  }
};

export default PostSignUp;
