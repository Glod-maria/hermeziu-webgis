"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const muzeuPosition: [number, number] = [47.442261, 27.550625];

// poarta muzeului
const poartaMuzeu: [number, number] = [47.442428, 27.551850];

export default function MapHermeziu() {
  const [limitaGeoJson, setLimitaGeoJson] = useState<any>(null);
  const [muzeuGeoJson, setMuzeuGeoJson] = useState<any>(null);
  const [trasuraGeoJson, setTrasuraGeoJson] = useState<any>(null);
  const [route, setRoute] = useState<[number, number][]>([]);
  const [userPosition, setUserPosition] = useState<[number, number] | null>(
    null
  );

  useEffect(() => {
    fetch("/limita.geojson")
      .then((res) => res.json())
      .then((data) => setLimitaGeoJson(data));

    fetch("/muzeu.geojson")
      .then((res) => res.json())
      .then((data) => setMuzeuGeoJson(data));

    fetch("/trasura.geojson")
      .then((res) => res.json())
      .then((data) => setTrasuraGeoJson(data));
  }, []);

  function traseuDeLaMine() {
    if (!navigator.geolocation) {
      alert("Browserul nu permite localizarea.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        setUserPosition([userLat, userLng]);

        fetch(
          `https://router.project-osrm.org/route/v1/driving/${userLng},${userLat};${poartaMuzeu[1]},${poartaMuzeu[0]}?overview=full&geometries=geojson`
        )
          .then((res) => res.json())
          .then((data) => {
            const coordinates = data.routes[0].geometry.coordinates;

            const traseu = coordinates.map((coord: [number, number]) => [
              coord[1],
              coord[0],
            ]);

            setRoute(traseu);
          });
      },
      () => {
        alert("Nu ai permis accesul la locație.");
      }
    );
  }

  return (
    <MapContainer
      center={[47.4429, 27.5514]}
      zoom={17}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; Esri, Maxar, Earthstar Geographics"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />

      {limitaGeoJson && (
        <GeoJSON
          data={limitaGeoJson}
          style={{
            color: "#2563eb",
            weight: 3,
            fillColor: "#60a5fa",
            fillOpacity: 0.08,
          }}
        />
      )}

      {muzeuGeoJson && (
        <GeoJSON
          data={muzeuGeoJson}
          style={{
            color: "#dc2626",
            weight: 3,
            fillColor: "#dc2626",
            fillOpacity: 0.22,
          }}
        />
      )}

      {trasuraGeoJson && (
        <GeoJSON
          data={trasuraGeoJson}
          style={{
            color: "#f59e0b",
            weight: 4,
            fillColor: "#f59e0b",
            fillOpacity: 0.35,
          }}
        />
      )}

      {route.length > 0 && (
        <Polyline
          positions={route}
          pathOptions={{
            color: "#16a34a",
            weight: 6,
            opacity: 0.9,
          }}
        />
      )}

      {userPosition && (
        <Marker position={userPosition}>
          <Popup>Locația ta</Popup>
        </Marker>
      )}


      <Marker position={muzeuPosition}>
        <Popup>
          <div style={{ width: "250px" }}>
            <img
              src="/muzeu.jpeg"
              alt="Muzeul Constantin Negruzzi"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "8px",
              }}
            />

            <h3 style={{ fontWeight: "bold", marginBottom: "6px" }}>
              Muzeul Constantin Negruzzi
            </h3>

            <p style={{ marginBottom: "10px" }}>
              Fostul conac al familiei Negruzzi, transformat în muzeu memorial.
            </p>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <a
                href="/muzeu"
                style={{
                  background: "#1d4ed8",
                  color: "white",
                  padding: "9px 12px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                📖 Detalii
              </a>

              <a
                href="https://captur3d.io/view/mnlri/muzeul-constantin-negruzzi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#166534",
                  color: "white",
                  padding: "9px 12px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                🏛️ Tur 3D
              </a>

              <button
                onClick={traseuDeLaMine}
                style={{
                  background: "#92400e",
                  color: "white",
                  padding: "9px 12px",
                  borderRadius: "8px",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                📍 Traseu de la mine
              </button>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}