import { MapContainer, Popup, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

interface TurbineInMap {
  machine: string;
  position: LatLngExpression;
}

const Map = () => {
  const farm: LatLngExpression = [52.51485680606284, 10.743707683911682];
  const turbine: TurbineInMap[] = [
    { machine: "Turbine 1", position: [52.51707441603246, 10.739602783616618] },
    { machine: "Turbine 2", position: [52.51595288015125, 10.74094315922317] },
    { machine: "Turbine 3", position: [52.51462739174695, 10.74345636348545] },
    { machine: "Turbine 4", position: [52.51238416643517, 10.743791457387086] },
    { machine: "Turbine 5", position: [52.51075265791864, 10.745466926895276] },
  ];

  const fillBlueOptions = { fillColor: "green", color: "green" };
  return (
    <MapContainer
      center={farm}
      zoom={14}
      scrollWheelZoom={false}
      style={{ margin: "auto", height: "90%", width: "95%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {turbine.map(({machine, position}, i) => {
        return (
          <Circle
            center={position}
            pathOptions={fillBlueOptions}
            radius={80}
            key={i}
          >
            <Popup>{machine}</Popup>
          </Circle>
        );
      })}
    </MapContainer>
  );
};

export default Map;
