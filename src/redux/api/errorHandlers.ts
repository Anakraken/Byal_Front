import { AxiosError } from 'axios';

interface ErrorResponse {
  message: string;
}

export const errorEquivalence = (error: object | null): string => {
  const axiosError = error as AxiosError<ErrorResponse>;
  const msg = axiosError?.response?.data?.message;
  console.log("FUNCION ERROR", msg)

  if (axiosError?.response?.status === 400) {
    if (!!msg) return msg;
    return 'Por favor, llene bien todos los campos';
  }

  if (axiosError?.response?.status === 500) {
    if (!!msg) return msg;
    return 'Credenciales no válidas, intente de nuevo';
  }
  
  if (msg) return msg;

  return 'Ocurrió un error inesperado';
};