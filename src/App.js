import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Map = () => {
  const classes = useStyles();

  const containerStyle = {
    width: "600px",
    height: "400px",
  };

  const center = {
    lat: 0, 
    lng: 0, 
  };

  return (
    <div className={classes.mapContainer}>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"> 
        {/* i can't found it */}
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

function App() {
  return (
    <div>
      <Map />
    </div>
  );
}

export default App;