import React from "react";
import { MapContainer, TileLayer, SVGOverlay } from "react-leaflet";

const position = [51.505, -0.09];
const bounds = [
  [51.49, -0.08],
  [51.5, -0.06],
];

export default function Map() {
  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SVGOverlay attributes={{ stroke: "red" }} bounds={bounds}>
              <rect x="0" y="0" width="100%" height="100%" fill="blue" />
              <circle r="5" cx="10" cy="10" fill="red" />
              <text x="50%" y="50%" stroke="white">
                text
              </text>
            </SVGOverlay>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
