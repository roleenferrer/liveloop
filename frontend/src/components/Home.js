import React from "react";
import Map from "./Map.jsx";
import Nav from "./Nav.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  nav: {
    float: "left",
    width: "15%",
  },
  map: {
    float: "right",
    width: "85%",
    height: "100hv",
  },
});

const Home = ({ location, zoom }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.nav}>
        <Nav />
      </div>
      <div className={classes.map}>
        <Map location={location} zoomLevel={zoom}></Map>
      </div>
    </React.Fragment>
  );
};

export default Home;
