import React, { useRef, useEffect } from 'react';
import { loadGoogleMapsApi } from '../utils/loadGoogleMapsApi';

function Map({ gps }) {
  const mapRef = useRef(null);
  const gpsData = gps?.split('|').map(coord => parseFloat(coord));

  useEffect(() => {
    loadGoogleMapsApi(() => {
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: gpsData?.[0], lng: gpsData?.[1] },
          zoom: 8,
        });
      }
    });
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
}

export default Map;
