import handleAxiosError from "../../utils/handleAxiosError.js";
import instance from "../instance/instance.js";

interface GetNickNameResponse {
  data: any;
}

const GetNickNames = async (keyword: string): Promise<GetNickNameResponse> => {
  try {
    const response = await instance.get<GetNickNameResponse>(`/api/v1/users`, {
      params: { keyword },
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error, "닉네임 리스트 가져오기 실패");
  }
};

export default GetNickNames;
