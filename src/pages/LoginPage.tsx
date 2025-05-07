import React, { useEffect, useState } from 'react';
import { Input } from "../components/Inputs";
import { AuthLayout } from '../lib/Layouts/AuthLayout';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../redux/features/hooks';
import { password_validate, email_validate } from '../lib/form-validations';
import { loginUser } from '../redux/features/auth/authThunks';
import { LoginForm, ValidateLoginForm } from '../lib/types/authType';


export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //Local state
  const [dataInput, setDataInput] = useState(LoginForm);  

  //Local functions
  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDataInput({
      ...dataInput,
      [e.target.name]:e.target.value
    })
  }

   //Submit Logic
     const { loading, error } = useAppSelector(state => state.auth);
     const [serverMessage, setServerMessage] = useState<string | null>('');
     const [fireValidate, setFireValidate] = useState(ValidateLoginForm);
     
     useEffect(()=>{
       setServerMessage(error);
     },[error])
   
     useEffect(() => {
       email_validate(dataInput.email, setFireValidate);
       password_validate(dataInput.password, setFireValidate);
     }, [dataInput.email, dataInput.password]);
   
     const handleSubmit = () => {
       dispatch(loginUser(dataInput))
         .unwrap() //permite usar then y catch
         .then(() => {
           navigate('/asignacion-unidades')
         })
   };
  
    
  return (
    <AuthLayout
    buttonText={loading ? 'Accesando...' : 'Iniciar sesión'}
    // linkText='Registrarse'
    // link='/register'
    onSubmit={handleSubmit}
    >
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