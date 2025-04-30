/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 10rem;
  padding: 20px 0;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.font.bold};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-radius: 10px;
  padding: 20px;
  ${({ theme }) => theme.font.normal};
  cursor: pointer;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.dark : "transparent"};
  color: ${({ isActive }) => (isActive ? "white" : "#ddd")};
`;
