import React from "react";
import { InputContainer } from "./InputStyles.styles";

type InputProps = {
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  name: string;
  label: string;
  message?: string;
  error?: boolean;
}

export const Input = ({
  name, 
  type, 
  value, 
  onChange, 
  message, 
  error,
  label
}:InputProps) => {
  const formattedName = name.replace(/\s+/g, "_").toLowerCase();

  return (
  <InputContainer error={error?.toString()}>
    <div className='input'>
      <input
      id={formattedName}
      type={type ? type : 'text'} 
      name={name}
      value={value || ""}
      placeholder={label?.toString()}
      onChange={onChange}
      className='input_text'
      />
      <label
      htmlFor={formattedName}
      className='input_label'
      >
         <label>{label}</label>
      </label> 
    </div>

    {!!error && <p className='error'>{message}</p>}
  </InputContainer>
)
};