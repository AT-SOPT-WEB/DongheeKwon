import handleAxiosError from "../../utils/handleAxiosError.js";
import instance from "../instance/instance.js";

interface NickNameResponse {
  data: any;
}

const PatchNickName = async (
  userId: string,
  nickname: string
): Promise<NickNameResponse> => {
  try {
    const response = await instance.patch<NickNameResponse>(
      "/api/v1/users",
      {
        nickname,
      },
      {
        headers: { userId: userId },
      }
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error, "닉네임 수정 실패");
  }
};

export default PatchNickName;
