import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 400px;
  min-height: 100vh;
  margin: 0 auto;
`;
export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
export const SubTitle = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
export const GuideWrapper = styled.div`
  display: flex;
  font-size: 0.9rem;
  color: #666;
  margin-top: 1.5rem;
`;
export const LoginText = styled.span``;

export const LoginLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 6px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
export const ErrorMessage = styled.p`
  color: red;
  width: 100%;
  text-align: left;
  font-size: 0.9rem;
  font-weight: 500;
`;
