"use client";

import L from "leaflet";
import { CircleMarker, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MAP_LEGEND, MAP_LOCATIONS } from "@/lib/map-locations";
import "leaflet/dist/leaflet.css";

const CONTINENT_LABELS = [
  { name: "North America", lat: 48, lng: -105 },
  { name: "South America", lat: -12, lng: -58 },
  { name: "Europe", lat: 54, lng: 18 },
  { name: "Africa", lat: 2, lng: 22 },
  { name: "Asia", lat: 38, lng: 92 },
  { name: "Australia", lat: -24, lng: 134 },
] as const;

const continentLabelIcon = (name: string) =>
  L.divIcon({
    className: "continent-label-marker",
    html: `<span class="continent-label">${name}</span>`,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });

const WorldMapInner = () => (
  <div className="world-map-leaflet">
    <MapContainer
      center={[25, -20]}
      zoom={2}
      minZoom={2}
      maxZoom={4}
      scrollWheelZoom={false}
      zoomControl
      worldCopyJump
      maxBounds={[[-85, -220], [85, 220]]}
      maxBoundsViscosity={0.85}
      className="world-map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
      />

      {CONTINENT_LABELS.map(({ name, lat, lng }) => (
        <Marker
          key={name}
          position={[lat, lng]}
          icon={continentLabelIcon(name)}
          interactive={false}
        />
      ))}

      {MAP_LOCATIONS.map((loc) => {
        const legend = MAP_LEGEND.find((item) => item.category === loc.category);
        const color = legend?.color ?? "#b8965a";
        return (
          <CircleMarker
            key={`${loc.category}-${loc.name}`}
            center={[loc.lat, loc.lng]}
            radius={loc.category === "advisor" ? 8 : 7}
            pathOptions={{
              color: "#fff",
              weight: 1.5,
              fillColor: color,
              fillOpacity: 0.9,
            }}
            className="map-marker-circle"
          >
            <Popup className="map-popup">
              <strong>{loc.name}</strong>
              <span>{loc.region}</span>
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
