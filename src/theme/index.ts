import { createMuiTheme } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

const theme: Theme = createMuiTheme();

theme.overrides = {
  MuiFilledInput: {
    root: {
      "font-family": '"Messina","-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue","Arial", "sans-serif"',
      border: "1px solid #E5E5E5",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "#fff",
      "&:hover": {
        backgroundColor: "#fff"
      },
      "&$focused": {
        backgroundColor: "#fff"
      },
      "&.Mui-error": {
        border: "1px solid #DE071C",
        backgroundColor: "#FEF0F0"
      }
    },
    underline: {
      "&:hover:before": {
        borderBottom: "0"
      },
      "&:before": {
        borderBottom: "0"
      },
      "&:after": {
        borderBottom: "0"
      },
      "&.Mui-focused:after": {
        border: "none"
      },
      "&.Mui-error:after": {
        border: "none"
      }
    }
  },
  MuiButton: {
    root: {
      "margin-left": ".5rem",
      "margin-top": ".5rem"
    }
  },
  MuiInputLabel: {
    root: {
      fontSize: "16px",
      fontFamily: "Messina"
    },
    focused: {
      color: "#666666 !important"
    }
  },
  MuiFormHelperText: {
    contained: {
      marginLeft: "0",
      fontWeight: "bold"
    }
  },
  MuiMenuItem: {
    root: {
      "&:last-child .MuiTouchRipple-root": {
        borderBottom: 0
      }
    }
  },
  MuiListItem: {
    button: {
      backgroundColor: "#EBEBEB"
    }
  },
  MuiTouchRipple: {
    root: {
      borderBottom: "1px solid #eee",
      width: "90%",
      margin: "0 auto"
    }
  }
};

export default theme;
