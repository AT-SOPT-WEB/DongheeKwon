/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: white;
  border-radius: 20px;
`;
export const CardButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
export const ProfileAvatar = styled.img`
  width: 100px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.soft};
`;
export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ProfileHeader = styled.div`
  ${({ theme }) => theme.font.medium}
`;

export const ProfileDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FollowBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
export const FollowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 10px;
  width: 50%;
  padding: 15px;

  background-color: ${({ theme }) => theme.colors.soft};
  color: black;
`;
export const FollowStats = styled.div``;
export const FollowNum = styled.div``;
