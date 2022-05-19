import React from "react";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

const useStyles = makeStyles({
  nav: {
    float: "left",
    width: "50%",
  },
  map: {
    float: "right",
    width: "50%",
    height: "100hv",
  },
  body: {},
  text: {
    color: "white",
  },
});

const useThemes = createTheme({
  palette: {
    feature: {
      main: blueGrey[900],
    },
  },
});

function Tables() {}

const Times = ({ location, zoom }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.body}>
        <text className={classes.text}>TIMES</text>
      </div>
    </React.Fragment>
  );
};

export default Times;
