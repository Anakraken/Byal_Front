import styled from "styled-components";
import { colors } from "../../lib/Theme";

export const PrimaryButton = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  /* padding: 0 10px; */
`;

type CustomButtonProps = {
  linewidth?: string;
};
export const CustomButton = styled(PrimaryButton)<CustomButtonProps>`
  //-PRIMARY-//
  color: white;
  background-color: ${colors.primary};
  box-shadow: 0 0 10px ${colors.shadow};
  &:hover{
    background: ${colors.primaryOver};
  }
  
  //-LINK-//
  &.link{
    background: transparent;
    box-shadow: 0 0 0 0;
    color: ${colors.primary};
    text-align: center;
    /* text-decoration: underline; */

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
    background-color: aliceblue;
    border-radius: 6px;
    /* text-decoration: none; */
    
    a::after {
      width: 0;
    }
  }
`;