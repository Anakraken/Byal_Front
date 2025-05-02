import { useState } from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import {
  Table,
  Header,
  Rows,
  TableContainer,
  TableRow,
} from "./CustomTableStyles.styles";
import { Button } from "../Buttons";
import { Modal } from "../Modals";

type DataRow = {
  Unidad: string;
  Placas: string;
  NIV: string;
  Status: string;
  TipoVehiculo: string;
  Driver: string;
  Operacion: string;
};

type Props = {
  data: DataRow[];
};

export const CustomTable = ({ data }: Props) => {
  const isExported = false;
  const titles = data.map((row) => Object.keys(row));

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Reporte");

    worksheet.mergeCells("A1", "D1");
    worksheet.getCell("A1").value = "Reporte Personalizado";
    worksheet.getCell("A1").font = { size: 16, bold: true };
    worksheet.getCell("A1").alignment = { horizontal: "center" };

    worksheet.addRow(titles[0]);
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
      const newRow = worksheet.addRow(Object.values(row));
      if (row.Status.toLowerCase() === "inactive") {
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
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "reporte.xlsx");
  };

  // 👇 Manejo del modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState<DataRow | null>(null);

  const handleRowClick = (row: DataRow) => {
    if (row.Status.toLowerCase() === "inactivo" || row.Status.toLowerCase() === "inactive") {
      setSelectedRow(row);
      setIsModalVisible(true);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedRow(null);
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            {titles[0].map((title, i) => (
              <Header key={i}>{title}</Header>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <TableRow
              key={i}
              status={row.Status}
              onClick={() => handleRowClick(row)}
              style={{
                cursor:
                  row.Status.toLowerCase() === "inactive" ||
                  row.Status.toLowerCase() === "inactivo"
                    ? "pointer"
                    : "default",
              }}
            >
              {Object.values(row).map((item, index) => (
                <Rows key={index}>{item}</Rows>
              ))}
            </TableRow>
          ))}
        </tbody>
        {!!isExported && (
          <Button onClick={exportToExcel}>Exportar a Excel</Button>
        )}
      </Table>

      {/* 👇 Aquí se renderiza el modal */}
      {selectedRow && (
        <Modal isVisible={isModalVisible} onBackClick={closeModal}>
          <div>La unidad <strong>{selectedRow.Unidad}</strong> está inactiva.</div>
        </Modal>
      )}
    </TableContainer>
  );
};