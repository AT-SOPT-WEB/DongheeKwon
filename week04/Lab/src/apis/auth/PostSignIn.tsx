import instance from "../instance/instance.js";

interface SignInResponse {
  data: any;
  user?: {
    loginId: string;
    password: string;
  };
}

const PostSignIn = async (
  loginId: string,
  password: string
): Promise<SignInResponse> => {
  try {
    const response = await instance.post<SignInResponse>(
      "/api/v1/auth/signin",
      {
        loginId,
        password,
      }
    );
    return response;
  } catch (error: any) {
    if (error.response) {
      alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
      console.error("Login failed:", error.response.data);
    } else {
      alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
      console.error("Network error:", error);
    }
    throw error;
  }
};

export default PostSignIn;
