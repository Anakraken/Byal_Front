import MenuIcon from '../../../icons/menu.svg';
import UserIcon from '../../../icons/user.png';
import HomeIcon from '../../../icons/home.svg';
import RegisterIcon from '../../../icons/registros.svg';
import PreAsigIcon from '../../../icons/asig-unidades.svg';
import ReporteIcon from '../../../icons/reporte.svg';
import DriversIcon from '../../../icons/drivers.svg';
import { Button } from '../../../../components/Buttons';
import { NavbarContainer,Title,Avatar,UserName, UserRol,Mobile,ButtonsContainer } from './SideBarStyles.styles';
import { colors } from '../../../Theme';
import { useResponsive } from '../../../hooks/useResponsive';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SideBar = () => {
  const status = colors.error;
  const username = 'Fulanito de tal';
  const rol = 'Dispatcher';

  const [selectedPath, setSelectedPath] = useState({
    asignacion_unidades:false,
    registro: false,
    pre_asignacion: false,
    reporte: false,
    drivers: false
  })

  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  useEffect(()=>{
    if(currentPath === '/dashboard') setSelectedPath({...selectedPath, asignacion_unidades: true})
  },[currentPath])

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

  if (isMobile && isLandscape) {
    return <div>Mobile - Landscape</div>;
  }

  //Desktop/Tablet
  return (
    <NavbarContainer className="nav">
        <Title>BYAL</Title> 
        <Avatar status={status}>
          <img src={UserIcon} alt='Hamburger-Menu'/>
        </Avatar>
        <UserName>{username}</UserName>
        <UserRol>{rol}</UserRol>
        
        <ButtonsContainer>
          <Button 
          variant='icon' 
          active={selectedPath.asignacion_unidades}
          onClick={() => navigate('/dashboard')}
          >
            <img src={HomeIcon} alt='Asignacion-unidades' />
            <span>Asignacion de unidades</span>
          </Button>

          <Button 
          variant='icon' 
          active={selectedPath.registro}
          onClick={() => navigate('/registro')}
          >
            <img src={RegisterIcon} alt='Registro' />          
            <span>Registro</span>
          </Button>
          
          <Button 
          variant='icon' 
          active={selectedPath.pre_asignacion}
          onClick={() => navigate('/pre-asignacion')}
          >
            <img src={PreAsigIcon} alt='Pre-asignacion' />
            <span>Pre-asignacion de unidades</span>
          </Button>
          
          <Button 
          variant='icon' 
          active={selectedPath.reporte}
          onClick={() => navigate('/reporte-cierre')}
          >
            <img src={ReporteIcon} alt='Reporte-cierre' />
            <span>Reporte/Cierre</span>
          </Button>
          
          
          <Button 
          variant='icon' 
          active={selectedPath.drivers}
          onClick={() => navigate('/drivers')}
          >
            <img src={DriversIcon} alt='Drivers' />
            <span>Drivers</span>
          </Button>
        </ButtonsContainer>
    </NavbarContainer>
  );
};
