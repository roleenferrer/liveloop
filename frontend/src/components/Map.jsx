import React from 'react'
import './style/map.css'
import {Marker, GoogleMap, LoadScript } from '@react-google-maps/api'
import data from "../components/data/test.json"

const center = {
    lat: 36.988230225431984,
    lng: -122.05822002436861
  };

const defaultPosition = {
    lat: 36.9777223039389,
    lng:-122.0536747707009
};

class Map extends React.Component {
    state = {
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
        place: "Default",
        digit: 0
    }

    onTimerEvent = () => {
        console.log("DO SOMETHING!");
    }

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
    
    onMouseOverEvent = (place) => {
        this.setState({
          markerposition: { lat: place.lat, lng: place.lng },
          place: place.name,
        });
    };

    render() {
        return (
            <div className="map">
                <div className="google-map">
                    <LoadScript
                        googleMapsApiKey="AIzaSyASTDssYDFH7WAYmpavSLgcBqFopJVf87w">
                        <GoogleMap
                            mapContainerStyle={ {width: '100%', height: '100%'}}
                            center={center}
                            zoom={15}
                        >
                            <Marker
                             icon={{
                                path:
                                "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                                fillColor: "blue",
                                fillOpacity: 0.9,
                                scale: 1,
                                strokeColor: "gold",
                                strokeWeight: 1,
                                // url: 'https://img.icons8.com/ios-glyphs/344/bus.png',
                                // scaledSize: window.google.maps.Size(37, 37)
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
                                fillColor: "blue",
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
                                fillColor: "blue",
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
                    
                    {data.map((place, index) => (
                    <p key={index} onMouseOver={() => this.onMouseOverEvent(place)}>
                        {place.name}
                    </p>
                    ))}
                
                </div>
            </div>
        )
    }
}


export default Map
