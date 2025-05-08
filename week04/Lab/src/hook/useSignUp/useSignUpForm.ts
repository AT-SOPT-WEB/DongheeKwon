import { useState } from "react";

export const useSignUpForm = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");

  return {
    loginId,
    setLoginId,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    nickname,
    setNickname,
  };
};
