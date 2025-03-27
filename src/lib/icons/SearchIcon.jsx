import React from "react";
import {colors} from '../Theme';
import styled from 'styled-components';

const Container = styled.svg`
    width: 1.3em;
    height: 1.3em;
`;

const Line = styled.circle`
    fill:  none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px ;
    stroke: ${colors.white};
`;
const Path = styled.path`
    fill:  none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px ;
    stroke: ${colors.white};
`;

const SearchIcon = () => (
    <Container  viewBox="0 0 28 28">
      <g transform="translate(3.5 3.5)">
        <Line
          cx={9.333}
          cy={9.333}
          r={9.333}
        />
        <Path d="M21 21l-5.075-5.075" />
      </g>
    </Container>
);

export default SearchIcon;