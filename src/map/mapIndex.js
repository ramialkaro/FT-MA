import React from 'react'
import ReactMapGL from 'react-map-gl'
/*import { FullscreenControl, GeolocateControl } from 'react-map-gl'
 import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import Geolocation from 'react-geolocation' */

export default function MapIndex() {


/*     const navStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
    }; */

    const [state, setState] = React.useState({

        width: "auto",
        height: "90vh",
        latitude: 60.218891,
        longitude: 24.813980,
        zoom: 13,
        bearing: 0,
        pitch: 0,

    })




    return (
        <div>
                           <ReactMapGL
                {...state}
                mapboxApiAccessToken={"pk.eyJ1IjoicmFtaWFsa2FybyIsImEiOiJjazZ5NnYxdGUwc2l2M2VwN3Z1Z2o5ZWJ0In0.xulP_BLwP80gJCpD4AWKBA"}
                mapStyle={"mapbox://styles/ramialkaro/ck6yyup651vnv1iodthdtdah1"}
                onViewportChange={setState}
            >
               

            </ReactMapGL> 
            {/* <Geolocation
                render={({ getCurrentPosition, position }) => (
                    <div>
                        <button onClick={getCurrentPosition}>Get Current Position</button>
                        <p>{position && position.coords.latitude}</p>
                        <p>{position && position.coords.longitude}</p>

                    </div>
                )}
            />
            <br />
            <MapGL
                mapStyle={"mapbox://styles/ramialkaro/ck6yyup651vnv1iodthdtdah1"}
                {...state}
                onViewportChange={setState}
                mapboxApiAccessToken={"pk.eyJ1IjoicmFtaWFsa2FybyIsImEiOiJjazZ5NnYxdGUwc2l2M2VwN3Z1Z2o5ZWJ0In0.xulP_BLwP80gJCpD4AWKBA"}>
                <div className="nav" style={navStyle}>
                    <NavigationControl />
                </div>
                <Marker latitude={60.218891} longitude={24.813980} offsetLeft={-20} offsetTop={-10}>
                    <div style={{ color: 'white' }}>You are here</div>
                </Marker>
            </MapGL>
            <div>

            </div> */}
        </div>
    )
}