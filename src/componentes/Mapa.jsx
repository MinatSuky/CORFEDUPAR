
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'

};

const center = {
  lat: 10.4295000,  
  lng: -73.2437855
};

const Mapa = () => {
    return (
    <LoadScript  googleMapsApiKey="AIzaSyAsN2Sm1t739s6F1iHJuhef6pqG8Joa6so">
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