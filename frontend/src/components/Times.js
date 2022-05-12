import React from "react";
import Map from "./Map.jsx";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";

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
});

const useThemes = createTheme({
  palette: {
    feature: {
      main: blueGrey[900],
    },
  },
});

function Tables() {

}

const Times = ({ location, zoom }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div> times?</div>
      <div className={classes.map}>
        <Map location={location} zoomLevel={zoom}></Map>
      </div>
    </React.Fragment>
  );
};

export default Times;