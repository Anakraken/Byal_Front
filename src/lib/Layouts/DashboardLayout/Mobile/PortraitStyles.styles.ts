import styled from "styled-components";
import { colors,device } from "../../../Theme";

export const DashboardContainerMobile = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: 
    "main"
    "nav";
  grid-template-rows: 1fr 60px;

  .main {
    grid-area: main;
  }
  .nav {
    grid-area: nav;
  }
`;

export const NavbarContainer = styled.nav`
  display: grid;
  border-top: 2px ridge ${colors.inactive};
  height: 100%;
  width: 100vw;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 5px;
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

///No usados aun
export const InfoContainer = styled.div``;
export const Title = styled.h1`
  color: ${colors.primary};
  margin-top: 30px;

  @media ${device.tablet} {
    font-size: 20px;
  }
`;
export const UserName = styled.p`
  color: ${colors.border};
  margin-top: 10px;
`;
export const UserRol = styled.p`
  color: ${colors.primary};
  margin-top: 10px;
  font-weight: 600;
`;
export const LogoutContainer = styled.div`
  width: 100%;
  border-top: 2px ridge ${colors.inactive};

  img {
    padding-left: 5px;
  }

  @media ${device.tablet} {
    padding-top: 10px;
    padding-bottom: 30px;
  }

  @media ${device.mobile} {
    border-top: 0;
    width: fit-content;
    padding: 0 10px;
  }
`;