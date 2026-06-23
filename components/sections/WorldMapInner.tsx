"use client";

import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { MAP_LEGEND, MAP_LOCATIONS } from "@/lib/map-locations";
import "leaflet/dist/leaflet.css";

const WorldMapInner = () => (
  <div className="world-map-leaflet">
    <MapContainer
      center={[30, 10]}
      zoom={2}
      minZoom={2}
      maxZoom={8}
      scrollWheelZoom
      className="world-map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {MAP_LOCATIONS.map((loc) => {
        const legend = MAP_LEGEND.find((item) => item.category === loc.category);
        return (
          <CircleMarker
            key={`${loc.category}-${loc.name}`}
            center={[loc.lat, loc.lng]}
            radius={7}
            pathOptions={{
              color: legend?.color ?? "#b8965a",
              fillColor: legend?.color ?? "#b8965a",
              fillOpacity: 0.85,
              weight: 2,
            }}
          >
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.region}
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>

    <div className="world-map-legend" aria-label="Map legend">
      {MAP_LEGEND.map((item) => (
        <div className="world-map-legend-item" key={item.category}>
          <span
            className="world-map-legend-dot"
            style={{ backgroundColor: item.color }}
            aria-hidden="true"
          />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default WorldMapInner;
