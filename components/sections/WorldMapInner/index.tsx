"use client";

import L from "leaflet";
import { CircleMarker, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MAP_LEGEND, MAP_LOCATIONS, type MapCategory } from "@/lib/map-locations";
import { useTranslation } from "@/components/useTranslation";
import "leaflet/dist/leaflet.css";
import "./styles.css";

const LEGEND_KEY: Record<MapCategory, string> = {
  advisor: "legendAdvisor",
  destination: "legendDestination",
};

const CONTINENT_LABELS = [
  { name: "North America", lat: 48,  lng: -105 },
  { name: "South America", lat: -12, lng: -58  },
  { name: "Europe",        lat: 54,  lng: 18   },
  { name: "Africa",        lat: 2,   lng: 22   },
  { name: "Asia",          lat: 38,  lng: 92   },
  { name: "Australia",     lat: -24, lng: 134  },
] as const;

const continentLabelIcon = (name: string) =>
  L.divIcon({
    className: "continent-label-marker",
    html: `<span class="continent-label">${name}</span>`,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });

const WorldMapInner = () => {
  const { t } = useTranslation("home.worldMap");

  return (
    <div className="absolute inset-0 z-0">
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
        className="w-full h-full min-h-[clamp(420px,52vw,620px)] bg-navy-3"
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

      <div
        className="absolute z-1000 top-[clamp(20px,4vw,36px)] right-[clamp(20px,4vw,36px)] flex flex-col gap-2.5 p-[16px_18px] rounded-(--radius) bg-[rgba(14,23,41,0.88)] border border-[rgba(243,237,226,0.14)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] shadow-[0_16px_40px_-20px_rgba(0,0,0,0.45)]"
        aria-label="Map legend"
      >
        {MAP_LEGEND.map((item) => (
          <div key={item.category} className="flex items-center gap-2.5 text-[0.82rem] font-medium text-cream-soft leading-[1.35]">
            <span
              className="flex-none w-3 h-3 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,0.15)]"
              style={{ backgroundColor: item.color }}
              aria-hidden="true"
            />
            <span>{t(LEGEND_KEY[item.category])}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldMapInner;
