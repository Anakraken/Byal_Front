import styled from "styled-components";
import { colors } from "../../../Theme";

export const DashboardContainerMobile = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: 
    "main"
    "nav";
  grid-template-rows: 1fr 60px;
  overflow-y: auto;

  .main {
    grid-area: main;
    padding-bottom: 50px;
  }
  .nav {
    grid-area: nav;
  }
`;

export const NavbarContainer = styled.nav`
position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: grid;
  border-top: 2px ridge ${colors.inactive};
  width: 100vw;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 5px;
  background-color: white;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 0px;
  gap: 20px;
`;

type AvatarProps = {
  status: string | undefined;
};
export const Avatar = styled.div<AvatarProps>`
  background-color: ${({ status }) => (status === 'warning'? colors.warning : status === 'success' ? colors.success : status === 'error' ? colors.error : colors.inactive)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 auto;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

///Estilos dentro del modal
export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
export const Title = styled.h1`
  color: ${colors.primary};
`;
export const UserName = styled.p`
  color: ${colors.border};
  margin-top: 10px;
`;
export const UserRol = styled.p`
  color: ${colors.primary};
  margin-top: 20px;
  margin-bottom: 45px;
  font-weight: 600;
`;
export const FullAvatar = styled.div<AvatarProps>`
  background-color: ${({ status }) => (status === 'warning'? colors.warning : status === 'success' ? colors.success : status === 'error' ? colors.error : colors.inactive)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 0 auto;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;