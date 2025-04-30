export type SelectedPadProps = {
    asignacion_unidades:boolean;
    registro: boolean;
    pre_asignacion: boolean;
    reporte: boolean;
    drivers: boolean
}
export type MenuProps = {
  status: string | undefined;
  username?: string | undefined;
  rol?: string | undefined;
  selectedPath: SelectedPadProps;
  handleLogout: () => void;
  handleNavigate: (linkPage: string) => void;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: (() => void) | undefined;
}