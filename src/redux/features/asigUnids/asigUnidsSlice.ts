import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsigUnidadesProps } from '../../../lib/types/dispatcherTypes';

const asigUnidsInitialState: AsigUnidadesProps[] = [];

const asigUnidsSlice = createSlice({
  name: 'asigUnids',
  initialState: asigUnidsInitialState,
  reducers: {
    setAsig: (state, action: PayloadAction<AsigUnidadesProps>) => {
      // Evita duplicados
      const exists = state.some(
        item =>
          item.Driver.toLowerCase() === action.payload.Driver.toLowerCase() &&
          item.Unidad.toLowerCase() === action.payload.Unidad.toLowerCase()
      );
      if (!exists) {
        state.push(action.payload);
      }
    },
    //Borrar todas las asignaciones
    clearAsig: (state) => {
      return [];
    },
    removeAsig: (state, action: PayloadAction<{ Driver: string }>) => {
      return state.filter(item => item.Driver !== action.payload.Driver);
    }
  },
});

export const { setAsig, clearAsig, removeAsig } = asigUnidsSlice.actions;
export default asigUnidsSlice.reducer;


// Equivalencia a removeAsig
  //   const indexPosition = asigUnidData.findIndex(item => item.Driver === selectedRow.Driver);
  //   const newData = [...asigUnidData];
  //   newData.splice(indexPosition, 1);
  //   setAsigUnidData(newData);