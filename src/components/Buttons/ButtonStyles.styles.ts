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

export const CustomButton = styled(PrimaryButton)`
  //-PRIMARY-//
  color: white;
  background: ${colors.primary};
  box-shadow: 0 0 10px ${colors.shadow};
  &:hover{
    opacity: 0.7;
  }
  
  //-LINK-//
  &.link{
    background: transparent;
    box-shadow: 0 0 0 0;
    color: ${colors.primary};
    text-decoration: underline;
   }
  &.link:hover{
    opacity: 0.7;
  }
`;


// a::after {
//   content: "";
//   display: block;
//   width: 0;
//   height: 2px;
//   background: blue;
//   transition: width 0.3s;
// }

// a:hover::after {
//   width: 100%;
// }