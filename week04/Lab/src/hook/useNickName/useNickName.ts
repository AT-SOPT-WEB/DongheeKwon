import { useEffect, useState } from "react";
import PatchNickName from "../../apis/users/PatchNickName";
import GetNickName from "../../apis/users/GetNickName";

export const useNickName = () => {
  const [nickName, setNickName] = useState("");
  const userId = localStorage.getItem("userId");

  const handleSubmit = async (newValue: string) => {
    try {
      if (!userId) return;
      await PatchNickName(userId, newValue.trim());
      window.location.reload();
      alert("정보 변경에 성공했어요.");
    } catch (error) {
      alert("정보 변경에 실패했어요");
    }
  };
  useEffect(() => {
    const fetchNickName = async () => {
      try {
        if (!userId) return;
        const res = await GetNickName(userId);
        setNickName(res.data.data.nickname);
      } catch (error) {
        console.log("닉네임 불러오기 실패: ", error);
      }
    };
    fetchNickName();
  }, []);

  return { nickName, handleSubmit };
};
