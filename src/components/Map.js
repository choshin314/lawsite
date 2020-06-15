import React, {useEffect, useRef} from "react"
import { window, document } from "browser-monads"

function Map() {
    const googleMapRef = useRef(null);

    //have to prepend "window" to the google obj every time
    //---------------Map------------------//
    const createGoogleMap = () => ( 
        new window.google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: mapProps.center,
            disableDefaultUI: true,
            zoomControl: true,
        })
    )

    const mapProps = {
        center: {
            lat: 38.513228,
            lng: -90.316865
        },
        styles: {
            width: "100%",
            height: "400px",

        }
    }

    function initMap() {
        let map = createGoogleMap();
        let infowindow = new window.google.maps.InfoWindow();
        let marker = new window.google.maps.Marker({position: mapProps.center, map: map});
        infowindow.setContent(`<div style="font-weight: bold; color: var(--darkblue); line-height: 1.5;"><h3>Law Office of Shin Cho</h3><p>3245 Lemay Ferry Road</p><p>St. Louis, MO 63125</p><p>Tel: <a href="tel: +13143121228" style="color: var(--mediumblue)">(314) 312-1228</a></p></div>`);
        infowindow.open(map, marker);
    }

    useEffect(() => {
        //create <script> element for the google script, then append it to the body

        const gScript = window.document.createElement('script');
        gScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
        gScript.async = true;
        window.document.body.appendChild(gScript);

        //add event listener to the script tag, when script loads, call the initMap function to initialize the map
        gScript.addEventListener('load', initMap);

    }, [])

    return <div id="map" ref={googleMapRef} style={mapProps.styles} />     

}

export default Map;