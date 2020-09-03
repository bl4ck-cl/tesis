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

const Mapa = () => {
  return (
    <MyMapComponent
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVACQHjPUjNm2kQ9ova72zU8iLxGBAoa4&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Mapa;
