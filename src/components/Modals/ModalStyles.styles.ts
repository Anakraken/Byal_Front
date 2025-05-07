import styled from "styled-components";
import { colors } from "../../lib/Theme";

export const Overlay = styled.div`
  /* background-color: #AEADE9; */
  background-color: ${colors.shadow};

  position: fixed;
  z-index: 100;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: white;
  padding: 40px;
  width: 80%;
  border-radius: 8px;
  box-shadow: 0 0 32px ${colors.shadow};
  cursor: default;
`;
export const ClosebtnContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: end;
  height: 30px;

`;
export const CloseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &::before {
    content: '';
    width: 1em;
    height: 1em;
    background-color: ${colors.border};
    clip-path: polygon(45% 0, 55% 0, 55% 45%, 100% 45%, 100% 55%, 55% 55%, 55% 100%, 45% 100%, 45% 55%, 0 55%, 0 45%, 45% 45%);
    transform: rotate(45deg);
    transition: background-color 0.3s ease;
  }

  &:hover {
    background-color: ${colors.inactive};

    &::before {
      background-color: ${colors.primary};
    }
  }
`;

export const AlertContainer = styled.div`
  margin: 5px 0 10px;
  text-align: center;

  h3 {
    font-size: 30px;
    line-height: 1em; 
    font-weight: 400;
  }
 
`;