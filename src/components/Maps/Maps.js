import React from "react";
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
      defaultCenter={{ lat: -33.566593, lng: -70.548037 }}
      defaultOptions={{
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: true,
        rotateControl: true,
        fullscreenControl: false,
      }}
      disableDefaultUI
    >
      <Marker position={{ lat: -33.566593, lng: -70.548037 }} />
    </GoogleMap>
  ))
);


export default MyMapComponent;
