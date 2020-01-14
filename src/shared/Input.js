import React from "react";
import TextField from "@material-ui/core/TextField";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";

const useStylesBPC = makeStyles(theme => ({
  root: {
    border: "1px solid #e2e8f0",
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "transparent",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      background: 'transparent',
      borderColor: "#2684FF"
    },
  },
  focused: {}
}));


const styles = theme => ({
    newInputStyle: {
        'border-color': 'hsl(0,0%,80%)',
        'border-radius': '4px',
        'border-style': 'solid',
        'border-width': '1px',
        'background': '#fff',
        '&:hover': {
            background: 'transparent',
            borderColor: 'hsl(0,0%,70%)'
        },
        '&.Mui-error': {
            background: '#fed7d7',
            'border-color': '#e53e3e'
        }
    }
});

function BPCTextField(props) {
  //const classes = useStylesBPC();

  return <TextField variant="filled" InputProps={{ classes: { root: props.classes.newInputStyle }, disableUnderline: true }} {...props} />;
}

export default withStyles(styles)(BPCTextField);
