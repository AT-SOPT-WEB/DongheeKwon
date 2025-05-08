import { useState } from "react";
import { InputComponent, ToggleIcon, InputWrapper } from "./Input.styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  icon?: boolean;
};

export default function Input({
  placeholder,
  value,
  onChange,
  type = "text",
  icon = false,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <InputWrapper>
      <InputComponent
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={isPassword && !showPassword ? "password" : "text"}
      />
      {isPassword && icon && (
        <ToggleIcon onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </ToggleIcon>
      )}
    </InputWrapper>
  );
}
