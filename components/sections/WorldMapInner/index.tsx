"use client";

import { useEffect, useRef } from "react";
import {
  Map as MapLibreMap,
  Marker,
  NavigationControl,
  Popup,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MAP_LEGEND, MAP_LOCATIONS, type MapCategory } from "@/lib/map-locations";
import { useTranslation } from "@/components/useTranslation";
import "./styles.css";

/** OpenFreeMap Positron — free vector style, no API key. */
const OPENFREEMAP_POSITRON = "https://tiles.openfreemap.org/styles/positron";

const LEGEND_KEY: Record<MapCategory, string> = {
  advisor: "legendAdvisor",
  destination: "legendDestination",
};

const CONTINENT_LABELS = [
  { name: "North America", lat: 48, lng: -105 },
  { name: "South America", lat: -12, lng: -58 },
  { name: "Europe", lat: 54, lng: 18 },
  { name: "Africa", lat: 2, lng: 22 },
  { name: "Asia", lat: 38, lng: 92 },
  { name: "Australia", lat: -24, lng: 134 },
] as const;

const colorFor = (category: MapCategory) =>
  MAP_LEGEND.find((item) => item.category === category)?.color ?? "#b8965a";

const WorldMapInner = () => {
  const { t } = useTranslation("home.worldMap");
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Fresh mount node per effect run — avoids MapLibre container reuse under Strict Mode.
    const mount = document.createElement("div");
    mount.className = "world-map-gl-mount";
    mount.style.width = "100%";
    mount.style.height = "100%";
    host.appendChild(mount);

    let cancelled = false;
    let map: MapLibreMap | null = null;
    const popups: Popup[] = [];
    const markers: Marker[] = [];

    const hidePlaceLabels = (instance: MapLibreMap) => {
      const style = instance.getStyle();
      for (const layer of style.layers ?? []) {
        if (layer.type === "symbol") {
          instance.setLayoutProperty(layer.id, "visibility", "none");
        }
      }
    };

    const addOverlays = (instance: MapLibreMap) => {
      hidePlaceLabels(instance);

      for (const { name, lat, lng } of CONTINENT_LABELS) {
        const el = document.createElement("span");
        el.className = "continent-label";
        el.textContent = name;
        markers.push(
          new Marker({ element: el, anchor: "center" })
            .setLngLat([lng, lat])
            .addTo(instance),
        );
      }

      for (const loc of MAP_LOCATIONS) {
        const el = document.createElement("button");
        el.type = "button";
        el.className =
          loc.category === "advisor"
            ? "map-dot map-dot--advisor map-marker-circle"
            : "map-dot map-dot--destination map-marker-circle";
        el.style.backgroundColor = colorFor(loc.category);
        el.setAttribute("aria-label", `${loc.name}, ${loc.region}`);

        const popupRoot = document.createElement("div");
        popupRoot.className = "map-popup";
        const title = document.createElement("strong");
        title.textContent = loc.name;
        const region = document.createElement("span");
        region.textContent = loc.region;
        popupRoot.append(title, region);

        const popup = new Popup({
          offset: 12,
          closeButton: true,
          maxWidth: "220px",
          className: "map-popup",
        }).setDOMContent(popupRoot);
        popups.push(popup);

        el.addEventListener("click", (event) => {
          event.stopPropagation();
          popup.setLngLat([loc.lng, loc.lat]).addTo(instance);
        });

        markers.push(
          new Marker({ element: el, anchor: "center" })
            .setLngLat([loc.lng, loc.lat])
            .addTo(instance),
        );
      }
    };

    const initMap = () => {
      if (cancelled || map) return;
      if (mount.clientWidth < 2 || mount.clientHeight < 2) return;

      try {
        map = new MapLibreMap({
          container: mount,
          style: OPENFREEMAP_POSITRON,
          center: [-35, 15],
          zoom: 1.4,
          minZoom: 1.2,
          maxZoom: 4,
          attributionControl: { compact: true },
          scrollZoom: false,
          dragRotate: false,
          pitchWithRotate: false,
          failIfMajorPerformanceCaveat: false,
        });
      } catch (error) {
        console.error("[world-map] failed to create map", error);
        return;
      }

      map.addControl(new NavigationControl({ showCompass: false }), "top-left");

      const onLoad = () => {
        if (!cancelled && map) addOverlays(map);
      };
      if (map.isStyleLoaded()) onLoad();
      else map.once("load", onLoad);
    };

    const observer = new ResizeObserver(() => {
      if (!map) initMap();
      else map.resize();
    });
    observer.observe(mount);
    const raf = requestAnimationFrame(() => initMap());

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      for (const popup of popups) popup.remove();
      for (const marker of markers) marker.remove();
      map?.remove();
      map = null;
      mount.remove();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <div
        ref={hostRef}
        className="world-map-gl w-full h-full min-h-[clamp(420px,52vw,620px)] bg-[#d8e0e8]"
      />

      <div
        className="absolute z-1000 top-[clamp(20px,4vw,36px)] right-[clamp(20px,4vw,36px)] flex flex-col gap-2.5 p-[16px_18px] rounded-(--radius) bg-[rgba(14,23,41,0.88)] border border-[rgba(243,237,226,0.14)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] shadow-[0_16px_40px_-20px_rgba(0,0,0,0.45)]"
        aria-label="Map legend"
      >
        {MAP_LEGEND.map((item) => (
          <div
            key={item.category}
            className="flex items-center gap-2.5 text-[0.82rem] font-medium text-cream-soft leading-[1.35]"
          >
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
