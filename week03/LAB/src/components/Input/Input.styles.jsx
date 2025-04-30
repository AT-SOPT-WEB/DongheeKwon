/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
export const InputWrapper = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.soft};
  border-radius: 10px;
  padding: 15px;
`;
