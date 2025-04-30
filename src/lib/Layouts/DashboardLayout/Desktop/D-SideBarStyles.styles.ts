import styled from "styled-components";
import { colors,device } from "../../../Theme";

export const NavbarContainer = styled.nav`
  border-right: 2px ridge ${colors.inactive};
  text-align: center;
  height: 100%;
  display: grid;
  grid-template-rows: 55px auto 1fr auto;
`;

export const CloseButton = styled.div`
  display: flex;
  align-items: end;
  justify-content: right;
  cursor: pointer;
  
  img {
    background-color: ${colors.inactive};
    padding: 10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 7%;
    &:hover{
      background-color:rgba(52, 50, 199, 0.22);
    }
  }

`;
export const OpenButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: rotate(180deg);
  margin-top: 20px;
  
  img {
    background-color: ${colors.inactive};
    padding: 10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    &:hover{
      background-color:rgba(52, 50, 199, 0.22);
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
export const AvatarClose = styled.div<AvatarProps>`
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
  }
`;
export const Title = styled.h1`
  color: ${colors.primary};
  margin-top: 10px;
`;
export const TitleClose = styled.h1`
  color: ${colors.primary};
  font-size: 20px;
  margin: 40px 5px 10px 5px;
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
export const ButtonsContainer = styled.div`
  margin-top: 40px;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  gap: 5%;

  @media ${device.tablet} {
    padding-left: 0%;
  }
`;

export const LogoutContainer = styled.div`
  width: 100%;
  border-top: 2px ridge ${colors.inactive};

  img {
    padding-left: 5px;
  }
`;
export const LogoutContainerClose = styled.div`
  width: 100%;
  border-top: 2px ridge ${colors.inactive};
  padding-top: 10px;
  padding-bottom: 30px;

  img {
    padding-left: 5px;
  }
`;
export const InfoContainer = styled.div``; 

export const DashboardContainer = styled.div`
width: 100vw;
height: 100vh;
display: grid;
grid-template-areas: "nav main";  
grid-template-columns: auto 1fr;

.main {
  grid-area: main;
}
.nav {
  grid-area: nav;
}
`;