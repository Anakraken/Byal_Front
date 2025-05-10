import { useState } from 'react';
import { DashboardLayout } from '../../../lib/Layouts/DashboardLayout';
import { Select } from '../../../components/Select/Select';
import { CustomTable } from '../../../components/Table/CustomTable';
import { Input } from '../../../components/Inputs';
import { Button } from '../../../components/Buttons';
import { AsignUnidContainer,Column1,Column2,Column3 } from './asig-unidadesStyles.styles';

export const DNR = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [dataInput, setDataInput] = useState({test1:'', test2:''}); 

  const fireValidate = {
    test1:true, 
    test2:false
  }

  const opciones = ["Opción 1", "Opción 2", "Opción 3"];

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  const sampleData = [
    {
      Unidad: 'BLL002',
      Placas: 'YR1151D',
      NIV: 'JHHYEP0H0FK001405',
      Status: 'Activo',
      TipoVehiculo: 'Large Van Peugeot Manager Furgon',
      Driver: 'Celia Georgina González Escalante',
      Operacion: 'DMY4'
    },
    {
      Unidad: 'BLL002',
      Placas: 'YR1151D',
      NIV: 'JHHYEP0H0FK001405',
      Status: 'Inactivo',
      TipoVehiculo: 'Large Van Peugeot Manager Furgon',
      Driver: 'Celia Georgina González Escalante',
      Operacion: 'DMY4'
    },
    {
      Unidad: 'BLL002',
      Placas: 'YR1151D',
      NIV: 'JHHYEP0H0FK001405',
      Status: 'Activo',
      TipoVehiculo: 'Large Van Peugeot Manager Furgon',
      Driver: 'Celia Georgina González Escalante',
      Operacion: 'DMY4'
    },
  ];

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDataInput({
      ...dataInput,
      [e.target.name]:e.target.value
    })
  }

  return (
    <DashboardLayout>
      <AsignUnidContainer>
      <div className='title'><h1>DNR</h1></div>
        <Column1 className='row1'>
        <Select
        label="Selecciona una opción"
        options={opciones}
        onSelect={handleSelect}
        name="mi_select"
        error={selectedValue === ""}
        message="Este campo es requerido"
        />
        <Select
        label="Selecciona una opción"
        options={opciones}
        onSelect={handleSelect}
        name="mi_select"
        error={selectedValue === ""}
        message="Este campo es requerido"
        />
        <Select
        label="Selecciona una opción"
        options={opciones}
        onSelect={handleSelect}
        name="mi_select"
        error={selectedValue === ""}
        message="Este campo es requerido"
        />
        </Column1>

        <Column2 className='row2'>
        <Input 
        type="text"
        label='Correo'
        name='test1'
        value={dataInput.test1}
        onChange={handleInput}
        error={fireValidate.test1}
        message={'Correo no válido, intenta de nuevo'}
        />
        <Input 
          type="text"
          label='Correo'
          name='test2'
          value={dataInput.test2}
          onChange={handleInput}
          error={fireValidate.test2}
          message={'Correo no válido, intenta de nuevo'}
        />
          <div className='center'>
          <Button>Prueba</Button>
          </div>
        </Column2>
        <Column3 className='row3'>
        <CustomTable data={sampleData} isExported={true} />
        </Column3>
      </AsignUnidContainer>
    </DashboardLayout>
  );
};