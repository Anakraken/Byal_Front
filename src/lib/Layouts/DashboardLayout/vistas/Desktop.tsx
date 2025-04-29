import { 
  NavbarContainer,
  Title,
  Avatar,
  UserName, 
  UserRol,
  ButtonsContainer,
  LogoutContainer,
  InfoContainer 
} from '../components/SideBarStyles.styles';
import { Button } from '../../../../components/Buttons';
import UserIcon from '../../../icons/user.png';
import HomeIcon from '../../../icons/home.svg';
import RegisterIcon from '../../../icons/registros.svg';
import PreAsigIcon from '../../../icons/asig-unidades.svg';
import ReporteIcon from '../../../icons/reporte.svg';
import DriversIcon from '../../../icons/drivers.svg';
import LogoutIcon from '../../../icons/logout.svg';
import { MenuProps } from '../../../types/dashboardTypes';

export const DashboardDesktopView = ({
  status,
  username,
  rol,
  selectedPath,
  handleLogout,
  handleNavigate,
  loading
}:MenuProps) => {
  return(
    <NavbarContainer className="nav">
      <InfoContainer>
        <Title>BYAL</Title> 
          <Avatar status={status}>
            <img src={UserIcon} alt='Hamburger-Menu'/>
          </Avatar>
          <UserName>{username}</UserName>
          <UserRol>{rol}</UserRol>
      </InfoContainer>
        
        <ButtonsContainer>
          <Button 
          variant='icon' 
          active={selectedPath.asignacion_unidades}
          onClick={()=>handleNavigate('/dashboard')}
          >
            <img src={HomeIcon} alt='Asignacion-unidades' />
            <span>Asignacion de unidades</span>
          </Button>
          
          <Button 
          variant='icon' 
          active={selectedPath.registro}
          onClick={()=>handleNavigate('/registro')}
          >
            <img src={RegisterIcon} alt='Registro' />          
            <span>Registro</span>
          </Button>
          
          <Button 
          variant='icon' 
          active={selectedPath.pre_asignacion}
          onClick={()=>handleNavigate('/pre-asignacion')}
          >
            <img src={PreAsigIcon} alt='Pre-asignacion' />
            <span>Pre-asignacion de unidades</span>
          </Button>
          
          <Button 
          variant='icon' 
          active={selectedPath.reporte}
          onClick={()=>handleNavigate('/reporte-cierre')}
          >
            <img src={ReporteIcon} alt='Reporte-cierre' />
            <span>Reporte/Cierre</span>
          </Button>
          
          <Button 
          variant='icon' 
          active={selectedPath.drivers}
          onClick={()=>handleNavigate('/drivers')}
          >
            <img src={DriversIcon} alt='Drivers' />
            <span>Drivers</span>
          </Button>
        </ButtonsContainer>

      <LogoutContainer>
        <Button 
            variant='icon' 
            onClick={handleLogout}
            >
              <img src={LogoutIcon} alt='Drivers' />
              <span>{!!loading ? 'Cerrando sesión' : "Cerrar sesión"}</span>
          </Button>
      </LogoutContainer>
    </NavbarContainer>
  )
}