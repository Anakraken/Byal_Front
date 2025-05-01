import { useState } from 'react';
import { DashboardLayout } from '../lib/Layouts/DashboardLayout';
import { Select } from '../components/Select/Select';

export const AsigUnidades = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const opciones = ["Opción 1", "Opción 2", "Opción 3"];

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <DashboardLayout>
      <div className='center'>
      <Select
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
      </p>
      </div>
    </DashboardLayout>
  );
};