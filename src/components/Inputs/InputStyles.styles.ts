import styled from "styled-components";
import { colors, device } from "../../lib/Theme";

type InputContainerProps = {
  error?: string;
};

export const InputContainer = styled.div<InputContainerProps>`
/* Input Colors */
--shadow: #9e9ea1;
--border: #767676;
--inactive: #B0BEC5;
--text: rgb(67, 65, 78);

/* Input */
--transitionDuration: 300ms;
--inputFontSize: 20px;
--inputLineHeight: 1.4;
--transitionTF: cubic-bezier(0.645, 0.045, 0.355, 1);
  
/* floated labels */
--inputPaddingV: 0.4rem;
--inputPaddingH: 1.2rem;
--labelScaleFactor: 0.8;
--labelDefaultPosY: 50%;
--labelTransformedPosY: calc(
  (var(--labelDefaultPosY)) - 
  (var(--inputPaddingV) * var(--labelScaleFactor)) - 
  (var(--inputFontSize) * var(--inputLineHeight))
);

  width: 100%;
  height: ${({ error }) => (!!error && error === 'true' ? "105px" : "85px")};  
  display: flex;
  flex-direction: column;
  justify-content: end;

  @media ${device.mobileM} {
    height: ${({ error }) => (!!error && error === 'true' ? "115px" : "85px")};
  } 

  .error {
    padding-left: 5px;
    color: ${colors.error};
  }

  .input {
    position: relative;
    margin-bottom: 3px;
  }

  .input_text {
    display: block;
    margin: 0;
    padding: 0.4rem 1.2rem;
    color: inherit;
    width: 100%;
    font-family: inherit;
    font-size: var(--inputFontSize);
    font-weight: inherit;
    line-height: var(--inputLineHeight);
    border-radius: 0.4rem;
    border: 2px solid var(--shadow);
    transition: box-shadow var(--transitionDuration);
  }

  .input_text::placeholder {
    color: var(--inactive);
  }

  .input_text:focus {
    outline: none;
    box-shadow: 0.01rem 0.01rem 0.7rem var(--shadow);
  }

  .input_label {
    display: block;
    position: absolute;
    bottom: 50%;
    left: 5px;
    color: rgb(0, 0, 0);
    font-family: inherit;
    font-size: var(--inputFontSize);
    font-weight: inherit;
    line-height: var(--inputLineHeight);
    opacity: 0;
    transform: 
      translate3d(0, 50%, 0)
      scale(1);
    transform-origin: 0 0;
    transition:
      opacity var(--transitionDuration) var(----transitionTF),
      transform var(--transitionDuration) var(----transitionTF),
      visibility 0ms var(--transitionDuration) var(----transitionTF),
      z-index 0ms var(--transitionDuration) var(----transitionTF);
  }

  .input_text:placeholder-shown + .input_label {
    visibility: hidden;
    z-index: -1;
  }

  .input_text:not(:placeholder-shown) + .input_label,
  .input_text:focus:not(:placeholder-shown) + .input_label {
    visibility: visible;
    z-index: 1;
    opacity: 1;
    transform:
      translate3d(0, var(--labelTransformedPosY), 0)
      scale(var(--labelScaleFactor));
    transition:
      transform var(--transitionDuration),
      visibility 0ms,
      z-index 0ms;
  }
`;

export const InputPasswordContainer = styled(InputContainer)`
  height: ${({ error }) => (!!error && error === 'true' ? "123px" : "108px")};

  @media ${device.mobile} {
    height: ${({ error }) => (!!error && error === 'true' ? "143px" : "93px")};
  }
  @media ${device.mobileS} {
    height: ${({ error }) => (!!error && error === 'true' ? "143px" : "93px")};
  } 
  @media ${device.mobileXS} {
    height: ${({ error }) => (!!error && error === 'true' ? "153px" : "93px")};
  } 

  .checkbox {
    padding-left: 10px;
    margin-bottom: 3px;
  }
`;

///Estilos del sercher
type SelectContainerProps = {
  border: string;
};
export const SelectContainer = styled.div<SelectContainerProps>`
position: relative;
width: 100%;

.suggestion_list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: ${({ border }) => (!!border && border === 'true' ? "1px solid #ccc" : "none")};  
  border-radius: 0.4rem;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  list-style: none;
  margin: 0;
  padding: 0;
}
`;

type ItemListProps = {
  highlight: string;
  isdisabled?: string;
};

export const ItemList = styled.li<ItemListProps>`
  cursor: ${({ isdisabled }) => (isdisabled === 'true' ? 'not-allowed' : 'pointer')};
  padding: 4px 8px;
  background-color: ${({ highlight, isdisabled }) =>
    isdisabled === 'true' ? '#eee': highlight === 'true'? colors.shadow: 'white'};
  color: ${({ isdisabled }) => (isdisabled === 'true' ? '#999' : 'black')};

  &:hover {
    background-color: ${({ isdisabled }) => (isdisabled === 'true' ? '#eee' : colors.shadow)};
  }
`;