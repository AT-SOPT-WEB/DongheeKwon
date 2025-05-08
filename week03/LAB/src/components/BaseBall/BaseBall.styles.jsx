/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

export const BaseBallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px 0;
  margin-top: 10rem;
  height: calc(100vh - 10rem);
  width: 100%;
`;
export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.font.medium};
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const List = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
`;
