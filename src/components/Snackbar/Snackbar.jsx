import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { ThemeContext } from "../../ThemeContexts/ThemeContext";

import useStyles from "./styles";

const CustomizedSnackbar = ({ open, setOpen }) => {
  const classes = useStyles();
  const { darkMode } = useContext(ThemeContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert
          style={
            darkMode
              ? { background: "#e3edf7", color: "#000" }
              : { background: "#262626" }
          }
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Successfully Created.
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
