import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import PersonIcon from "@mui/icons-material/Person";

const useStyles = makeStyles({
  logo: {
    float: "left",
  },
  feature: {
    float: "left",
  },
  person: {
    float: "right",
  },
  ftext: {
    color: "black",
  },
  ftext_active: {
    color: "black",
    textDecoration: "underline",
  },
});

// Primary function for loading app
function Nav() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button
        size="large"
        className={classes.logo}
        id="logo"
        onClick={console.log("Home Clicked")}
        href="/"
      >
        <img alt="Logo" src="clear_logo.png" />
      </Button>

      <Button
        size="large"
        className={classes.feature}
        id="feature1"
        onClick={console.log("Feature1 Clicked")}
        href="/feature1"
      >
        <text className={classes.ftext}>Feature1</text>
      </Button>
      <Button
        size="large"
        className={classes.feature}
        id="feature2"
        onClick={console.log("Feature2 Clicked")}
        href="/feature2"
      >
        <text className={classes.ftext}>Feature2</text>
      </Button>
      <Button
        size="large"
        className={classes.feature}
        id="feature3"
        onClick={console.log("Feature3 Clicked")}
        href="/feature3"
      >
        <text className={classes.ftext}>Feature3</text>
      </Button>
      <Button
        className={classes.person}
        id="loginButton"
        onClick={console.log("Person Clicked")}
        href="/login"
      >
        <PersonIcon fontSize="large" sx={{ color: "black" }} />
      </Button>
    </React.Fragment>
  );
}

export default Nav;
