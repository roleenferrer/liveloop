import React from 'react';
import './style/map.css';
import {Marker, GoogleMap, LoadScript, InfoWindow} from '@react-google-maps/api';

// Default for center of map
const center = {
    lat: 36.988230225431984,
    lng: -122.05822002436861,
    zoom: 15
};

// Default for center of map positon at UCSC
const defaultPosition = {
    lat: 36.9777223039389,
    lng:-122.0536747707009,
};

class Map extends React.Component {
    state = {

        markerposition: defaultPosition,    // Controls marker positon for Geolocation

        center: center,                     // Sets center of map for Geolocation

        icon: "./bus_icon.png",

        // Positions to represent locations of loop buses
        shuttle1: defaultPosition,
        shuttle2: defaultPosition,
        shuttle3: defaultPosition,
        shuttle4: defaultPosition,
        shuttle5: defaultPosition,
        shuttle6: defaultPosition,
        shuttle7: defaultPosition,
        shuttle8: defaultPosition,
        shuttle9: defaultPosition,
        shuttle10: defaultPosition,

        showInfo: ''                        // Current string for info window component
    };

    locations = [
        //Main Entrance
        {lat:36.9788656482405, lng:-122.05773923019366, name:"Main Entrance"}, 
        //Lower Campus
        {lat:36.981451629614874, lng:-122.05195574654519, name: "Lower Campus"},
        //The Farm
        {lat:36.98612000074854, lng:-122.05347527298636, name: "The Farm"},
        //East Remote Parking
        {lat:36.99145429283725, lng:-122.05464479513023, name: "East Remote Parking"},
        //East Field House
        {lat:36.994304362434605, lng:-122.05551753750245, name: "East Field House"},
        //Crown and Merill College
        {lat:36.997539844191074, lng:-122.05506544030388, name: "Cowell and Stevenson"},
        //College 9/10
        {lat:36.99904725113633, lng:-122.05514548284367, name: "Crown and Merill College"} ,
        //Sciences Hill
        {lat:36.99999651351248, lng:-122.0583279747162, name: "College 9/10"},
        //Kresge
        {lat:37.00002893600196, lng:-122.062329159318, name: "Science Hill"},
        //Racheal Carsons
        {lat:36.99938734456224, lng:-122.06454996723684, name: "Kresge"},
        //Oakes Collegse
        {lat:36.99313410613227, lng:-122.06514372032822, name: "Racheal Carsons"},
        //Arboretum
        {lat:36.99191322700488, lng:-122.06679155373752, name: "Oakes College"},
        //High and Western Dr
        {lat:36.99004580052091, lng:-122.06718599652353, name: "Arboretum"},
        //Main Gate
        {lat:36.98289406053649, lng:-122.06269942075527, name: "High and Western Dr"}
    ];

    componentDidMount = () => {
      this.myTimer = setInterval(() => {
          fetch('http://localhost:3010/v0/location')
              .then((response) => {
                  if (!response.ok) {
                      throw response;
                  }
                  return response.json();
              })
              .then((json) => {
                  json.sort((a,b) => {
                      if (a['bus_id'] < b['bus_id']) {
                          return -1
                      } else {
                          return 1
                      }
                  });
                  this.setState({shuttle1: {lat: json[0].latitude, lng: json[0].longitude}})
                  this.setState({shuttle2: {lat: json[1].latitude, lng: json[1].longitude}})
                  this.setState({shuttle3: {lat: json[2].latitude, lng: json[2].longitude}})
                  this.setState({shuttle4: {lat: json[3].latitude, lng: json[3].longitude}})
                  this.setState({shuttle5: {lat: json[4].latitude, lng: json[4].longitude}})
                  this.setState({shuttle6: {lat: json[5].latitude, lng: json[5].longitude}})
                  this.setState({shuttle7: {lat: json[6].latitude, lng: json[6].longitude}})
                  this.setState({shuttle8: {lat: json[7].latitude, lng: json[7].longitude}})
                  this.setState({shuttle9: {lat: json[8].latitude, lng: json[8].longitude}})
                  this.setState({shuttle10: {lat: json[9].latitude, lng: json[9].longitude}})
              })
              .catch((error) => {
                  // alert(`ERROR: ${error.toString()}`);
              });
      }, 1200) // Increment every 6 Seconds
  }

    componentWillUnmount = () => {
        clearInterval(this.myTimer);
    }

    handleToggleOpen = (id) => {
        this.setState({
            showInfo: id
        });
    };
    handleToggleClose = () => {
        this.setState({
            showInfo: ''
        });
    };

    getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    markerposition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        zoom: 18
                    }
                })
                console.log(position.coords.latitude)
                console.log(position.coords.longitude)
            },
            error => {
                console.log(error)
                console.log(this.location.lat)
                console.log(this.location.lng)
            },
            {enableHighAccuracy: true}
        )
    }


    renderMarkers() {
        return this.locations.map((location, i) => {
            return <Marker 
                key={i}
                position={{lat:location.lat, lng:location.lng}}
                onMouseOver={() => this.handleToggleOpen(i)}
                >
                {
                    this.state.showInfo === i &&
                    <InfoWindow 
                        onMouseOver={() => this.handleToggleClose}
                    > 
                        <span>{location.name}</span>
                    </InfoWindow>
                }
            </Marker>
        })
    };
    
    render() {
        return (
            <div className="map">
                <div className="google-map">
                    <div>
                        {this.getLocation()}
                    </div>
                    <LoadScript
                        googleMapsApiKey="AIzaSyASTDssYDFH7WAYmpavSLgcBqFopJVf87w">
                        <GoogleMap
                            mapContainerStyle={ {width: '100%', height: '100%'}}
                            center={this.state.center}
                            zoom={this.state.center.zoom}
                        >
                            <div>{ this.renderMarkers() }</div>

                            <Marker 
                                icon={{
                                path:
                                  "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                                fillColor: "blue",
                                fillOpacity: 0.9,
                                scale: 1,
                                strokeColor: "gold",
                                strokeWeight: 1,
                              }}
                            position = {this.state.shuttle1}>  
                            </Marker>

                            <Marker 
                             icon={{
                                path:
                                  "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                                fillColor: "blue",
                                fillOpacity: 0.9,
                                scale: 1,
                                strokeColor: "gold",
                                strokeWeight: 1,
                              }}
                            position = {this.state.shuttle2}>  
                            </Marker>

                            <Marker 
                             icon={{
                                path:
                                  "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                                fillColor: "red",
                                fillOpacity: 0.9,
                                scale: 1,
                                strokeColor: "gold",
                                strokeWeight: 1,
                              }}
                            position = {this.state.shuttle3}>  
                            </Marker>

                            <Marker 
                             icon={{
                                path:
                                  "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                                fillColor: "red",
                                fillOpacity: 0.9,
                                scale: 1,
                                strokeColor: "gold",
                                strokeWeight: 1,
                              }}

                            position = {this.state.shuttle4}>  
                            </Marker>
                            
                            <Marker 
                             icon={{
                                path:
                                  "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                                fillColor: "blue",
                                fillOpacity: 0.9,
                                scale: 1,
                                strokeColor: "gold",
                                strokeWeight: 1,
                              }}
                            position = {this.state.shuttle5}>  
                            </Marker>

                            <Marker 
                             icon={{
                                path:
                                  "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                                fillColor: "red",
                                fillOpacity: 0.9,
                                scale: 1,
                                strokeColor: "gold",
                                strokeWeight: 1,
                              }}
                            position = {this.state.shuttle6}>  
                            </Marker>

                            <Marker 
                             icon={{
                                path:
                                  "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                                fillColor: "red",
                                fillOpacity: 0.9,
                                scale: 1,
                                strokeColor: "gold",
                                strokeWeight: 1,
                              }}
                            position = {this.state.shuttle7}>  
                            </Marker>

                            <Marker 
                             icon={{
                                path:
                                  "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                                fillColor: "red",
                                fillOpacity: 0.9,
                                scale: 1,
                                strokeColor: "gold",
                                strokeWeight: 1,
                              }}
                            position = {this.state.shuttle8}>  
                            </Marker>

                            <Marker 
                             icon={{
                                path:
                                  "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                                fillColor: "red",
                                fillOpacity: 0.9,
                                scale: 1,
                                strokeColor: "gold",
                                strokeWeight: 1,
                              }}
                            position = {this.state.shuttle9}>  
                            </Marker>

                            <Marker 
                             icon={{
                                path:
                                  "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                                fillColor: "red",
                                fillOpacity: 0.9,
                                scale: 1,
                                strokeColor: "gold",
                                strokeWeight: 1,
                              }}
                            position = {this.state.shuttle10}>  
                            </Marker>
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        )
    }
}

export default Map