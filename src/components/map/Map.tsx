import { MapContainer, Popup, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";


const Map = () => {
  const anneaOffice:  LatLngExpression = [38.711784301405125, -9.13566346107627];
  const fillBlueOptions = { fillColor: "green", color:'green'};
  return (
    <MapContainer
      center={anneaOffice}
      zoom={14}
      scrollWheelZoom={false}
      style={{ margin: "auto", height: "90%", width: "90%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={anneaOffice} pathOptions={fillBlueOptions} radius={40}>
        <Popup>ANNEA Office</Popup>
      </Circle>
    </MapContainer>
  );
};

export default Map;