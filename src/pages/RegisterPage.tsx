import React, { useState, useEffect} from 'react';
import { Input } from "../components/Inputs";

export const RegisterPage = () => {
  const [dataInput, setDataInput] = useState<Record<string, string>>({'name': ''});

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDataInput({
      ...dataInput,
      [e.target.name]:e.target.value
    })
  }

  useEffect(()=>{
    console.log(dataInput);
      },[dataInput.name]);
    
  return (
    <div>
      <form action=''>
      <Input 
      name='name'
      type="text"
      value={dataInput.name}
      onChange={handleInput}
      error={false}
      message={'Nombre no valido, intenta de nuevo'}
      />
      </form>
    </div> 
  )
};
