import { createTheme } from "@mui/material/styles";
//created common tab styles for code clarity in MuiTab
const commonTabStyles = {
  root: {
    fontFamily: "Inter, sans-serif",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    "&.Mui-selected": {
      color: "var(--main-purple)",
    },
    "&:not(.Mui-selected)": {
      color: "var(--main-text-color)",
      borderBottom:
        "1px solid var(--Colors-Foreground-fg-brand-primary_alt, #EAECF0)",
    },
  },
};

// Light theme definition
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "var(--main-purple)",
    },
    background: {
      default: "var(--background-default-light)",
    },
  },

  components: {
    //MuiTabPanel
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    //MuiSvgIcon
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "var(--main-text-color)",
        },
        colorError: {
          color: "var(--border-error-solid)",
        },
      },
    },
    // MuiIconButton Styles - ADDED HERE
    MuiIconButton: {
      styleOverrides: {
        root: {
          height: "17px",
          width: "17px",
          boxShadow: "none",
          border: "1.23px solid var(--grey-border)",
          color: "var(--main-text-color)",
        },
      },
    },

    // MuiTextField Styles - ADDED HERE
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-colorError": {
            color: "var(--border-error-solid)",
          },
          "& svg": {
            color: "var(--light-border-color)",
          },
          "& .MuiDivider-root": {
            margin: "0 10px",
          },
          "& .MuiOutlinedInput-root": {
            fontSize: "13px",
            boxShadow: "0px 1px 2px 0px #1018280d",
            "&:hover fieldset": {
              borderColor: "var(--main-purple)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--main-purple)",
            },
          },
          "& .MuiButton-root": {
            fontSize: "13px",
            color: "var(--second-text-color)",
          },
        },
      },
    },
    // MuiOutlinedInput
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "var(--font-regular)",
          boxShadow: "0px 1px 2px 0px #1018280d",
          "& svg": {
            color: "var(--light-border-color)",
          },
          "&:hover fieldset": {
            borderColor: "var(--main-purple)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--main-purple)",
          },
        },
        notchedOutline: {
          borderRadius: "8px !important",
        },
      },
    },
    //MuiDivider
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: "0 10px",
        },
      },
    },

    // MuiInputLabel Styles (for labels inside textField) - ADDED HERE
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "var(--font-regular)",
          color: "var(--second-text-color)",
        },
      },
    },
    // MuiListItem Styles (dropdown menu items)
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "4px 12px !important",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "var(--background-hover)",
          },
        },
      },
    },
    //MuiListItemButton
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
        },
      },
    },
    //MuiSwitch
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "var(--main-purple)",
        },
        track: {
          backgroundColor: "rgba(var(--main-purple-rgb), 0.5)",
        },
      },
    },

    // MuiTypography Styles (dropdown text)
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.settings-content-text": {
            fontSize: "var(--font-size-md)",
            fontWeight: 400,
            lineHeight: 1.54,
          },
          "&.settings-content-obs": {
            fontSize: "var(--font-size-sm)",
            fontWeight: 400,
            lineHeight: 1.45,
          },
          width: "100%",
          fontSize: "var(--font-informative)",
          fontWeight: 400,
          lineHeight: "24px",
          color: "var(--main-text-color)",
          display: "inline",
          justifyContent: "center",
          "&.title": {
            fontSize: "11px",
            fontWeight: 400,
            lineHeight: "38px",
            color: "var(--second-text-color)",
            marginLeft: "8px",
            marginTop: "8px",
          },
        },
      },
    },
    // MuiList Styles (dropdown list padding)
    MuiList: {
      styleOverrides: {
        padding: {
          paddingTop: "4px !important",
          paddingBottom: "4px !important",
        },
      },
    },

    // MuiListItemIcon Styles (icon spacing)
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "2rem",
        },
      },
    },

    //MuiListItemText
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },

    // MuiMenuItem Styles
    MuiMenuItem: {
      styleOverrides: {
        root: {
          margin: "0px 5px !important",
          fontSize: "13px !important",
          "&.Mui-selected": {
            backgroundColor: "var(--background-hover)",
            borderRadius: "8px !important",
          },
        },
      },
    },
    // MuiSelect Styles (Dropdown)
    MuiSelect: {
      styleOverrides: {
        root: {
          width: "241px",
          height: "34px",
          fontSize: "13px !important",
          borderRadius: "8px !important",
        },
      },
    },
    // MuiPickersDay (for date picker day styling)
    MuiPickersDay: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "var(--main-purple) !important",
            color: "white !important",
          },
          "&.MuiDateRangePickerDay-day.Mui-selected": {
            backgroundColor: "var(--main-purple)",
            color: "white !important",
          },
          "&.MuiDateRangePickerDay-day.Mui-selected:first-child": {
            backgroundColor: "var(--main-purple)",
          },
          "&.MuiDateRangePickerDay-day.Mui-selected:last-child": {
            backgroundColor: "var(--main-purple)",
          },
          "&.MuiPickersDay-rangeIntervalDay:not(.Mui-selected):not(:first-child):not(:last-child)":
            {
              backgroundColor: "var(--background-hover)",
              color: "var(--color-black) !important",
            },
        },
      },
    },
    // MuiButtonBase (for individual buttons like apply, cancel)
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.paginationButtons": {
            margin: "0 5px",
          },
          "&.apply": {
            backgroundColor: "var(--main-purple)",
            color: "white !important",
            width: "142px",
            height: "34px",
            gap: "var(--spacing-xs, 4px)",
            border:
              "1px solid var(--Component-colors-Components-Buttons-Primary-button-primary-border, #7F56D9) !important",
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          },
          "&.cancel": {
            backgroundColor: "var(--background-default-light) !important",
            color: "var(--main-text-color) !important",
            width: "142px",
            height: "34px",
            gap: "var(--spacing-xs, 4px)",
            border:
              "1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #D0D5DD) !important",
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          },
        },
      },
    },
    // Mui checkbox styles
    MuiCheckbox: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          border: "none",
          outline: "none",
        },
      },
      // Primary checkbox styles
      colorPrimary: {
        color: "var(--main-purple)",
        "&.Mui-checked": {
          color: "var(--main-purple)",
        },
        "&.MuiCheckbox-indeterminate": {
          color: "var(--main-purple)",
        },
      },
      // Secondary checkbox styles
      colorSecondary: {
        color: "var(--text-secondary-light)",
        "&.Mui-checked": {
          color: "var(--text-secondary-light)",
        },
        "&.MuiCheckbox-indeterminate": {
          color: "var(--text-secondary-light)",
        },
      },
    },
    //MuiFormControlLabel
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "var(--font-header)",
        },
      },
    },

    // AppBar customizations
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--background-default-light)",
          color: "var(--main-text-color)",
        },
      },
    },
    // Drawer customizations
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "250px",
          flexShrink: 0,
          zIndex: 1200,
        },
      },
    },
    // using the common tab styles here...
    MuiTab: {
      styleOverrides: commonTabStyles,
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "var(--main-purple)",
        },
      },
    },
    // Button customizations
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          textTransform: "none",
          boxShadow: "none",
          color: "var(--main-purple) !important",
        },
        // Additional styles for textField buttons
        textFieldButton: {
          fontSize: "var(--font-regular)",
          color: "var(--second-text-color)",
        },
        // Primary button styling
        containedPrimary: {
          color: "white",
          backgroundColor: "var(--main-purple)",
          transition: "background-color 0.3s, border-color 0.3s",
          "&:hover": {
            backgroundColor: "var(--main-purple-hover)",
          },
          "&:active": {
            outline: "4px solid var(--outline-primary)",
            boxShadow:
              "0px 0px 0px 4px var(--shadow-primary), 0px 1px 2px 0px var(--shadow-subtle)",
          },
          "&:disabled": {
            color: " var(--second-text-color)",
            backgroundColor: "var(--background-light)",
            borderColor: "#80808033",
            fontWeight: 600,
          },
        },
        // Error button styling
        containedError: {
          color: "white",
          backgroundColor: "var(--border-error-solid)",
          boxShadow: "none",
          transition: "background-color 0.3s, border-color 0.3s",
          "&:hover": {
            backgroundColor: "var(--background-danger)",
          },
          "&:active": {
            outline: "4px solid var(--outline-error)",
            boxShadow:
              "0px 0px 0px 4px var(--outline-error), 0px 1px 2px 0px var(--shadow-subtle)",
          },
        },
        // Secondary disabled button styling
        outlinedSecondary: {
          "&:disabled": {
            color: "grey",
            backgroundColor: "white",
            borderColor: "#80808033",
            fontWeight: 600,
          },
        },
        // Secondary purple button styling
        outlinedPrimary: {
          color: "var(--main-purple-light-opacity)",
          borderColor: "var(--main-purple)",
          backgroundColor: "white",
          border: "1px solid var(--light-border-color)",
          "&:hover": {
            backgroundColor: "var(--main-purple-light-opacity)",
            borderColor: "var(--main-purple)",
          },
          "&:active": {
            outline: "4px solid var(--outline-secondary)",
            backgroundColor: "var(--background-default-light)",
            boxShadow:
              "0px 0px 0px 4px var(--shadow-primary), 0px 1px 2px 0px var(--shadow-subtle)",
          },
        },
        // Secondary grey button styling
        outlinedNeutral: {
          color: "var(--text-secondary)",
          borderColor: "var( --border-gray-transparent)",
          backgroundColor: "white",
          border: "1px solid var(--light-border-color)",
          "&:hover": {
            backgroundColor: "var(--background-hover)",
            boxShadow: "none",
          },
          "&:active": {
            outline: "4px solid #80808033",
            boxShadow: "0px 0px 0px 4px #98A2B324, 0px 1px 2px 0px #1018280D",
            backgroundColor: "white",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

// Dark theme definition
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "var( --main-purple)",
    },
    background: {
      default: "var(--background-default-dark)",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--background-dark)",
          color: "var(--background-default-light)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "250px",
          flexShrink: 0,
          zIndex: 1200,
        },
      },
    },
    // Using the common tab styles here
    MuiTab: {
      styleOverrides: commonTabStyles,
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "var(--main-purple)",
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});
