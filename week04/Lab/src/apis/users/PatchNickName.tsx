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
    return response;
  } catch (error: any) {
    if (error.response) {
      alert("patch에 실패");
      console.error("failed:", error.response.data);
    } else {
      alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
      console.error("Network error:", error);
    }
    throw error;
  }
};

export default PatchNickName;
