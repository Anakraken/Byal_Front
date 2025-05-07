import { 
  NavbarContainer,
  Title,
  Avatar,
  UserName, 
  UserRol,
  ButtonsContainer,
  InfoContainer,
  DashboardContainerMobile,
  FullAvatar
} from './PortraitStyles.styles';
import { Button } from '../../../../components/Buttons';
import UserIcon from '../../../icons/user.png';
import HomeIcon from '../../../icons/home.svg';
import RegisterIcon from '../../../icons/registros.svg';
import PreAsigIcon from '../../../icons/asig-unidades.svg';
import ReporteIcon from '../../../icons/reporte.svg';
import DNRIcon from '../../../icons/drivers.svg';
import { MenuProps } from '../../../types/dashboardTypes';
import { useState } from 'react';
import { Modal } from '../../../../components/Modals';

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggle = () => setIsModalVisible(!isModalVisible);

  return(
    <DashboardContainerMobile>
      <main className="main">{children}</main>
      <NavbarContainer className="nav">
        <ButtonsContainer>
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
          active={selectedPath.dnr}
          onClick={()=>handleNavigate('/dnr')}
          center={true}
          >
            <img src={DNRIcon} alt='DNR' />
          </Button>

          <Avatar status={status} onClick={toggle}>
            <img src={UserIcon} alt='Hamburger-Menu'/>
          </Avatar>
        </ButtonsContainer>

        <Modal 
        onBackClick={toggle}
        isVisible={isModalVisible}
        >
          <InfoContainer>
          <Title>BYAL</Title> 
            <FullAvatar status={status}>
              <img src={UserIcon} alt='Hamburger-Menu'/>
            </FullAvatar>
            <UserName>{username}</UserName>
            <UserRol>{rol}</UserRol>
          </InfoContainer>
          <Button onClick={handleLogout}>
              <span>{!!loading ? 'Cerrando sesión' : "Cerrar sesión"}</span>
          </Button>
        </Modal>

    </NavbarContainer>
    </DashboardContainerMobile>
  )
}