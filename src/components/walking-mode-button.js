import React, { useState, useEffect } from "react";
import { useRoundware } from "../hooks";
import { GeoListenMode } from "roundware-web-framework";
import { useGoogleMap } from "@react-google-maps/api";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import MapIcon from '@material-ui/icons/Map';
import ListenerLocationMarker from './listener-location-marker';

const useStyles = makeStyles((theme) => {
  return {
    walkingModeButton: {
      position: "absolute",
      zIndex: 100,
      left: 20,
      bottom: 10,
      backgroundColor: "#cccccc",
    },
  };
});

const walkingModeButton = () => {
  const { roundware, forceUpdate, geoListenMode, setGeoListenMode } = useRoundware();
  const [busy, setBusy] = useState(false);
  const map = useGoogleMap();
  const classes = useStyles();
  // const [walkingMode, setwalkingMode] = useState(false);
  const loc = roundware._listenerLocation
  const lat = loc && loc.latitude
  const lng = loc && loc.longitude
  const center = { lat, lng }
  const ready = typeof(lat) === "number" && typeof(lng) === "number"

  // when the listenerLocation is updated, center the map
  useEffect(() => {
    if (ready) {
      const c = map.getCenter();
      console.log("new location provided by framework");
      if (center.lat !== c.lat() || center.lng !== c.lng()) {
        map.panTo(center)
      }
    }
  }, [lat, lng])

  const toggleWalkingMode = () => {
    setBusy(true);
    if (geoListenMode === GeoListenMode.AUTOMATIC) {
      console.log("switching to map mode");
      // zoom out
      map.setZoom(5);
      // enable map panning
      map.setOptions({gestureHandling: "cooperative"});
      // stop listening for location updates
      setGeoListenMode(GeoListenMode.MANUAL);
      // update text instructions?
    } else if ([GeoListenMode.MANUAL, GeoListenMode.DISABLED].includes(geoListenMode)) {
      console.log("switching to walking mode");
      // disable map panning
      map.setOptions({gestureHandling: "none"});
      console.log("Found location")
      // zoom in
      map.setZoom(17);
      // determine user location and listen for updates
      setGeoListenMode(GeoListenMode.AUTOMATIC);
      // update text instructions?
      // use spinner to indicate location is being determined initially
    }
    if (roundware._mixer) {
      const trackIds = Object.keys(roundware._mixer.playlist.trackIdMap).map( id => parseInt(id) );
      trackIds.forEach(
        audioTrackId => roundware._mixer.skipTrack(audioTrackId)
      );
    }
    setBusy(false);
  };

  return (
    <div>
      <Button
        className={classes.walkingModeButton}
        color="primary"
        disabled={busy}
        onClick={toggleWalkingMode}
      >
        {(geoListenMode === GeoListenMode.AUTOMATIC) ? (
          <MapIcon fontSize="large" />
        ) : (
          <DirectionsWalkIcon fontSize="large" />
        )}
      </Button>
      {(geoListenMode === GeoListenMode.AUTOMATIC) ? <ListenerLocationMarker /> : null}
    </div>
  );
}

export default walkingModeButton;
