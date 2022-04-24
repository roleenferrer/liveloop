import React from 'react';
import Map from './Map.jsx';
import Nav from "./Nav.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './Login';
import CreateAccount from './CreateAccount';

const location = {
  address: 'University of California, Santa Cruz',
  lat: 36.988230225431984,
  lng: -122.05822002436861,
} 

// Primary function for loading app
function App() {
  return (
    <div>
		<BrowserRouter>
		<Switch>

			{/*Route for Homepage*/}
			<Route path="/" exact>
				<Nav/>
				<div>
					This is where we implement the web page for Live Loop
				</div>
				<Map location={location} zoomLevel={15}/>
			</Route>

			{/*Route for Login*/}
			<Route path="/login">
				<Login/>
			</Route>

			{/*Route for Account  Creation*/}
			<Route path="/createaccount">
				<CreateAccount/>
			</Route>

			{/*Route for Feature1*/}
			<Route path="/feature1">
				<div>
					This is where we implement feature1
				</div>
			</Route>
			
			{/*Route for Feature2*/}
			<Route path="/feature2">
				<div>
					This is where we implement feature2
				</div>
			</Route>

			{/*Route for Feature3*/}
			<Route path="/feature3">
				<div>
					This is where we implement feature3
				</div>
			</Route>

		</Switch>
		</BrowserRouter>
    </div>
    
  )
}

export default App;
