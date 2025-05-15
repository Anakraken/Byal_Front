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
  //Data from input
  const [dataInput, setDataInput] = useState({Driver:'', Unidad:''});
  const [fireValidations, setfireValidation] = useState({Driver:false, Unidad:false})
  
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

  // Limpia los serchers cuando no hay texto en el input
  useEffect(()=>{
    if(dataInput.Driver === "") setDriversInfo([]);
    if(dataInput.Unidad === "") setUnidadesInfo([]);
  },[dataInput.Driver, dataInput.Unidad]);
  
  useEffect(()=>{
    if(dataInput.Driver.length > 0 || selectedDriver.length > 0) setfireValidation({...fireValidations, Driver: false})
    if(dataInput.Unidad.length > 0 || selectedUnidad.length > 0) setfireValidation({...fireValidations, Unidad: false})
      
  },[dataInput.Driver, dataInput.Unidad, selectedDriver, selectedUnidad]);

  
  const handleAsignar = () => {
    if(dataInput.Driver === '' || dataInput.Unidad === '') setfireValidation({Driver: true, Unidad: true})

    if(selectedDriver.length > 0 && selectedUnidad.length > 0) {

      const driverData = filterData(transportistas, "Driver", selectedDriver);
      const unidadData = filterData(UnidadesMid, "Unidad", selectedUnidad);

      // Limpia los inputs y selects
      setDataInput({ Driver: '', Unidad: '' });
      setfireValidation({Driver: false, Unidad: false})
      setSelectedUnidad('');
      setSelectedDriver('');
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
      }
  };  
  
  // Selects
  const opcionesEstatus = ["Todos", ...Array.from(
    new Set(UnidadesMid.map(item => item["Estatus vehículo"].trim().toLowerCase()))
  )].map(status => status.charAt(0).toUpperCase() + status.slice(1));
  
  const opcionesTipo = ["Todos", ...Array.from(
    new Set(UnidadesMid.map(item => item["Tipo vehículo"].trim().toLowerCase()))
  )].map(status => status.charAt(0).toUpperCase() + status.slice(1));
  
  const opcionesOperacion = ["Todos", ...Array.from(
    new Set(transportistas.map(item => item.Operacion.toString().trim().toLowerCase()))
  )].map(status => status.charAt(0).toUpperCase() + status.slice(1));
  

  //Table
  const headerTitles = ["Driver","Unidad","Placa","NIV","Estatus vehículo","Tipo vehículo","Operacion","Estacion","Grupo"];
  const [selectedRow, setSelectedRow] = useState<Record<string,any>>({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredTableData, setFilteredTableData] = useState<AsigUnidadesProps[]>([]);
  const [filters, setFilters] = useState({
    estatus: 'Todos',
    tipo: 'Todos',
    operacion: 'Todos'
  });

  useEffect(() => {
    const filtered = asigUnidData.filter(item => {
      const matchEstatus =
        filters.estatus === 'Todos' ||
        item["Estatus vehículo"].toLowerCase() === filters.estatus.toLowerCase();
  
      const matchTipo =
        filters.tipo === 'Todos' ||
        item["Tipo vehículo"].toLowerCase() === filters.tipo.toLowerCase();
  
      const matchOperacion =
        filters.operacion === 'Todos' ||
        item["Operacion"].toString().toLowerCase() === filters.operacion.toLowerCase();
  
      return matchEstatus && matchTipo && matchOperacion;
    });
  
    setFilteredTableData(filtered);
  }, [asigUnidData, filters]);  

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const onButtonClick = () => {
    const indexPosition = asigUnidData.findIndex(item => item.Driver === selectedRow.Driver);
    const newData = [...asigUnidData];
    newData.splice(indexPosition, 1);
    setAsigUnidData(newData);
    closeModal();
  }; 

  const handleSelect = (value: string, name: string) => {
    const updatedFilters = {
      ...filters,
      [name]: value
    };
  
    setFilters(updatedFilters);
  
    const filtered = asigUnidData.filter(item => {
      const matchEstatus =
        updatedFilters.estatus === 'Todos' ||
        item["Estatus vehículo"].toLowerCase() === updatedFilters.estatus.toLowerCase();
  
      const matchTipo =
        updatedFilters.tipo === 'Todos' ||
        item["Tipo vehículo"].toLowerCase() === updatedFilters.tipo.toLowerCase();
  
      const matchOperacion =
        updatedFilters.operacion === 'Todos' ||
        item["Operacion"].toString().toLowerCase() === updatedFilters.operacion.toLowerCase();
  
      return matchEstatus && matchTipo && matchOperacion;
    });
  
    setFilteredTableData(filtered);
  };  

  return (
    <DashboardLayout>
      <AsignUnidContainer>
      <div className='title'><h1>Asignación de Unidades</h1></div>
        <Column1 className='row1'>
        <Select
        label="Estatus vehículo"
        options={opcionesEstatus}
        onSelect={(value) => handleSelect(value, "estatus")}
        name="estatus"
        />
        <Select
        label="Tipo vehículo"
        options={opcionesTipo}
        onSelect={(value) => handleSelect(value, "tipo")}
        name="tipo"
        />
        <Select
        label="Operacion"
        options={opcionesOperacion}
        onSelect={(value) => handleSelect(value, "operacion")}
        name="operacion"
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
          error={fireValidations.Driver}
          message="Por favor, llena todos los campos"
        />
        <SearchInput
        label='Unidades'
        name='Unidad'
        value={dataInput.Unidad}
        onChange={onUnidadeschange}
        setSelected={setSelectedUnidad}
        options={unidadesInfo.map(item => item.Unidad.trim())}
        disabledOptions={asigUnidData.map(item => item.Unidad.trim())}
        error={fireValidations.Unidad}
        message="Por favor, llena todos los campos"
        />
        <div className='center'>
        <Button onClick={handleAsignar}>Asignar</Button>
        </div>
        </Column2>
        <Column3 className='row3'>
        <CustomTable 
        data={filteredTableData} 
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