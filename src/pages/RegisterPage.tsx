import React, { useState, useEffect} from 'react';
import { Input } from "../components/Inputs";

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
    
  return (
    <div>
      <form action=''>
      <Input 
      type="text"
      label='Nombre'
      name='username'
      value={dataInput.username}
      onChange={handleInput}
      // error={true}
      // message={'Nombre no valido, intenta de nuevo'}
      />
      <Input 
      type="email"
      label='Correo'
      name='email'
      value={dataInput.email}
      onChange={handleInput}
      // error={false}
      // message={'Correo no valido, intenta de nuevo'}
      />
      <Input 
      type="password"
      label='Contraseña'
      name='password'
      value={dataInput.password}
      onChange={handleInput}
      // error={false}
      // message={'Contraseña no valido, Debe tener minimo 6 caracteres'}
      />
      </form>
    </div> 
  )
};