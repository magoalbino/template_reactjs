import { MUIDataTableColumn } from "mui-datatables";

export const labelsPt = {
  textLabels: {
    body: {
      noMatch: "Desculpe, não foi encontrado nenhum registro",
      toolTip: "Ordenar",
      columnHeaderTooltip: (column: MUIDataTableColumn) =>
        `Ordenar ${column.label}`,
    },
    pagination: {
      next: "Póxima página",
      previous: "Página anterior",
      rowsPerPage: "Registros por página:",
      displayRows: "de", // 1-10 of 30
    },
    toolbar: {
      search: "Pesquisar",
      downloadCsv: "Download CSV",
      print: "Imprimir",
      viewColumns: "Ver colunas",
      filterTable: "Filtros",
    },
    filter: {
      all: "TODOS",
      title: "FILTROS",
      reset: "resetar",
    },
    viewColumns: {
      title: "Mostrar Colunas",
      titleAria: "Mostrar/Esconder Colunas",
    },
    selectedRows: {
      text: "registro(s) selecionada(s)",
      delete: "Deletar",
      deleteAria: "Deletar Registros Selecionados",
    },
  },
};
