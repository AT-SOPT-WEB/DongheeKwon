import styled from "@emotion/styled";
export const ButtonComponent = styled.button<{ disabled?: boolean }>`
  width: 400px;
  padding: 15px 10px;
  border: none;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  color: white;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;
