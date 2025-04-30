import { 
  NavbarContainer,
  Title,
  Avatar,
  UserName, 
  UserRol,
  ButtonsContainer,
  LogoutContainer,
  InfoContainer 
} from '../../Mobile/PortraitStyles.styles';
import { Button } from '../../../../../components/Buttons';
import UserIcon from '../../../../icons/user.png';
import HomeIcon from '../../../../icons/home.svg';
import RegisterIcon from '../../../../icons/registros.svg';
import PreAsigIcon from '../../../../icons/asig-unidades.svg';
import ReporteIcon from '../../../../icons/reporte.svg';
import DriversIcon from '../../../../icons/drivers.svg';
import LogoutIcon from '../../../../icons/logout.svg';
import { MenuProps } from '../../../../types/dashboardTypes';

export const DashboardMobilePortraitView = ({
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
      {/* <InfoContainer> */}
        {/* <Title>BYAL</Title>  */}
          {/* <UserName>{username}</UserName>
          <UserRol>{rol}</UserRol> */}
      {/* </InfoContainer> */}
        
        <ButtonsContainer>
          <Button 
          variant='icon' 
          active={selectedPath.asignacion_unidades}
          onClick={()=>handleNavigate('/dashboard')}
          >
            <img src={HomeIcon} alt='Asignacion-unidades' />
          </Button>
          
          <Button 
          variant='icon' 
          active={selectedPath.registro}
          onClick={()=>handleNavigate('/registro')}
          >
            <img src={RegisterIcon} alt='Registro' />          
          </Button>
          
          <Button 
          variant='icon' 
          active={selectedPath.pre_asignacion}
          onClick={()=>handleNavigate('/pre-asignacion')}
          >
            <img src={PreAsigIcon} alt='Pre-asignacion' />
          </Button>
          
          <Button 
          variant='icon' 
          active={selectedPath.reporte}
          onClick={()=>handleNavigate('/reporte-cierre')}
          >
            <img src={ReporteIcon} alt='Reporte-cierre' />
          </Button>
          
          <Button 
          variant='icon' 
          active={selectedPath.drivers}
          onClick={()=>handleNavigate('/drivers')}
          >
            <img src={DriversIcon} alt='Drivers' />
          </Button>
        </ButtonsContainer>

        <Avatar status={status}>
            <img src={UserIcon} alt='Hamburger-Menu'/>
        </Avatar>

      {/* <LogoutContainer> */}
        {/* <Button 
            variant='icon' 
            onClick={handleLogout}
            >
              <img src={LogoutIcon} alt='Drivers' />
              <span>{!!loading ? 'Cerrando' : "Salir"}</span>
          </Button> */}
      {/* </LogoutContainer> */}
    </NavbarContainer>
  )
}