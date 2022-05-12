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
        markerposition: defaultPosition,
        place: "Default",
        digit: 0
    }

    onTimerEvent = () => {
        console.log("DO SOMETHING!");
    }

    // componentDidMount = () => {
    //     this.myTimer = setInterval(() => {
    //         this.setState((prevState) => ({
    //             digit: prevState.digit + 1
    //         }));
    //     }, 1000) // Increment every 5 Seconds
    // }

    // componentWillUnmount = () => {
    //     clearInterval(this.myTimer);
    // }
    

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
                    {/* <div>
                        Timer: {this.state.digit}
                    </div> */}
                    <LoadScript
                        googleMapsApiKey="AIzaSyASTDssYDFH7WAYmpavSLgcBqFopJVf87w">
                        <GoogleMap
                            mapContainerStyle={ {width: '100%', height: '100%'}}
                            center={center}
                            zoom={15}
                        >
                            <Marker opacity={0.2} position={ {lat:36.9777223039389, lng:-122.0536747707009} } />
                            <Marker opacity={0.2} position={ {lat:36.981451629614874, lng:-122.05195574654519} } />
                            <Marker opacity={0.2} position={ {lat:36.98612000074854, lng:-122.05347527298636} } />
                            <Marker opacity={0.2} position={ {lat:36.99145429283725, lng:-122.05464479513023} } />
                            <Marker opacity={0.2} position={ {lat:36.994304362434605, lng:-122.05551753750245} } />
                            <Marker opacity={0.2} position={ {lat:36.997539844191074, lng:-122.05506544030388} } />
                            <Marker opacity={0.2} position={ {lat:36.99904725113633, lng:-122.05514548284367} } />
                            <Marker opacity={0.2} position={ {lat:36.99999651351248, lng:-122.0583279747162} } />
                            <Marker opacity={0.2} position={ {lat:37.00002893600196, lng:-122.062329159318} } />
                            <Marker opacity={0.2} position={ {lat:36.99938734456224, lng:-122.06454996723684} } />
                            <Marker opacity={0.2} position={ {lat:36.99313410613227, lng:-122.06514372032822} } />
                            <Marker opacity={0.2} position={ {lat:36.99191322700488, lng:-122.06679155373752} } />
                            <Marker opacity={0.2} position={ {lat:36.99004580052091, lng:-122.06718599652353} } />
                            <Marker opacity={0.2} position={ {lat:36.98289406053649, lng:-122.06269942075527} } />
                            <Marker opacity={0.2} position={ {lat:36.9788656482405, lng:-122.05773923019366} } />

                            <Marker 
                             icon={{
                                path:
                                  "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                                fillColor: "yellow",
                                fillOpacity: 0.9,
                                scale: 1,
                                strokeColor: "gold",
                                strokeWeight: 1,
                              }}
                            position = {this.state.markerposition}>  
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