/*
 * Mui - datatables
 * https://www.material-ui-datatables.com/
 * https://github.com/gregnb/mui-datatables
 * */

import MUIDataTable, {MUIDataTableColumnDef, MUIDataTableOptions,} from "mui-datatables";
import {CustomToolbarSelect} from "../CustomToolbarSelect";
import {Box, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {ReactNode} from "react";
import {labelsPt} from "./TraducaoPtBr";
import {ToolbarRefreshIcon} from "../CustomToolbarIcon";

interface ITabelaPadraoProps {
  titulo: string;
  data: (object | number[] | string[])[];
  columns: MUIDataTableColumnDef[];
  options: MUIDataTableOptions;
  isLoading?: boolean;
  titleButtons?: ReactNode;
}

export function TabelaPadrao({
  titulo,
  data,
  columns,
  options,
  isLoading,
  titleButtons,
}: ITabelaPadraoProps) {
  const defaultOptions: MUIDataTableOptions = {
    ...labelsPt,
    filterType: "multiselect",
    responsive: "vertical",
    selectableRows: "multiple",
    selectableRowsOnClick: true,
    selectToolbarPlacement: "above",
    selectableRowsHeader: true,
    fixedHeader: true,
    downloadOptions: {
      filename: titulo,
      separator: ";",
      filterOptions: {
        useDisplayedColumnsOnly: false,
        useDisplayedRowsOnly: false,
      },
    },
    customToolbar: () => {
      return <ToolbarRefreshIcon />;
    },
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
      <CustomToolbarSelect
        selectedRows={selectedRows}
        displayData={displayData}
        setSelectedRows={setSelectedRows}
      />
    ),
  };

  const opt: MUIDataTableOptions = {
    ...defaultOptions,
    ...options,
  };

  return (
    <MUIDataTable
      title={
        <Box display="flex" gap={2} alignItems="center">
          <Typography variant="h6">
            {titulo}
            {isLoading && (
              <CircularProgress
                color="secondary"
                size={24}
                style={{ marginLeft: 15, position: "relative", top: 4 }}
              />
            )}
          </Typography>
          {titleButtons}
        </Box>
      }
      data={data}
      columns={columns}
      options={opt}
    />
  );
}
