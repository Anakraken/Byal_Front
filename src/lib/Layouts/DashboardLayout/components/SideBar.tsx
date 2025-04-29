import MenuIcon from '../../../icons/menu.svg';
import { Mobile } from './SideBarStyles.styles';
import { useResponsive } from '../../../hooks/useResponsive';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { persistor } from '../../../../redux/store';
import { useAppDispatch, useAppSelector } from '../../../../redux/features/hooks';
import { logoutUser } from '../../../../redux/features/auth/authThunks';
import { DashboardDesktopView } from '../vistas/Desktop';

export const SideBar = () => {
  //Estas variables eventualmente debe tomarlas del servidor
  const status = 'error';
  const rol = 'Dispatcher';

  //manejo de rutas
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState({
    asignacion_unidades:false,
    registro: false,
    pre_asignacion: false,
    reporte: false,
    drivers: false
  })

  useEffect(()=>{
    if(currentPath === '/dashboard') setSelectedPath({...selectedPath, asignacion_unidades: true})
  },[currentPath])

  const handleNavigate = ( linkPage:string ) => {
    navigate(linkPage)
  }

  //manejo de estado global
  const dispatch = useAppDispatch();
  const { loading, username } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        persistor.purge(); // <- 💥 Limpia localStorage
        navigate('/login');
      })
      .catch((err) => console.error("Error en logout:", err));
  };


  const { isMobile, isPortrait, isLandscape } = useResponsive();

  // Mobile - Portrait
  if (isMobile && isPortrait) {
    return (
      <Mobile>
      <img
      className='menu-icon' 
      src={MenuIcon} 
      alt='Hamburger-Menu'
      />
    </Mobile>
    );
  }

  //Mobile - Landscape
  if (isMobile && isLandscape) {
    return <div>Mobile - Landscape</div>;
  }

  //Desktop/Tablet
  return (
    <DashboardDesktopView 
    status={status}
    username={username}
    rol={rol}
    selectedPath={selectedPath}
    handleLogout={handleLogout}
    handleNavigate={handleNavigate}
    loading={loading}
    />
  );
};
