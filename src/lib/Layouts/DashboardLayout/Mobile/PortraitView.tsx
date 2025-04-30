import { 
  NavbarContainer,
  Title,
  Avatar,
  UserName, 
  UserRol,
  ButtonsContainer,
  LogoutContainer,
  InfoContainer,
  DashboardContainerMobile
} from './PortraitStyles.styles';
import { Button } from '../../../../components/Buttons';
import UserIcon from '../../../icons/user.png';
import HomeIcon from '../../../icons/home.svg';
import RegisterIcon from '../../../icons/registros.svg';
import PreAsigIcon from '../../../icons/asig-unidades.svg';
import ReporteIcon from '../../../icons/reporte.svg';
import DriversIcon from '../../../icons/drivers.svg';
import { MenuProps } from '../../../types/dashboardTypes';

export const PortraitView = ({
  status,
  username,
  rol,
  selectedPath,
  handleLogout,
  handleNavigate,
  loading,
  children
}:MenuProps) => {
  return(
    <DashboardContainerMobile>
      <main className="main">{children}</main>
      <NavbarContainer className="nav">
        <ButtonsContainer>
          <Button 
          variant='icon' 
          active={selectedPath.asignacion_unidades}
          onClick={()=>handleNavigate('/dashboard')}
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

          <Avatar status={status}>
            <img src={UserIcon} alt='Hamburger-Menu'/>
          </Avatar>
        </ButtonsContainer>

      {/* <LogoutContainer> */}
        {/* <Button 
            variant='icon' 
            onClick={handleLogout}
            >
              <img src={LogoutIcon} alt='Drivers' />
              <span>{!!loading ? 'Cerrando' : "Salir"}</span>
          </Button> */}
      {/* </LogoutContainer> */}
      {/* <InfoContainer> */}
        {/* <Title>BYAL</Title>  */}
          {/* <UserName>{username}</UserName>
          <UserRol>{rol}</UserRol> */}
      {/* </InfoContainer> */}
    </NavbarContainer>
    </DashboardContainerMobile>
  )
}