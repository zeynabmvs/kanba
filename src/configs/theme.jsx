import { darken } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      darkest: darken("#635fc7", 0.6),
      dark: darken("#635fc7", 0.2),
      main: "#635fc7",
      light: "#A8A4FF",
      contrastText: "#fff",
    },
    error: {
      dark: darken("#EA5555", 0.2),
      main: "#EA5555",
      light: "#FF9898",
      contrastText: "#fff",
    },
    secondary: {
      main: mode === "dark" ? "#fff" : "#f0effa",
      dark: mode === "dark" ? "#fff" : "#d8d7f1",
      contrastText: "#635fc7",
    },
    black: {
      dark: darken("#000112", 0.2),
      main: "#000112",
      contrastText: "#fff",
    },
    customGrey: {
      dark: "#2B2C37",
      main: "#828FA3",
      light: "#F4F7FD",
      darker: "#20212C",
      darkest: darken("#20212C", 0.2),
    },
    lines: {
      dark: "#3E3F4E",
      main: "#828FA3",
      light: "#E4EBFA",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        "*": {
          scrollbarWidth: "thin",
          scrollbarColor:
            theme.palette.mode === "dark"
              ? `${theme.palette.primary.dark} ${theme.palette.customGrey.darker}`
              : `${theme.palette.secondary.dark} ${theme.palette.customGrey.light}`,
          "&::-webkit-scrollbar-track": {
            background:
              theme.palette.mode === "dark"
                ? theme.palette.customGrey.darker
                : theme.palette.customGrey.light,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.primary.darkest
                : theme.palette.secondary.dark,
            borderRadius: "10px",
            border: `0px solid ${
              theme.palette.mode === "dark"
                ? theme.palette.customGrey.darkest
                : theme.palette.customGrey.light
            }`,
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.secondary.main
                : theme.palette.secondary.dark,
          },
        },
      }),
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "48px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "14px",
          marginBottom: "8px",
          fontWeight: "500",
          color:
            mode === "light"
              ? theme.palette.customGrey.main
              : theme.palette.customGrey.light,
        }),
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "1.25rem",
          textTransform: "none",
          fontWeight: 700,
        },
        sizeSmall: {
          padding: "0.5rem 1rem",
          width: "auto",
          minWidth: "auto",
        },
        contained: ({ ownerState, theme }) => ({
          ...(ownerState?.color === "primary"
            ? {
                "&:hover": {
                  backgroundColor: theme.palette.primary.light,
                  boxShadow: "none",
                },
              }
            : {}),
          ...(ownerState?.color === "secondary" && mode === "light"
            ? {
                "&:hover": {
                  backgroundColor: theme.palette.secondary.dark,
                  boxShadow: "none",
                },
              }
            : {}),
          ...(ownerState?.color === "error"
            ? {
                "&:hover": {
                  backgroundColor: theme.palette.error.light,
                  boxShadow: "none",
                },
              }
            : {}),
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: "none",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: theme.palette.divider,
          // "& .MuiToolbar-root": {
          // 	backgroundColor:
          // 		mode === "dark" ? theme.palette.customGrey.dark : "#fff",
          // },
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor:
            mode === "dark" ? theme.palette.customGrey.dark : "#fff",
          backgroundImage: "none",
          boxShadow: "0px .25rem .375rem rgba(54, 78, 126, 0.101545)",
          // borderRadius: ".5rem",
        }),
      },
    },
    MuiDialog: {
      defaultProps: {
        keepMounted: false,
      },
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor:
            mode === "dark" ? theme.palette.customGrey.dark : "#fff",
          backgroundImage: "none",
          borderRadius: theme.spacing(2),
          // ...CustomScrollBarObject({theme}),
        }),
        container: {
          backgroundColor: "#0000005",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiInputBase-input": {
            padding: ".6rem .8rem",
            fontSize: "0.875rem",
            "::placeholder": {
              fontSize: "0.875rem",
            },
          },
          ".MuiInputLabel-root": {
            color: theme.palette.customGrey.main,
            "&.Mui-focused": {
              color: theme.palette.primary.main,
            },
            "&.Mui-error": {
              color: theme.palette.error.main,
            },
          },
          "& .MuiOutlinedInput-root": {
            // borderRadius: "1.25rem",
            // ":hover fieldset": {
            //   borderColor: `${theme.palette.customGrey.main}80`,
            // },
            // ":not(.Mui-focused):hover fieldset": {
            // "&.Mui-focused fieldset": {
            // borderColor: `${theme.palette.customGrey.main}80`,
            // },
            ":not(.Mui-focused, .Mui-error):hover fieldset": {
              // borderColor: `${theme.palette.customGrey.main}80`,
              borderColor: theme.palette.primary.main,
            },
            "& fieldset": {
              borderColor: `${theme.palette.customGrey.main}80`,
            },
          },
          // Multiline
          "& .MuiInputBase-root": {
            "&.MuiInputBase-multiline": {
              padding: ".5rem",
            },
          },
        }),
      },
      defaultProps: {
        FormHelperTextProps: {
          variant: "standard",
          error: true,
        },
        InputLabelProps: {
          shrink: true,
        },
      },
    },
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
        root: ({ theme }) => ({
          "& .MuiSelect-select": {
            padding: ".6rem .8rem",
            fontSize: "0.875rem",
          },
        }),
      },
      // defaultProps: {
      // 	IconComponent: KeyboardArrowDown,
      // },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "0",
          color: mode === "light" ? "#40455250" : "#404552",
          zIndex: 1,
          "&::after": {
            content: '""',
            height: 15,
            width: 15,
            zIndex: -1,
            position: "absolute",
          },
          "&.Mui-checked": {
            "&::after": {
              backgroundColor: "white",
            },
          },
        },
      },
    },
    // MuiIcon: {
    // 	styleOverrides: {
    // 		root: ({theme}) => ({
    // 			color: mode === 'dark' ? '#fff' : theme.palette.customGrey.main,
    // 			'& .MuiSvgIcon-root': {
    // 				color: 'red'
    // 			}
    // 		})
    // 	}
    // },
  },
  typography: {
    fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
    allVariants: {
      color: mode === "dark" ? "#fff" : "#2F2E2E",
    },
    subtitle2: {
      color: mode === "dark" ? "#fff" : "#828FA3",
    },
    body2: {
      fontWeight: 500,
    },
  },
  // spacing: (factor) => `${0.25 * factor}rem`,
});
