// import React from "react";
// import Map from "./Map.jsx";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//     map: {
//       height: "100vh",
//     },
// });

// var defaultLocation = {
//     address: "University of California, Santa Cruz",
//     lat: 36.988230225431984,
//     lng: -122.05822002436861,
// };

// var location = {
//     address: "University of California, Santa Cruz",
//     lat: 36.988230225431984,
//     lng: -122.05822002436861,
// };

//const classes = useStyles();

// const successCallback = (position) => {
//     var currLocation = {
//         address: "Current Location",
//         lat: position.coords.latitude,
//         lng: position.coords.longitude,
//     };

//     <div className={classes.map}>
//         <Map
//             className={classes.map}
//             location={currLocation}
//             zoomLevel={20}
//         />
//     </div>
// };

// const errorCallback = (error) => {
//     <div className={classes.map}>
//         <Map
//             className={classes.map}
//             location={defaultLocation}
//             zoomLevel={15}
//         />
//     </div>
// };

function GetLocation({location}) {
    //const classes = useStyles();
    return (
        navigator.geolocation.getCurrentPosition(
            position => {
                location.address = "Current Location"
                location.lat = position.coords.latitude;
                location.lng = position.coords.longitude;
                console.log(location.lat)
                console.log(location.lng)
            },
            error => {
                console.log(error)
                console.log(location.lat)
                console.log(location.lng)
            }
        )
    );
}

export default GetLocation;