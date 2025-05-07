import styled from "styled-components";
import { colors} from "../../lib/Theme";

export const PrimaryButton = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  color: white;
  background-color: ${colors.primary};
  transition: background-color 0.5s;
  box-shadow: 0 0 10px ${colors.shadow};
  &:hover{
    background-color: ${colors.primaryOver};
  }
`;

type CustomButtonProps = {
  linewidth?: string;
};
export const CustomButton = styled(PrimaryButton)<CustomButtonProps>`
  //-LINK-//
  &.link{
    background: transparent;
    box-shadow: 0 0 0 0;
    color: ${colors.primary};
    text-align: center;

    a {
      width: fit-content;
    }

    a::after {
      content: "";
      display: block;
      width: ${({ linewidth }) => (!!linewidth && linewidth || "100%")};
      height: 1px;
      background: ${colors.primary};
      transition: width 0.3s;
      margin: 0 auto;
    }
   }
  &.link:hover{
    cursor: pointer;
    background-color:${colors.softblue};
    border-radius: 6px;
    
    a::after {
      width: 0;
    }
  }
`;

type IconContainerProps = {
  active?: string;
  center?: string;
}

export const IconContainer = styled.div<IconContainerProps>`
    width: 100%;
    height: 100%;
    background: ${({ active }) => (!!active && active === 'true' ? colors.softblue : "transparent")};
    box-shadow: 0 0 0 0;
    color: ${colors.border};
    border-radius: 6px;
    display: grid;
    grid-template-columns: 25px 1fr;
    column-gap: 10px;
    align-items: center;
    justify-items: left;
    text-align: left;
    padding-left: 5px;

    img {
      height: 100%;
      width: 100%;
    }
    span {
      font-size: 1rem;
      padding-top: 3px;
    } 

    &.center{
      grid-template-columns: 100%;
      column-gap: 0px;
      justify-items: center;
      text-align: center;
      padding-left: 0px;

      img {
        height: 25px;
        width: 25px;
      }
    }
`;