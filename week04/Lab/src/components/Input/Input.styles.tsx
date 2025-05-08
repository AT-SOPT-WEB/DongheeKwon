import styled from "@emotion/styled";
export const InputComponent = styled.input`
  width: 400px;
  padding: 15px 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ToggleIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.2rem;
  color: #666;
`;
