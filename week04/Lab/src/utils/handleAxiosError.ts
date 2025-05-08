import axios from "axios";

const handleAxiosError = (error: unknown, fallbackMessage?: string): never => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const message =
        error.response.data?.message ||
        fallbackMessage ||
        "요청이 실패했습니다.";
      console.log(message);
    } else {
      console.log("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
  } else {
    console.log("알 수 없는 오류가 발생했습니다.");
  }

  throw error;
};
export default handleAxiosError;
