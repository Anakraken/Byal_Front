import React from "react";
import {colors} from '../Theme';
import styled from 'styled-components';

const Container = styled.svg`
    width: 1.3em;
    height: 1.3em;
    background: ${({dark})=> (dark ? colors.mid : colors.disabled)};
    border-radius: 50%;
    padding: 10px;
    
    &:hover{
      -webkit-animation: rotate-center 0.6s ease-in-out both;
	    animation: rotate-center 0.6s ease-in-out both;
      background: ${({dark})=> (dark ? colors.secondary : colors.clear)}; 
    }

    @-webkit-keyframes rotate-center {
      0% {
        -webkit-transform: rotate(0);
                transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
      }
    }
    @keyframes rotate-center {
      0% {
        -webkit-transform: rotate(0);
                transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
      }
    }

`;
const Line = styled.circle`
    fill:  none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px ;
    stroke: ${({dark})=> (dark ? colors.clear : colors.gray)};
`;
const Path = styled.path`
    fill:  none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px ;
    stroke: ${({dark})=> (dark ? colors.clear : colors.gray)};
`;

const UserIcon = ({dark}) => (
    <Container viewBox="0 0 28 28" dark={dark}>
      <g transform="translate(4.666 3.5)">
        <Path dark={dark} d="M18.667 21v-2.334A4.667 4.667 0 0014 14H4.667a4.667 4.667 0 00-4.668 4.666V21"/>
        <Line
          cx={4.667}
          cy={4.667}
          r={4.667}
          dark={dark}
          transform="translate(4.667)"
        />
      </g>
    </Container>
);

export default UserIcon;