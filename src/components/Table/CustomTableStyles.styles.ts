import styled from "styled-components";
import { colors, device } from "../../lib/Theme";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Header = styled.th`
  padding: 8px;
  height: 75px;
  color: ${colors.border};
  padding: 0 20px;
`;

export const Rows = styled.td`
  border-top: 2px solid #ccc;
  padding: 8px;
  text-align: center;
  height: 50px;
  padding: 0 20px;
`;

type TableConProp = {
  totalheight: string;
}
export const TableContainer = styled.div<TableConProp>`
  width: 100%;
  height:${({ totalheight }) => totalheight === "true" ? '370px' : "100%"};
  border: 1px solid ${colors.inactive};
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  overflow: scroll;
`;

interface RowProps {
  status: string;
}

export const TableRow = styled.tr<RowProps>`
  cursor: ${({ status }) => status === "Inactivo" ? 'pointer' : "default"};
  background-color: ${({ status }) => status === "Inactivo" ? colors.softblue : "white"};

  &:hover {
    background-color: ${({ status }) => status === "Inactivo" ? colors.shadow : "white"};
  }
`;

export const ExportedButtonCaontainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
margin-top: 10px;

@media (max-width: 920px) {
  justify-content: center;
  }
`;

export const ExportedButton = styled.div`
width: 280px;
@media (max-width: 920px) {
  width: 100%;
  }
`;