import styled from "styled-components";
import { colors,device } from "../../../Theme";

export const NavbarContainer = styled.nav`
  border-right: 2px ridge ${colors.inactive};
  text-align: center;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;

  .menu-icon {
  display: none;
  }

  /////Querys
  @media ${device.mobile} {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    
    .menu-icon {
      display: inline-flex;
      width: 40px;
      height: 40px;
    }
  }
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
  width: 90px;
  height: 90px;
  margin: 0 auto;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export const Title = styled.h1`
  color: ${colors.primary};
  margin-top: 30px;
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

export const Mobile = styled.div`
  display: none;
  /////Querys
  @media ${device.mobile} {
    display: flex;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 40px;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LogoutContainer = styled.div`
  width: 100%;
  border-top: 2px ridge ${colors.inactive};

  img {
    padding-left: 5px;
  }
`;

export const InfoContainer = styled.div``;