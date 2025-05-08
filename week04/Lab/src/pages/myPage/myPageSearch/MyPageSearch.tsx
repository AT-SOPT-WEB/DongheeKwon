import { PageWrapper, SubTitle, Title } from "../MyPage.styles";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useKeyword } from "../../../hook/useKeyword/useKeyword";
import styled from "@emotion/styled";

export default function MyPageSearch() {
  const { keyword, handleKeyword, nickNameList, handleSubmit } = useKeyword();

  return (
    <PageWrapper>
      <Title>Sopt 회원 조회하기</Title>
      <SubTitle>닉네임</SubTitle>
      <Input
        value={keyword}
        onChange={handleKeyword}
        placeholder="검색할 닉네임을 입력하세요."
      />
      <Button text="확인" onClick={handleSubmit} disabled={!keyword} />
      <ListWrapper>
        {nickNameList.map((n, idx) => (
          <NickNameItem key={idx}>{n}</NickNameItem>
        ))}
      </ListWrapper>
    </PageWrapper>
  );
}
const ListWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const NickNameItem = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
  color: #333;
`;
