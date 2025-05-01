import styled from "styled-components";
import { colors, device } from "../../lib/Theme";

type SelectContainerProps = {
  error?: string;
};

export const SelectContainer = styled.div<SelectContainerProps>`
  --shadow: #9e9ea1;
  --inactive: #b0bec5;
  --inputFontSize: 20px;
  --inputLineHeight: 1.4;
  --labelScaleFactor: 0.8;
  --inputPaddingV: 0.4rem;
  --inputPaddingH: 1.2rem;
  --transitionDuration: 300ms;

  width: 100%;
  height: ${({ error }) => (!!error && error === 'true' ? "105px" : "85px")};
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;

  @media ${device.mobileM} {
    height: ${({ error }) => (!!error && error === 'true' ? "115px" : "85px")};
  }

  .error {
    padding-left: 5px;
    color: ${colors.error};
  }

  .select {
    position: relative;
    margin-bottom: 3px;
  }

  .select_input {
    width: 100%;
    font-size: var(--inputFontSize);
    padding: var(--inputPaddingV) var(--inputPaddingH);
    border: 2px solid var(--shadow);
    border-radius: 0.4rem;
    color: #000;
    background-color: white;
    appearance: none;
    font-family: inherit;
    line-height: var(--inputLineHeight);
    transition: box-shadow var(--transitionDuration);
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: white;
    background-image: none;
    cursor: pointer;
  }

  .select_input:focus {
    outline: none;
    box-shadow: 0.01rem 0.01rem 0.7rem var(--shadow);
  }

  .select_label {
    position: absolute;
    bottom: 50%;
    left: 5px;
    color: black;
    font-size: var(--inputFontSize);
    line-height: var(--inputLineHeight);
    opacity: 0;
    transform: translate3d(0, 50%, 0) scale(1);
    transform-origin: 0 0;
    transition: transform var(--transitionDuration), opacity var(--transitionDuration);
    pointer-events: none;
  }

  .select_input:not([value=""]) + .select_label,
  .select_input:focus + .select_label {
    opacity: 1;
    transform: translate3d(0, calc(-1 * var(--inputFontSize)), 0) scale(var(--labelScaleFactor));
  }

  .select_arrow {
    content: "";
    position: absolute;
    top: 50%;
    right: 1rem;
    width: 30px;
    height: 30px;
    pointer-events: none;
    transform: translateY(-50%);
    background-image: url("data:image/svg+xml;utf8,<svg fill='gray' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`;
