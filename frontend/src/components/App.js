import React from 'react';
import Map from './Map.jsx';
import { makeStyles } from "@mui/styles";
import Nav from "./Nav.js";


const useStyles = makeStyles({
	nav: {
		flaot: "left",
		width: "5%",
		height: "100vh",
		background: "ghostwhite",
	},
	map: {
		float: "right",
		width: "50%",
	},
	image: {
		float: "middle",
		width: "45%",
		height: "100vh",
		alignItems: "center",
	},
	img: {
		width: "100%",
		alignItems: "center",
	},
});

const location = {
  address: 'University of California, Santa Cruz',
  lat: 36.99990206761345,
  lng: -122.05838962419602,
} 

// Primary function for loading app
function App() {
  return (
    <div>

      <Nav/>

      <div>
        This is where we implement the web page for Live Loop
      </div>
      
      <Map location={location} zoomLevel={18}/>

    </div>
    
  )
}

export default App;
