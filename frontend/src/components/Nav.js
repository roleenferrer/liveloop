import React from "react";
import Times from "./Times.js";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import MetroTimes from "./MetroTimes.js";
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
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown") return;
    setState({ ...state, [anchor]: open });
  };

  // Pop out window for the Times feature (from the left)
  // Click anywhere else to close
  const timesWindow = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 500,
        backgroundColor: blueGrey[900],
        display: "flex",
        height: "100vh",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Times style={{ float: "left", width: "90%" }} />
      {/* Add a button to hide the window*/}
      <Button
        style={{ float: "right", width: "10%" }}
        onClick={toggleDrawer(anchor, false)}
      >
        <KeyboardDoubleArrowLeftIcon
          fontSize="large"
          style={{ color: "white" }}
        />
      </Button>
    </Box>
  );

  // Pop out window for the MetroTimes feature (from the top)
  // Click anywhere else to close
  const metroWindow = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 500,
        maxHeight: "90vh",
        display: "block",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MetroTimes style={{ background: blueGrey[900] }} />
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
              {["top"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    size="large"
                    className={classes.feature}
                    id="MetroTimes"
                    variant="contained"
                    disableElevation={true}
                    color="feature"
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <text className={classes.ftext}>Metro Times</text>
                  </Button>
                  <Drawer
                    className={classes.drawer}
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {metroWindow(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
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
                    {timesWindow(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
            <Divider sx={{ borderBottomWidth: 3 }} />
            <div>
              <Button
                style={{ display: user ? "none" : "inline" }}
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
            <div>
              <Button
                id="logoutButton"
                style={{ display: user ? "inline" : "none" }}
                size="large"
                className={classes.person}
                variant="contained"
                disableElevation={true}
                color="feature"
                onClick={logout}
                href="/"
              >
                <text className={classes.ftext}>Log Out</text>
              </Button>
            </div>

            <div>
              <h2 id="welcome">
                <text className={classes.ftext}>
                  {user ? `Hello, ${user.name}` : ""}
                </text>
              </h2>
            </div>
          </ThemeProvider>
        </div>
      </Box>
    </React.Fragment>
  );
}
export default Nav;
