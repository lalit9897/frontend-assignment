export const loadGoogleMapsApi = (callback) => {
    const existingScript = document.getElementById('googleMaps');
  
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCXh7vdOIa2QQSAZXIISou1NoPNPYqIKAg`;
      script.id = 'googleMaps';
      document.body.appendChild(script);
  
      script.onload = () => {
        if (callback) callback();
      };
    }
  
    if (existingScript && callback) callback();
  };
  