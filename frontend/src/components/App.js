import React from "react";
import Map from "./Map.jsx";
import Nav from "./Nav.js";
import { makeStyles } from "@mui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Login";
import CreateAccount from "./CreateAccount";

const useStyles = makeStyles({
  nav: {
    position: "absolute",
    width: "100%",
    opacity: 0.8,
    zIndex: 9,
  },
  map: {
    height: "100vh",
  },
});

// test2!
const location = {
  address: "University of California, Santa Cruz",
  lat: 36.988230225431984,
  lng: -122.05822002436861,
};

// Primary function for loading app
function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          {/*Route for Homepage*/}
          <Route path="/" exact>
            <div className="container" style={{ position: "relative" }}>
              <div className={classes.nav}>
                <Nav />
              </div>
              <div className={classes.map}>
                <Map
                  className={classes.map}
                  location={location}
                  zoomLevel={15}
                />
              </div>
            </div>
          </Route>

          {/*Route for Login*/}
          <Route path="/login">
            <Login />
          </Route>

          {/*Route for Account  Creation*/}
          <Route path="/createaccount">
            <CreateAccount />
          </Route>

          {/*Route for Feature1*/}
          <Route path="/feature1">
            <div>This is where we implement feature1</div>
          </Route>

          {/*Route for Feature2*/}
          <Route path="/feature2">
            <div>This is where we implement feature2</div>
          </Route>

          {/*Route for Feature3*/}
          <Route path="/feature3">
            <div>This is where we implement feature3</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
