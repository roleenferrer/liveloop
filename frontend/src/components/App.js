import React from "react";
import { useState, useCallback, useEffect } from "react";
import Home from "./Home.js";
import HomeMobile from "./HomeMobile.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import Times from "./Times.js";
import MetroTimes from "./MetroTimes.js";

const zoomlevel = 15; // Default zoom level for map

// Media query for asserting screen width for reactive UI
const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [width, updateTarget]);

  return targetReached;
};

// Default location of the map, located at UCSC
const location = {
  address: "University of California, Santa Cruz",
  lat: 36.988230225431984,
  lng: -122.05822002436861,
};

// Primary function for loading app
function App() {
  // Depending on the size of Breakpoint, we determine if we use the mobile or the normal view
  const isBreakpoint = useMediaQuery(750); // Breakpoint for reactive UI
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          {/*Route for Homepage*/}
          <Route path="/" exact>
            <div>
              {isBreakpoint ? (
                <div>
                  <HomeMobile location={location} zoom={zoomlevel} />
                </div>
              ) : (
                <div>
                  <Home location={location} zoom={zoomlevel} />
                </div>
              )}
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
          {/*Route for MetroTimes*/}
          <Route path="/feature1">
            <MetroTimes />
          </Route>
          {/*Route for Feature2*/}
          <Route path="/feature2">
            <div>This is where we implement feature2</div>
          </Route>
          {/*Route for Times*/}
          <Route path="/times">
            <Times location={location} zoom={zoomlevel} />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
