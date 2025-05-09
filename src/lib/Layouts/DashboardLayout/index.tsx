import { useResponsive } from "../../hooks/useResponsive";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { persistor } from "../../../redux/store";
import { useAppDispatch, useAppSelector } from '../../../redux/features/hooks';
import { logoutUser } from '../../../redux/features/auth/authThunks';
import { LandscapeOpenView } from "./Desktop/OpenView";
import { LandscapeCloseView } from "./Desktop/CloseView";
import { PortraitView } from "./Mobile/PortraitView";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: AuthLayoutProps) => {
  const status = 'error';
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState({
    asignacion_unidades: false,
    registro: false,
    pre_asignacion: false,
    reporte: false,
    dnr: false
  });

  useEffect(() => {
    if (currentPath === '/asignacion-unidades') {
      setSelectedPath(prev => ({ ...prev, asignacion_unidades: true }));
    }
  }, [currentPath]);

  const handleNavigate = (linkPage: string) => {
    navigate(linkPage);
  };

  const dispatch = useAppDispatch();
  const { loading, username, rol } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        persistor.purge();
        navigate('/login');
      })
      .catch((err) => console.error("Error en logout:", err));
  };

  const [openMenu, setOpenMenu] = useState(true);
  const { isMobilePortrait } = useResponsive();

  const mobile = (
    <PortraitView
    status={status}
    username={username}
    rol={rol}
    selectedPath={selectedPath}
    handleLogout={handleLogout}
    handleNavigate={handleNavigate}
    loading={loading}
    >
      {children}
    </PortraitView>
  );

  const desktop = (!!openMenu ? 
  <LandscapeOpenView
  status={status}
  username={username}
  rol={rol}
  selectedPath={selectedPath}
  handleLogout={handleLogout}
  handleNavigate={handleNavigate}
  loading={loading}
  onClick={()=>setOpenMenu(false)}
  >
      {children}
  </LandscapeOpenView>
  : 
  <LandscapeCloseView
  status={status}
  selectedPath={selectedPath}
  handleLogout={handleLogout}
  handleNavigate={handleNavigate}
  onClick={()=>setOpenMenu(true)}
  >
      {children}
  </LandscapeCloseView>
  );

  return <>{isMobilePortrait ? mobile : desktop}</>;
};
