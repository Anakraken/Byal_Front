import { useEffect, useState } from 'react';
import { DashboardLayout } from '../../../lib/Layouts/DashboardLayout';
import { Select } from '../../../components/Select/Select';
import { CustomTable } from '../../../components/Table/CustomTable';
import { Button } from '../../../components/Buttons';
import { AsignUnidContainer,Column1,Column2,Column3 } from './asig-unidadesStyles.styles';
import { UnidadesMid } from '../../../lib/dommy-data/unidades_mid';
import { transportistas } from '../../../lib/dommy-data/transportistas';
import { SearchInput } from '../../../components/Inputs/Sercher';
import { TransportistaProps, UnidadesMidProps, sanitizeUnidadesMid, AsigUnidadesProps } from '../../../lib/types/dispatcherTypes';
import { filterData,handleInput } from '../../../lib/functions/input-functions';
import { Modal } from '../../../components/Modals';

export const AsigUnidades = () => {
  // Selects
  const [selectedValue, setSelectedValue] = useState("");
  const opciones = ["Opción 1", "Opción 2", "Opción 3"];

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  //Data from input
  const [dataInput, setDataInput] = useState({Driver:'', Unidad:''});
  
  //New object (Este se va a enviar a la base de datos)
  const [asigUnidData, setAsigUnidData] = useState<AsigUnidadesProps[]>([]);

  //Sercher drivers
  const [driversInfo, setDriversInfo] = useState<TransportistaProps[]>([]);
  const [selectedDriver, setSelectedDriver] = useState('');

  const onDriverchange = (e:React.ChangeEvent<HTMLInputElement>) => { 
      const searchTerm = e.target.value.trim().toLowerCase();
      const filtered = filterData(transportistas, "Driver", searchTerm);
      handleInput(e, setDataInput, dataInput);
      setDriversInfo(filtered);
  }

  //Sercher unidades:
  const [unidadesInfo, setUnidadesInfo] = useState<UnidadesMidProps[]>([]);
  const [selectedUnidad, setSelectedUnidad] = useState('');

  const onUnidadeschange = (e:React.ChangeEvent<HTMLInputElement>) => { 
      const searchTerm = e.target.value.toLowerCase();
      const filtered = filterData(UnidadesMid, "Unidad", searchTerm);
      handleInput(e, setDataInput, dataInput);
      const datosLimpios = sanitizeUnidadesMid(filtered);
      setUnidadesInfo(datosLimpios);
  };

  //Limpia los serchers cuando no hay texto en el input
  // useEffect(()=>{
  //   if(dataInput.Driver === "") setDriversInfo([]);
  //   if(dataInput.Unidad === "") setUnidadesInfo([]);
  // },[dataInput.Driver, dataInput.Unidad]);

  
  const handleAsignar = () => {
    const driverData = filterData(transportistas, "Driver", selectedDriver);
    const unidadData = filterData(UnidadesMid, "Unidad", selectedUnidad);

    // Limpia los inputs y selects un watcher para esto
    setDataInput({ Driver: '', Unidad: '' });
    setSelectedDriver('');
    setSelectedUnidad('');
    setDriversInfo([]);
    setUnidadesInfo([]);
  
    if (!driverData.length || !unidadData.length) return;
  
    const newEntry: AsigUnidadesProps = {
      Driver: driverData[0].Driver,
      Unidad: unidadData[0].Unidad,
      Placa: unidadData[0].Placa,
      NIV: unidadData[0].NIV,
      "Estatus vehículo": unidadData[0]['Estatus vehículo'],
      "Tipo vehículo": unidadData[0]['Tipo vehículo'],
      Operacion: driverData[0].Operacion,
      Estacion: driverData[0].Estacion,
      Grupo: unidadData[0].Grupo
    };
  
    // Verifica que no haya campos vacíos
    const hasEmptyFields = Object.values(newEntry).some(value => value === "");
    if (hasEmptyFields) return;
  
    // 🔍 Validación para evitar asignar misma unidad al mismo driver
    const isDuplicate = asigUnidData.some(
      entry =>
        entry.Driver.trim().toLowerCase() === newEntry.Driver.trim().toLowerCase() &&
        entry.Unidad.trim().toLowerCase() === newEntry.Unidad.trim().toLowerCase()
    );
  
    if (isDuplicate) {
      alert("Este conductor ya tiene asignada esta unidad.");
      return;
    }

    setAsigUnidData(prev => [...prev, newEntry]);
  };  
  
  //Table
  const headerTitles = ["Driver","Unidad","Placa","NIV","Estatus vehículo","Tipo vehículo","Operacion","Estacion","Grupo"];
  const [selectedRow, setSelectedRow] = useState<Record<string,any>>({});

  useEffect(()=>{
    console.log("Table",asigUnidData);
  },[asigUnidData])

  const handleLiberar = () => {
    setAsigUnidData(prev => prev.filter(entry => entry.Driver !== selectedDriver));
    setSelectedDriver('');
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const onButtonClick = () => {
    closeModal();
  }
  return (
    <DashboardLayout>
      <AsignUnidContainer>
      <div className='title'><h1>Asignación de Unidades</h1></div>
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

        <SearchInput
          label="Driver"
          name="Driver"
          options={driversInfo.map(item => item.Driver.trim())}
          value={dataInput.Driver}
          onChange={onDriverchange}
          setSelected={setSelectedDriver}
          disabledOptions={asigUnidData.map(item => item.Driver.trim())}
        />
        <SearchInput
        label='Unidades'
        name='Unidad'
        value={dataInput.Unidad}
        onChange={onUnidadeschange}
        setSelected={setSelectedUnidad}
        options={unidadesInfo.map(item => item.Unidad.trim())}
        disabledOptions={asigUnidData.map(item => item.Unidad.trim())}
        />
        <div className='center'>
        <Button onClick={handleAsignar}>Asignar</Button>
        </div>
        </Column2>
        <Column3 className='row3'>
        <CustomTable 
        data={asigUnidData} 
        header={headerTitles} 
        inactiveKey={"Estatus vehículo"}
        inactiveValue={"Inactivo"}
        isEditable={true}
        setSelected={setSelectedRow}
        setIsModalVisible={setIsModalVisible}
        >
            <Modal isVisible={isModalVisible} onBackClick={closeModal}>
               <p>Driver: {selectedRow.Driver}</p>
               <p>Driver: {selectedRow.Unidad}</p> 
               <br/>
               {selectedRow["Estatus vehículo"] === "Inactivo" && <p>Informacion de Inactividad</p>}
             <Button onClick={onButtonClick}>Desasignar</Button>
           </Modal>
        </CustomTable>
        </Column3>
      </AsignUnidContainer>
    </DashboardLayout>
  );
};