import React from "react";
import Times from "./Times.js";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";

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
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown") return;
    setState({ ...state, [anchor]: open });
  };
  const window = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 500,
        backgroundColor: blueGrey[900],
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Times />
    </Box>
  );

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
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    size="large"
                    className={classes.feature}
                    id="feature3"
                    variant="contained"
                    disableElevation={true}
                    color="feature"
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <text className={classes.ftext}>Times</text>
                  </Button>
                  <Drawer
                    className={classes.drawer}
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {window(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
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
