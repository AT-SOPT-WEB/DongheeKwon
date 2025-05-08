import handleAxiosError from "../../utils/handleAxiosError.js";
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
    return response.data;
  } catch (error) {
    handleAxiosError(error, "로그인 실패");
  }
};

export default PostSignIn;
