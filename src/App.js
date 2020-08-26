import React from "react";
import logo from "./logo.svg";
import "./App.css";


import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -33.566593, lng: -70.548037 }}>
      <Marker position={{ lat: -33.566593, lng: -70.548037 }} />
    </GoogleMap>
  ))
);


function App() {
  return (
    <div className="App">
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVACQHjPUjNm2kQ9ova72zU8iLxGBAoa4&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
