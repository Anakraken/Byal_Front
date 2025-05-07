import styled from "styled-components";

export const AsignUnidContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: grid;
  grid-template-areas: 
    "title"
    "row1"
    "row2"
    "row3";
  grid-template-rows: auto auto auto 1fr;
  padding: 50px;
  gap: 20px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
  }

  .title {
    grid-area: title;
  }
  .row1 {
    grid-area: row1;
  }
  .row2 {
    grid-area: row2;
  }
  .row3 {
    grid-area: row3;
    overflow-x: auto;
  }
`;


export const Column1 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: repeat(auto-fit, 105px);
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Column2 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,280px);
  grid-template-rows: repeat(auto-fit, 105px);
  gap: 20px;
  align-items: baseline;


  @media (max-width: 920px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


export const Column3 = styled.div`
  overflow-x: auto;
  width: 100%;
  margin-top: 20px;
  height: 430px;
`;