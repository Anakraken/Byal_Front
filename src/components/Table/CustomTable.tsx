import { useState } from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import {
  Table,
  Header,
  Rows,
  TableContainer,
  TableRow,
  ExportedButtonCaontainer,
  ExportedButton
} from "./CustomTableStyles.styles";
import { Button } from "../Buttons";

type Props<T extends Record<string, any>> = {
  data: T[];
  header?: string[];
  isExported?: boolean;
  inactiveKey?: string;
  inactiveValue?: string;
  isEditable?: boolean;
  setSelected?: React.Dispatch<React.SetStateAction<T>>;
  setIsModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
};

export const CustomTable = <T extends Record<string, any>>({
  data,
  isExported,
  header,
  inactiveKey,
  inactiveValue,
  isEditable,
  setSelected,
  setIsModalVisible,
  children
}: Props<T>) => {
  const titles: string[] =
    header && header.length > 0
      ? header
      : data.length > 0
      ? Object.keys(data[0])
      : [];

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Reporte");

    worksheet.mergeCells("A1", "D1");
    worksheet.getCell("A1").value = "Reporte Personalizado";
    worksheet.getCell("A1").font = { size: 16, bold: true };
    worksheet.getCell("A1").alignment = { horizontal: "center" };

    worksheet.addRow(titles);
    const headerRow = worksheet.getRow(2);
    headerRow.eachCell((cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF333333" },
      };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    data.forEach((row) => {
      const newRow = worksheet.addRow(titles.map((key) => row[key]));
      if (
        typeof row[`${inactiveKey}`] === "string" &&
        (row[`${inactiveKey}`]=== inactiveValue)
      ) {
        newRow.eachCell((cell) => {
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFF8D7DA" },
          };
        });
      }
    });

    worksheet.columns.forEach((col) => {
      col.width = 20;
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "reporte.xlsx");
  };

  // Modal
  const [selectedRow, setSelectedRow] = useState<T | null>(null);

  const handleRowClick = (row: T) => {
    if(row[`${inactiveKey}`] === inactiveValue){
      setSelectedRow(row);
      !!setIsModalVisible && setIsModalVisible(true);
      !!setSelected && setSelected(row);
    }

    if(!!isEditable){
      setSelectedRow(row);
      !!setIsModalVisible && setIsModalVisible(true);
      !!setSelected && setSelected(row);
    }
  };

  return (
    <>
      <TableContainer totalheight={isExported ? "true" : "false"}>
        <Table>
          <thead>
            <tr>
              {titles.map((title, i) => (
                <Header key={i}>{title}</Header>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <TableRow
                key={i}
                status={row[`${inactiveKey}`]}
                onClick={() => handleRowClick(row)}
                iseditable={isEditable? 'true' : 'false'}
              >
                {titles.map((key, index) => (
                  <Rows key={index}>{row[key]}</Rows>
                ))}
              </TableRow>
            ))}
          </tbody>
        </Table>

        {selectedRow && (
          <>{children}</>
        )}
      </TableContainer>

      {!!isExported && (
        <ExportedButtonCaontainer>
          <ExportedButton>
            <Button onClick={exportToExcel}>Exportar a Excel</Button>
          </ExportedButton>
        </ExportedButtonCaontainer>
      )}
    </>
  );
};


// Ejemplo de uso 
// const [isModalVisible, setIsModalVisible] = useState(false);

// const closeModal = () => {
//   setIsModalVisible(false);
// };

// const onButtonClick = () => {
//   closeModal();
// }
{/* <CustomTable 
data={asigUnidData} 
header={headerTitles} 
inactiveKey={"Estatus vehículo"}
inactiveValue={"Inactivo"}
isEditable={true}
setSelected={setSelectedRow}
setIsModalVisible={setIsModalVisible}
>
    <Modal isVisible={isModalVisible} onBackClick={closeModal}>
        <p>Driver: {selectedRow.Driver}</p>
        <p>Driver: {selectedRow.Unidad}</p> 
        <br/>
        {selectedRow["Estatus vehículo"] === "Inactivo" && <p>Informacion de Inactividad</p>}
      <Button onClick={onButtonClick}>Desasignar</Button>
    </Modal>
</CustomTable> */}