import { useState } from 'react';
import { DashboardLayout } from '../lib/Layouts/DashboardLayout';
import { Select } from '../components/Select/Select';
import { CustomTable } from '../components/Table/CustomTable';

export const AsigUnidades = () => {
  const [selectedValue, setSelectedValue] = useState("");

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

  return (
    <DashboardLayout>
      <div className='center'>
      {/* <Select
        label="Selecciona una opción"
        options={opciones}
        onSelect={handleSelect}
        name="mi_select"
        error={selectedValue === ""}
        message="Este campo es requerido"
      />
      <br />
      <br />
      <p style={{ marginTop: "20px" }}>
        Valor seleccionado: <strong>{selectedValue}</strong>
      </p> */}
      <div style={{ width: "800px"}}>
        <CustomTable data={sampleData} />
      </div>
      </div>
    </DashboardLayout>
  );
};