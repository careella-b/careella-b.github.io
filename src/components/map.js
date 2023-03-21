import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '1000px',
  height: '600px'
};

const center = {
  lat: 54.98003515935539, 
  lng: -1.6218847176489046
};


function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBRfekT12CG2p1MGyWUNtfxqqBdbgfiH0k"
    >
      <GoogleMap
        center={center}
        zoom={15}
        options={{gestureHandling: "greedy"}}
        mapContainerStyle={containerStyle}
      >
        <Marker
          position={center} />
      </GoogleMap>
    </LoadScript>
  )
}


export { Map };