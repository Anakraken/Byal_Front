import React, { useState, useEffect} from 'react';
import { Input } from "../components/Inputs";
import { AuthLayout } from '../lib/Layouts/AuthLayout';

export const RegisterPage = () => {
  const [dataInput, setDataInput] = useState<Record<string, string>>({'username': ''});

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDataInput({
      ...dataInput,
      [e.target.name]:e.target.value
    })
  }

  useEffect(()=>{
    console.log(dataInput);
      },[dataInput.username]);

  const error = true;
    
  return (
    <AuthLayout
    buttonText='Crear usuario'
    linkText='Iniciar sesión'
    link='/login'
    >
      <Input 
      type="text"
      label='Nombre'
      name='username'
      value={dataInput.username}
      onChange={handleInput}
      error={error}
      message={'Nombre no valido, intenta de nuevo'}
      />
      <Input 
      type="email"
      label='Correo'
      name='email'
      value={dataInput.email}
      onChange={handleInput}
      error={error}
      message={'Correo no valido, intenta de nuevo'}
      />
     <Input 
      type="password"
      label='Contraseña'
      name='password'
      value={dataInput.password}
      onChange={handleInput}
      error={error}
      message={'Contraseña no valido, Debe tener minimo 6 caracteres'}
      /> 
    </AuthLayout> 
  )
};