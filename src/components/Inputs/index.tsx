import React, {useState} from "react";
import { InputContainer, InputPasswordContainer } from "./InputStyles.styles";
import { CheckBox } from "./CheckBox";

type InputTypes = 'text' | 'password' | 'email';

type InputProps = {
  type?: InputTypes;
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
  label,
}:InputProps) => {
  const formattedName = name.replace(/\s+/g, "_").toLowerCase();
  const [inputType, setInputType] = useState('text');

  const handleShow = () => {
    const setType =  inputType === 'text' ? 'password' : 'text';
    setInputType(setType);
  }

  if(!!type && type === 'password') return (
    <InputPasswordContainer error={error?.toString()}>
    <div className='input'>
      <input
      id={formattedName}
      type={inputType}
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

    <CheckBox
    onChange={handleShow}
    label={inputType === 'password' ? 'Mostrar contraseña' : 'Ocultar contraseña'}
    />
   
    {!!error && <p className='error'>{message}</p>}
  </InputPasswordContainer>
  );

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