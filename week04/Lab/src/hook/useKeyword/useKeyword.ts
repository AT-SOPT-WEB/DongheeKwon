import { useState } from "react";
import GetNickNames from "../../apis/users/GetNickNames";

export const useKeyword = () => {
  const [keyword, setKeyword] = useState("");
  const [nickNameList, setNickNameList] = useState([]);
  const userId = localStorage.getItem("userId");
  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      if (!userId) return;
      const response = await GetNickNames(keyword);
      setNickNameList(response.data?.data.nicknameList);
    } catch (error) {
      console.error("patch 실패", error);
    }
  };

  return { keyword, handleKeyword, nickNameList, handleSubmit };
};
