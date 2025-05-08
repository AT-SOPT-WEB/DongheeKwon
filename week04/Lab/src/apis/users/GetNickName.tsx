import handleAxiosError from "../../utils/handleAxiosError.js";
import instance from "../instance/instance.js";

interface GetNickNameResponse {
  data: any;
}

const GetNickName = async (userId: string): Promise<GetNickNameResponse> => {
  try {
    const response = await instance.get<GetNickNameResponse>(
      `/api/v1/users/me`,
      { headers: { userId: userId } }
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error, "닉네임 가져오기 실패");
  }
};

export default GetNickName;
