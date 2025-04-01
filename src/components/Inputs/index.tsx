import React from "react";
import { InputContainer } from "./InputStyles.styles";

type InputProps = {
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  name: string;
  message?: string;
  error?: boolean;
}

export const Input = ({
  name, 
  type, 
  value, 
  onChange, 
  message, 
  error
}:InputProps) => {
  // Generar un ID seguro basado en label
  const formattedName = name.replace(/\s+/g, "_").toLowerCase();

  return (
  <InputContainer error={error?.toString()}>
    <div className='input'>
      <input
      id={formattedName}
      type={type ? type : 'text'} 
      name={name}
      value={value || ""}
      placeholder={name?.toString()}
      onChange={onChange}
      className='input_text'
      />
      <label
      htmlFor={formattedName}
      className='input_label'
      >
         <label>{name}</label>
      </label> 
    </div>

    {!!error && <p className='error'>{message}</p>}
  </InputContainer>
)
};