import instance from "../instance/instance.js";

interface GetNickNameResponse {
  data: any;
}

const GetNickNames = async (keyword: string): Promise<GetNickNameResponse> => {
  try {
    const response = await instance.get<GetNickNameResponse>(`/api/v1/users`, {
      params: { keyword },
    });
    return response;
  } catch (error: any) {
    if (error.response) {
      alert("닉네임을 가져오는데 실패하였습니다.");
      console.error("Get failed:", error.response.data);
    } else {
      alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
      console.error("Network error:", error);
    }
    throw error;
  }
};

export default GetNickNames;
