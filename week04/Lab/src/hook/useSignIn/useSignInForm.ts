import { useState } from "react";

export const useSignInForm = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return {
    loginId,
    handleLoginId,
    password,
    handlePassword,
  };
};
