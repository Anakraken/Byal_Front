import styled from "styled-components";
import { colors,device } from "../../../Theme";

export const NavbarContainer = styled.nav`
  border-right: 2px ridge ${colors.inactive};
  text-align: center;

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
  status: string;
};
export const Avatar = styled.div<AvatarProps>`
  background-color: ${({ status }) => (status || colors.inactive)};
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
  display: grid;
  grid-template-rows: repeat(1fr);
  row-gap: 15px;
`;