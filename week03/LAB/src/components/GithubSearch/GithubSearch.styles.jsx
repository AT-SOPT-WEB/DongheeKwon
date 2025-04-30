/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

export const GithubWrapper = styled.div`
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

export const RecentSearches = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;
export const Title = styled.p`
  ${({ theme }) => theme.font.medium}
`;
export const KeyWords = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const Keyword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 10px;
  gap: 4px;
  border-radius: 10px;
  border: 1px solid black;
`;
export const Text = styled.span`
  ${({ theme }) => theme.font.normal}
`;
export const XImg = styled.img`
  width: 15px;
  cursor: pointer;
`;
