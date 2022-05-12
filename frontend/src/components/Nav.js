import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";

const useStyles = makeStyles({
  buttons: {
    display: "block",
    backgroundColor: blueGrey[900],
    height: "100vh",
  },
  logo: {
    width: "80%",
  },
  feature: {
    "&:hover": {
      backgroundColor: blueGrey[800],
    },
  },
  ftext: {
    color: "white",
  },
  person: {
    "&:hover": {
      backgroundColor: blueGrey[800],
    },
  },
});
const useThemes = createTheme({
  palette: {
    feature: {
      main: blueGrey[900],
    },
  },
});
// Primary function for loading app
function Nav() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box textAlign="center">
        <div className={classes.buttons}>
          <ThemeProvider theme={useThemes}>
            <div>
              <Button
                size="large"
                id="logo"
                className={classes.logo}
                onClick={console.log("Home Clicked")}
                href="/"
              >
                <img alt="Logo" src="./clear_logo.png" width="100%" />
              </Button>
            </div>
            <Divider sx={{ borderBottomWidth: 3 }} />
            <div>
              <Button
                size="large"
                className={classes.feature}
                id="feature1"
                variant="contained"
                disableElevation={true}
                color="feature"
                onClick={console.log("Feature1 Clicked")}
                href="/feature1"
              >
                <text className={classes.ftext}>Feature1</text>
              </Button>
            </div>
            <div>
              <Button
                size="large"
                className={classes.feature}
                id="feature2"
                variant="contained"
                disableElevation={true}
                color="feature"
                onClick={console.log("Feature2 Clicked")}
                href="/feature2"
              >
                <text className={classes.ftext}>Feature2</text>
              </Button>
            </div>
            <div>
              <Button
                size="large"
                className={classes.feature}
                id="times"
                variant="contained"
                disableElevation={true}
                color="feature"
                onClick={console.log("Times Clicked")}
                href="/times"
              >
                <text className={classes.ftext}>Times</text>
              </Button>
            </div>
            <Divider sx={{ borderBottomWidth: 3 }} />
            <div>
              <Button
                size="large"
                className={classes.person}
                id="login"
                variant="contained"
                disableElevation={true}
                color="feature"
                onClick={console.log("Person Clicked")}
                href="/login"
              >
                <text className={classes.ftext}>Login</text>
              </Button>
            </div>
          </ThemeProvider>
        </div>
      </Box>
    </React.Fragment>
  );
}
export default Nav;
