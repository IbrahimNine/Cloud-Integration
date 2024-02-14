import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import useUserLocation from "../hooks/useUserLocation";
import useCountryCode from "../hooks/useCountryCode";
import useDelayedMessage from "../hooks/useDelayedMessage";
import NoLocation from "./NoLocation";
import useGeoData from "../hooks/useGeoData";

// Map component displaying user and other locations
function Map() {
  // Hooks for fetching user location, country code, and other data
  const userLocation = useUserLocation();
  const countryCode = useCountryCode(
    userLocation ? userLocation.latitude : null,
    userLocation ? userLocation.longitude : null
  );
  const showMessage = useDelayedMessage(!userLocation, 10000);
  const { places } = useGeoData(countryCode);

  // Custom icons for markers
  const markerIcon = L.icon({
    iconUrl:
      "https://icon-library.com/images/google-maps-location-icon/google-maps-location-icon-2.jpg",
    iconSize: [30, 40],
    iconAnchor: [13, 25],
  });
  const otherlocations = L.icon({
    iconUrl:
      "https://static.vecteezy.com/system/resources/previews/022/187/042/original/map-location-pin-icon-free-png.png",
    iconSize: [30, 40],
    iconAnchor: [13, 25],
  });

  return (
    <div className="Map">
      {/* Conditional rendering based on location availability */}
      {showMessage ? (
        <NoLocation />
      ) : !userLocation || !countryCode ? (
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/006/988/591/original/david-abrodos-rellotge-de-sorra-rapid.gif?1502823966"
          alt="Loading"
          height={"150px"}
          id="loadingGif"
        />
      ) : (
        <MapContainer
          center={[userLocation.latitude, userLocation.longitude]}
          zoom={9}
          style={{ height: "450px", width: "100%" }}
        >
          {/* Layer control for map views */}
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Street View">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Satellite View">
              <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
            </LayersControl.BaseLayer>
          </LayersControl>
          {/* Marker for user's location */}
          <Marker
            position={[userLocation.latitude, userLocation.longitude]}
            icon={markerIcon}
          >
            <Popup>You are here!</Popup>
          </Marker>
          {/* Mapping markers for other locations */}
          {places &&
            places.map((item, index) => (
              <Marker
                key={index}
                position={[item.latitude, item.longitude]}
                icon={otherlocations}
              >
                <Popup>{item.name}</Popup>
              </Marker>
            ))}
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
