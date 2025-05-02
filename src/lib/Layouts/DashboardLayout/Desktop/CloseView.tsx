import { 
  NavbarContainer,
  ButtonsContainerClose,
  InfoContainer,
  OpenButton,
  AvatarClose,
  TitleClose,
  DashboardContainer,
  LogoutContainerClose
} from './D-SideBarStyles.styles';
import { Button } from '../../../../components/Buttons';
import UserIcon from '../../../icons/user.png';
import HomeIcon from '../../../icons/home.svg';
import RegisterIcon from '../../../icons/registros.svg';
import PreAsigIcon from '../../../icons/asig-unidades.svg';
import ReporteIcon from '../../../icons/reporte.svg';
import DriversIcon from '../../../icons/drivers.svg';
import LogoutIcon from '../../../icons/logout.svg';
import Arrow from '../../../icons/left-arrow.svg';
import { MenuProps } from '../../../types/dashboardTypes';

export const LandscapeCloseView = ({
  status,
  selectedPath,
  handleLogout,
  handleNavigate,
  onClick, 
  children
}:MenuProps) => {
return (
  <DashboardContainer>
    <NavbarContainer className="nav">
  <OpenButton onClick={onClick}>
    <img src={Arrow} alt='Hamburger-Menu'/>
  </OpenButton>
  <InfoContainer>
    <TitleClose>BYAL</TitleClose> 
      <AvatarClose status={status}>
        <img src={UserIcon} alt='Hamburger-Menu'/>
      </AvatarClose>
  </InfoContainer>
    
    <ButtonsContainerClose>
      <Button 
      variant='icon' 
      active={selectedPath.asignacion_unidades}
      onClick={()=>handleNavigate('/asignacion-unidades')}
      center={true}
      >
        <img src={HomeIcon} alt='Asignacion-unidades' />
      </Button>
      
      <Button 
      variant='icon' 
      active={selectedPath.registro}
      onClick={()=>handleNavigate('/registro')}
      center={true}
      >
        <img src={RegisterIcon} alt='Registro' />          
      </Button>
      
      <Button 
      variant='icon' 
      active={selectedPath.pre_asignacion}
      onClick={()=>handleNavigate('/pre-asignacion')}
      center={true}
      >
        <img src={PreAsigIcon} alt='Pre-asignacion' />
      </Button>
      
      <Button 
      variant='icon' 
      active={selectedPath.reporte}
      onClick={()=>handleNavigate('/reporte-cierre')}
      center={true}
      >
        <img src={ReporteIcon} alt='Reporte-cierre' />
      </Button>
      
      <Button 
      variant='icon' 
      active={selectedPath.drivers}
      onClick={()=>handleNavigate('/drivers')}
      center={true}
      >
        <img src={DriversIcon} alt='Drivers' />
      </Button>
    </ButtonsContainerClose>

  <LogoutContainerClose>
    <Button 
        variant='icon' 
        onClick={handleLogout}
        center={true}
        >
          <img src={LogoutIcon} alt='Drivers' />
      </Button>
  </LogoutContainerClose>
  </NavbarContainer>
  <main className="main">{children}</main>
  </DashboardContainer>
)
};