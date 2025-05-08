import { PageWrapper, SubTitle, Title } from "../MyPage.styles";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useNickName } from "../../../hook/useNickName/useNickName";
import { isValidNickname } from "../../../utils/validators";
import { useState } from "react";
export default function MyPageInfo() {
  const { handleSubmit } = useNickName();
  const [newNickName, setNewNickName] = useState("");

  return (
    <PageWrapper>
      <Title>내 정보 수정하기</Title>
      <SubTitle>새 닉네임</SubTitle>
      <Input
        value={newNickName}
        onChange={(e) => setNewNickName(e.target.value)}
        placeholder="새 닉네임을 입력하세요."
      />
      <Button
        text="저장"
        onClick={() => handleSubmit(newNickName)}
        disabled={!isValidNickname(newNickName)}
      />
    </PageWrapper>
  );
}
