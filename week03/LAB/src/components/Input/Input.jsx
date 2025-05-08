import React from "react";
import { InputWrapper } from "./Input.styles";

export default function Input({ value, placeholder, onChange, onKeyDown }) {
  return (
    <InputWrapper
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}
