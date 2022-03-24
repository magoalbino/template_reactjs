import "@mui/lab/themeAugmentation";
import { createTheme } from "@mui/material";
import "./mui-datatables-types";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    dark: string;
    white: string;
    form: string;
    main: string;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#071d41",
      contrastText: "#fff",
    },
    secondary: {
      main: "#1351b4",
      contrastText: "#fff",
    },
    background: {
      main: "green",
      dark: "#E5E5E5",
      default: "rgba(254,254,254,1)",
      white: "#FFFFFF",
      form: "#FFFDFD",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "Raleway",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  mixins: {
    toolbar: {
      minHeight: 70,
      "@media (min-width: 0px) and (orientation: landscape)": {
        minHeight: 60,
      },
      "@media (min-width: 600px)": {
        minHeight: 80,
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#fff",
          color: "#333",
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        // animation: "wave",
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
        color: "secondary",
        fullWidth: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .Mui-checked": {
            color: "#1351B4",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: "#1351B4",
          // Selecionado
          "&.Mui-selected": {
            background: "#071d41",
            color: "#fff",
          },
          // Tipografia do selecionado
          "&.Mui-selected > .MuiListItemText-root > .MuiTypography-root": {
            fontWeight: 600,
          },
          // Tab no selecionado
          "&.Mui-selected.Mui-focusVisible": {
            background: "#73839c",
          },
          // Tab
          "&.Mui-focusVisible": {
            background: "#d9e3f3",
          },
          // Hover no selecionado
          "&.Mui-selected:hover": {
            background: "#73839c",
          },
          // Hover normal
          ":hover": {
            background: "#d9e3f3",
          },
        },
      },
    },
    // ESTILOS DA TABELA
    MUIDataTable: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFFDFD",
          borderRadius: "5px",
          boxShadow: "none",
          border: "1px solid #D4D4D4",
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        fixedHeader: {
          backgroundColor: "#FFFDFD",
          fontWeight: "600",
        },
        data: {
          fontWeight: "600",
        },
      },
    },
    MUIDataTableSelectCell: {
      styleOverrides: {
        // root: {
        //   backgroundColor: "#FFFDFD",
        // },
        headerCell: {
          backgroundColor: "#FFFDFD",
        },
      },
    },
    MUIDataTableBodyCell: {
      styleOverrides: {
        root: {
          wordBreak: "break-word",
        },
      },
    },
    // MuiTableHead: {
    //   styleOverrides: {
    //     root: {
    //       "&.MuiTableCell-head": {
    //         backgroundColor: "#FFFDFD",
    //       },
    //     },
    //   },
    // },
    // MuiTableRow: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiTableCell-head": {
    //         backgroundColor: "#FFFDFD",
    //       },
    //       "& .MuiButtonBase-root": {
    //         fontWeight: "600",
    //       },
    //     },
    //   },
    // },
    // MuiTableCell: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "#FFFDFD",
    //     },
    //   },
    // },
  },
});
