import React, { useEffect, useState } from 'react';
import { Input } from "../components/Inputs";
import { AuthLayout } from '../lib/Layouts/AuthLayout';
import { useNavigate } from "react-router-dom";
import { registerUser } from '../redux/features/auth/authThunks';
import { useAppDispatch, useAppSelector } from '../redux/features/hooks';
import { name_validate, password_validate, email_validate } from '../lib/form-validations';
import { RegisterForm, ValidateRegisterForm } from '../lib/types/authType';
import { clearAuthError } from '../redux/features/auth/authSlice';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //Clear global errors
  useEffect(() => {
    dispatch(clearAuthError());
  }, []);

  //Local state
  const [dataInput, setDataInput] = useState(RegisterForm);  

  //Local functions
  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDataInput({
      ...dataInput,
      [e.target.name]:e.target.value
    })
  };

  //Submit Logic
  const { loading, error } = useAppSelector(state => state.auth);
  const [serverMessage, setServerMessage] = useState<string | null>('');
  const [fireValidate, setFireValidate] = useState(ValidateRegisterForm);
  
  useEffect(()=>{
    setServerMessage(error);
  },[error])

  useEffect(() => {
    name_validate(dataInput.username, setFireValidate);
    email_validate(dataInput.email, setFireValidate);
    password_validate(dataInput.password, setFireValidate);
  }, [dataInput.username, dataInput.email, dataInput.password]);

  const handleSubmit = () => {
    dispatch(registerUser(dataInput))
      .unwrap() //permite usar then y catch
      .then(() => {
        navigate('/dashboard')
      })
};

  return (
    <AuthLayout
    buttonText={loading ? 'Creando cuenta...' : 'Crear usuario'}
    linkText='Iniciar sesión'
    link='/login'
    onSubmit={handleSubmit}
    >
      <Input 
      type="text"
      label='Nombre'
      name='username'
      value={dataInput.username}
      onChange={handleInput}
      error={fireValidate.username}
      message={'Nombre no valido, intenta de nuevo'}
      />
      <Input 
      type="email"
      label='Correo'
      name='email'
      value={dataInput.email}
      onChange={handleInput}
      error={fireValidate.email}
      message={'Correo no valido, intenta de nuevo'}
      />
     <Input 
      type="password"
      label='Contraseña'
      name='password'
      value={dataInput.password}
      onChange={handleInput}
      error={fireValidate.password}
      message={'La contraseña debe tener minimo 6 caracteres'}
      /> 
      {!!serverMessage && serverMessage !== '' && <p className='error'>{serverMessage}</p>}
    </AuthLayout> 
  )
};