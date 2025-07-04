
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'

};

const center = {
  lat: 10.4294459,   // ejemplo: Valledupar
  lng: -73.2419887
};

const Mapa = () => {
    return (
    <LoadScript  googleMapsApiKey="AIzaSyDlBmOVx0IO_LBWwjzDUoymCKEQlUOnSho">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
export default Mapa