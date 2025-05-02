import styled from "styled-components";
import { colors } from "../../lib/Theme";

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

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
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