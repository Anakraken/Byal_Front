export type TransportistaProps = {
  byal_id: string;
  Driver: string;
  "ID Transportista": string;
  Puesto: string;
  Operacion: string | number;
  Estacion: string;
  "Cumpleaños": string;
  "Numero Personal": string | number;
  "Numero Trabajo": string | number;
  Direccion: string;
  Ubicacion: string;
  Email: string;
  Status: string;
  Unidad: string | number;
};


export type UnidadesMidProps = {
  Unidad: string;
  Placa: string;
  NIV: string;
  "Estatus vehículo": string;
  "Tipo vehículo": string;
  Grupo: string;
  Odómetro: number;
  "Unidad de longitud": string;
  Marca: string;
  Modelo: string;
  Año: number | string;
  "Número económico": string;
  "Número interno": string;
  Seguro: string;
  Poliza: string | null;
  "Poliza Desde": string | null;
  "Poliza Hasta": string | null;
  TC: string;
  "TC Desde": string | null;
  "TC Hasta": string | null;
  Liciencia: string | null;
  Vigencia: string | null;
};

export function sanitizeUnidadesMid(data: any[]): UnidadesMidProps[] {
  return data.map((item) => ({
    Unidad: String(item?.Unidad ?? ''),
    Placa: String(item?.Placa ?? ''),
    NIV: String(item?.NIV ?? ''),
    "Estatus vehículo": String(item?.["Estatus vehículo"] ?? ''),
    "Tipo vehículo": String(item?.["Tipo vehículo"] ?? ''),
    Grupo: String(item?.Grupo ?? ''),
    Odómetro:
      typeof item?.Odómetro === 'number'
        ? item.Odómetro
        : parseFloat(item?.Odómetro) || 0,
    "Unidad de longitud": String(item?.["Unidad de longitud"] ?? ''),
    Marca: String(item?.Marca ?? ''),
    Modelo: String(item?.Modelo ?? ''),
    Año: item?.Año ?? '',
    "Número económico": String(item?.["Número económico"] ?? ''),
    "Número interno": String(item?.["Número interno"] ?? ''),
    Seguro: String(item?.Seguro ?? ''),
    Poliza: item?.Poliza != null ? String(item.Poliza) : null,
    "Poliza Desde":
      item?.["Poliza Desde"] != null
        ? String(item["Poliza Desde"])
        : null,
    "Poliza Hasta":
      item?.["Poliza Hasta"] != null
        ? String(item["Poliza Hasta"])
        : null,
    TC: String(item?.TC ?? ''),
    "TC Desde":
      item?.["TC Desde"] != null ? String(item["TC Desde"]) : null,
    "TC Hasta":
      item?.["TC Hasta"] != null ? String(item["TC Hasta"]) : null,
    Liciencia:
      item?.Liciencia != null ? String(item.Liciencia) : null,
    Vigencia:
      item?.Vigencia != null ? String(item.Vigencia) : null,
  }));
}

export type AsigUnidadesProps = {
  Unidad: string;
  Placa: string;
  NIV: string | null;
  "Estatus vehículo": string;
  "Tipo vehículo": string;
  Grupo: string;
  Driver: string;
  Operacion: string | number;
  Estacion: string;
}