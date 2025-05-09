import { useState } from 'react';
import { DashboardLayout } from '../../lib/Layouts/DashboardLayout';


export const Registros = () => {
  //almacenar imagenes
  const [imageBase64, setImageBase64] = useState('');

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement> | null) => {
  //   const file = event?.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImageBase64(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    console.log('FILE', e)
  };
  return (
    <DashboardLayout>
     <div>
      <input type="file" onChange={handleImageChange} />
      {imageBase64 && <img src={imageBase64} alt="Imagen" />}
    </div>
    </DashboardLayout>
  );
};