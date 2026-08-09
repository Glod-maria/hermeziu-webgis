"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  ZoomControl,
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

// Coordonate folosite doar pentru poziționarea markerelor
const muzeuPosition: [number, number] = [47.442301, 27.550675];
const bisericaPosition: [number, number] = [47.442852, 27.552188];
const scoalaPosition: [number, number] = [47.443131, 27.5521];
const primariePosition: [number, number] = [47.443394, 27.551825];
const conacmicPosition: [number, number] = [47.442431, 27.552152];

function emojiIcon(emoji: string, size = 30) {
  return L.divIcon({
    html: `
      <div style="
        font-size:${size}px;
        width:${size + 8}px;
        height:${size + 8}px;
        display:flex;
        align-items:center;
        justify-content:center;
        filter: drop-shadow(0 2px 3px rgba(0,0,0,0.45));
      ">
        ${emoji}
      </div>
    `,
    className: "",
    iconSize: [size + 8, size + 8],
    iconAnchor: [(size + 8) / 2, (size + 8) / 2],
  });
}

const muzeuIcon = emojiIcon("🏛️", 30);
const bisericaIcon = emojiIcon("⛪", 25);
const scoalaIcon = emojiIcon("🏫", 30);
const primarieIcon = emojiIcon("🏤", 29);
const conacmicIcon = emojiIcon("🏡", 29);
const mormantIcon = emojiIcon("🪦", 18);

export default function MapHermeziu() {
  // GeoJSON pentru limite și obiective
  const [contGeoJson, setContGeoJson] = useState<any>(null);
  const [muzeuGeoJson, setMuzeuGeoJson] = useState<any>(null);
  const [limitaBisericaGeoJson, setLimitaBisericaGeoJson] = useState<any>(null);
  const [scoalaGeoJson, setScoalaGeoJson] = useState<any>(null);
  const [limitaScoalapGeoJson, setLimitaScoalapGeoJson] = useState<any>(null);
  const [limMagGeoJson, setLimMagGeoJson] = useState<any>(null);

  // GeoJSON pentru necropolă
  const [morcGeoJson, setMorcGeoJson] = useState<any>(null);
  const [morlGeoJson, setMorlGeoJson] = useState<any>(null);
  const [morgGeoJson, setMorgGeoJson] = useState<any>(null);
  const [moraGeoJson, setMoraGeoJson] = useState<any>(null);
  const [morclGeoJson, setMorclGeoJson] = useState<any>(null);
  const [morsGeoJson, setMorsGeoJson] = useState<any>(null);

  // Filtre
  const [showMuzeu, setShowMuzeu] = useState(true);
  const [showBiserica, setShowBiserica] = useState(true);
  const [showScoala, setShowScoala] = useState(true);
  const [showPrimarie, setShowPrimarie] = useState(true);
  const [showConacMic, setShowConacMic] = useState(true);
  const [showMorminte, setShowMorminte] = useState(true);

  // Încărcarea fișierelor GeoJSON
  useEffect(() => {
    fetch("/cont.geojson")
      .then((res) => res.json())
      .then(setContGeoJson);

    fetch("/muzeu.gpkg.geojson")
      .then((res) => res.json())
      .then(setMuzeuGeoJson);

    fetch("/limita-biserica.geojson")
      .then((res) => res.json())
      .then(setLimitaBisericaGeoJson);

    fetch("/scoalap.geojson")
      .then((res) => res.json())
      .then(setScoalaGeoJson);

    fetch("/limita-scoalap.geojson")
      .then((res) => res.json())
      .then(setLimitaScoalapGeoJson);

    fetch("/lim-mag.geojson")
      .then((res) => res.json())
      .then(setLimMagGeoJson);

    fetch("/morc.geojson")
      .then((res) => res.json())
      .then(setMorcGeoJson);

    fetch("/morl.geojson")
      .then((res) => res.json())
      .then(setMorlGeoJson);

    fetch("/morg.geojson")
      .then((res) => res.json())
      .then(setMorgGeoJson);

    fetch("/mora.geojson")
      .then((res) => res.json())
      .then(setMoraGeoJson);

    fetch("/morcl.geojson")
      .then((res) => res.json())
      .then(setMorclGeoJson);

    fetch("/mors.geojson")
      .then((res) => res.json())
      .then(setMorsGeoJson);
  }, []);

  // Popup pentru morminte
  function popupMormant(
    nume: string,
    ani: string,
    descriere: string,
    imagine: string
  ) {
    return `
      <div style="width:240px">
        <img 
          src="${imagine}" 
          alt="${nume}" 
          style="width:100%;height:135px;object-fit:cover;border-radius:12px;margin-bottom:8px;" 
        />

        <h3 style="font-weight:800;margin-bottom:6px;font-size:16px;">
          ${nume}
        </h3>

        <p style="margin-bottom:4px;">
          <b>${ani}</b>
        </p>

        <p style="margin-bottom:10px;line-height:1.45;">
          ${descriere}
        </p>

        <a 
          href="/biserica" 
          style="background:#111827;color:white;padding:8px 11px;border-radius:9px;text-decoration:none;font-weight:bold;display:inline-block;"
        >
          Vezi necropola
        </a>
      </div>
    `;
  }

  // Stil pentru morminte
  const mormantStyle = {
    color: "#111827",
    weight: 1.2,
    fillColor: "#111827",
    fillOpacity: 0.45,
  };

  return (
    <div style={{ position: "relative" }}>
      <MapContainer
        center={[47.4429, 27.5517]}
        zoom={18}
        zoomControl={false}
        style={{
          height: "70vh",
          minHeight: "420px",
          width: "100%",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
        }}
      >
        <ZoomControl position="topright" />

        {/* Harta satelitară */}
        <TileLayer
          attribution="&copy; Esri, Maxar, Earthstar Geographics"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />

        {/* LIMITA MUZEULUI */}
        {showMuzeu && contGeoJson && (
          <GeoJSON
            data={contGeoJson}
            style={{
              color: "#2563eb",
              weight: 3,
              fillColor: "#60a5fa",
              fillOpacity: 0.13,
            }}
          />
        )}

        {/* MUZEU */}
        {showMuzeu && muzeuGeoJson && (
          <GeoJSON
            data={muzeuGeoJson}
            style={{
              color: "#ef4444",
              weight: 4,
              fillColor: "#ef4444",
              fillOpacity: 0.28,
            }}
          />
        )}

        {/* BISERICĂ */}
        {showBiserica && limitaBisericaGeoJson && (
          <GeoJSON
            data={limitaBisericaGeoJson}
            style={{
              color: "#f59e0b",
              weight: 4,
              fillColor: "#fbbf24",
              fillOpacity: 0.38,
            }}
          />
        )}

        {/* LIMITA ȘCOLII */}
        {showScoala && limitaScoalapGeoJson && (
          <GeoJSON
            data={limitaScoalapGeoJson}
            style={{
              color: "#16a34a",
              weight: 3,
              fillColor: "#86efac",
              fillOpacity: 0.16,
            }}
          />
        )}

        {/* ȘCOALĂ */}
        {showScoala && scoalaGeoJson && (
          <GeoJSON
            data={scoalaGeoJson}
            style={{
              color: "#7c3aed",
              weight: 3,
              fillColor: "#a78bfa",
              fillOpacity: 0.36,
            }}
          />
        )}

        {/* CONAC MIC */}
        {showConacMic && limMagGeoJson && (
          <GeoJSON
            data={limMagGeoJson}
            style={{
              color: "#f97316",
              weight: 4,
              fillColor: "#fb923c",
              fillOpacity: 0.25,
            }}
          />
        )}

        {/* NECROPOLĂ - CONSTANTIN NEGRUZZI */}
        {showMorminte && morcGeoJson && (
          <GeoJSON
            data={morcGeoJson}
            style={mormantStyle}
            pointToLayer={(feature, latlng) =>
              L.marker(latlng, { icon: mormantIcon }).bindPopup(
                popupMormant(
                  "Constantin Negruzzi",
                  "1808–1868",
                  "Scriitor și ctitor al bisericii din Hermeziu.",
                  "/constantin.jpeg"
                )
              )
            }
          />
        )}

        {/* NECROPOLĂ - LEON ȘI ANNA */}
        {showMorminte && morlGeoJson && (
          <GeoJSON
            data={morlGeoJson}
            style={mormantStyle}
            pointToLayer={(feature, latlng) =>
              L.marker(latlng, { icon: mormantIcon }).bindPopup(
                popupMormant(
                  "Leon C. Negruzzi și Anna L. Negruzzi",
                  "1840–1890 • 1849–1929",
                  "Monument funerar al familiei Negruzzi.",
                  "/leon-ana.jpeg"
                )
              )
            }
          />
        )}

        {/* NECROPOLĂ - GHEORGHE NEGRUZZI */}
        {showMorminte && morgGeoJson && (
          <GeoJSON
            data={morgGeoJson}
            style={mormantStyle}
            pointToLayer={(feature, latlng) =>
              L.marker(latlng, { icon: mormantIcon }).bindPopup(
                popupMormant(
                  "Gheorghe C. Negruzzi",
                  "1849–1890",
                  "Fiul scriitorului Constantin Negruzzi.",
                  "/george.jpeg"
                )
              )
            }
          />
        )}

        {/* NECROPOLĂ - ANNA STURZA */}
        {showMorminte && moraGeoJson && (
          <GeoJSON
            data={moraGeoJson}
            style={mormantStyle}
            pointToLayer={(feature, latlng) =>
              L.marker(latlng, { icon: mormantIcon }).bindPopup(
                popupMormant(
                  "Anna Sturza",
                  "1852–1939",
                  "Soția lui Gheorghe C. Negruzzi.",
                  "/ana-s.jpeg"
                )
              )
            }
          />
        )}

        {/* NECROPOLĂ - LEON NEGRUZZI */}
        {showMorminte && morclGeoJson && (
          <GeoJSON
            data={morclGeoJson}
            style={mormantStyle}
            pointToLayer={(feature, latlng) =>
              L.marker(latlng, { icon: mormantIcon }).bindPopup(
                popupMormant(
                  "Leon Negruzzi",
                  "1872–1875",
                  "Nepot al scriitorului Constantin Negruzzi.",
                  "/l.jpeg"
                )
              )
            }
          />
        )}

        {/* NECROPOLĂ - SANDA RACOVITZĂ */}
        {showMorminte && morsGeoJson && (
          <GeoJSON
            data={morsGeoJson}
            style={mormantStyle}
            pointToLayer={(feature, latlng) =>
              L.marker(latlng, { icon: mormantIcon }).bindPopup(
                popupMormant(
                  "Sanda Racovitză",
                  "1912",
                  "Strănepoată a familiei Negruzzi.",
                  "/sanda.jpeg"
                )
              )
            }
          />
        )}

        {/* MARKER MUZEU */}
        {showMuzeu && (
          <Marker position={muzeuPosition} icon={muzeuIcon}>
            <Popup>
              <div style={{ width: "250px" }}>
                <img
                  src="/muzeu.jpeg"
                  alt="Muzeul Constantin Negruzzi"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginBottom: "8px",
                  }}
                />

                <h3
                  style={{
                    fontWeight: "bold",
                    marginBottom: "6px",
                  }}
                >
                  Muzeul „Constantin Negruzzi”
                </h3>

                <p style={{ marginBottom: "10px" }}>
                  Fostul conac al familiei Negruzzi, transformat în muzeu
                  memorial.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
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
                    Detalii
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
                    Tur 3D
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        )}

        {/* MARKER BISERICĂ */}
        {showBiserica && (
          <Marker position={bisericaPosition} icon={bisericaIcon}>
            <Popup>
              <div style={{ width: "240px" }}>
                <img
                  src="/biserica.jpeg"
                  alt="Biserica din Hermeziu"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginBottom: "8px",
                  }}
                />

                <h3
                  style={{
                    fontWeight: "bold",
                    marginBottom: "6px",
                  }}
                >
                  Biserica „Sfinții Împărați Constantin și Elena”
                </h3>

                <p style={{ marginBottom: "10px" }}>
                  Ctitorie a familiei Negruzzi, construită în anul 1839.
                </p>

                <a
                  href="/biserica"
                  style={{
                    background: "#c58a3a",
                    color: "white",
                    padding: "9px 12px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Detalii biserică
                </a>
              </div>
            </Popup>
          </Marker>
        )}

        {/* MARKER ȘCOALĂ */}
        {showScoala && (
          <Marker position={scoalaPosition} icon={scoalaIcon}>
            <Popup>
              <div style={{ width: "250px" }}>
                <img
                  src="/scoala.png"
                  alt="Școala din Hermeziu"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginBottom: "8px",
                  }}
                />

                <h3
                  style={{
                    fontWeight: "bold",
                    marginBottom: "6px",
                  }}
                >
                  Școala din Hermeziu
                </h3>

                <p>
                  Școala din Hermeziu a fost construită în anul 1870 la
                  inițiativa lui Iacob Negruzzi, fiul scriitorului Constantin
                  Negruzzi. În anul 1875, instituția a fost vizitată de poetul
                  Mihai Eminescu, aflat atunci în funcția de revizor școlar.
                </p>
              </div>
            </Popup>
          </Marker>
        )}

        {/* MARKER FOSTĂ PRIMĂRIE */}
        {showPrimarie && (
          <Marker position={primariePosition} icon={primarieIcon}>
            <Popup>
              <div style={{ width: "250px" }}>
                <img
                  src="/primarie.png"
                  alt="Fosta Primărie din Hermeziu"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginBottom: "8px",
                  }}
                />

                <h3
                  style={{
                    fontWeight: "bold",
                    marginBottom: "6px",
                  }}
                >
                  Fosta Primărie
                </h3>

                <p>
                  Clădire care a găzduit în trecut primăria localității. În
                  prezent este utilizată ca școală.
                </p>
              </div>
            </Popup>
          </Marker>
        )}

        {/* MARKER CONAC MIC */}
        {showConacMic && (
          <Marker position={conacmicPosition} icon={conacmicIcon}>
            <Popup>
              <div style={{ width: "250px" }}>
                <img
                  src="/conacmic.jpeg"
                  alt="Conacul mic al familiei Negruzzi"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginBottom: "8px",
                  }}
                />

                <h3
                  style={{
                    fontWeight: "bold",
                    marginBottom: "6px",
                  }}
                >
                  Conacul mic al familiei Negruzzi
                </h3>

                <p>
                  Conacul mic a fost construit de generalul Mihai Negruzzi și
                  făcea parte din ansamblul domeniului familiei Negruzzi de la
                  Hermeziu. Clădirea era folosită în special de membrii mai
                  tineri ai familiei. În prezent, aici funcționează un magazin
                  alimentar.
                </p>
              </div>
            </Popup>
          </Marker>
        )}

        {/* FILTRE */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            top: "18px",
            left: "18px",
            zIndex: 1000,
            background: "rgba(255,255,255,0.95)",
            padding: "12px 14px",
            borderRadius: "14px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            fontSize: "14px",
            lineHeight: "1.8",
            color: "#1f2937",
          }}
        >
          <strong>Filtre</strong>
          <br />

          <label>
            <input
              type="checkbox"
              checked={showMuzeu}
              onChange={() => setShowMuzeu(!showMuzeu)}
            />{" "}
            🏛️ Muzeu
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              checked={showBiserica}
              onChange={() => setShowBiserica(!showBiserica)}
            />{" "}
            ⛪ Biserică
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              checked={showScoala}
              onChange={() => setShowScoala(!showScoala)}
            />{" "}
            🏫 Școală
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              checked={showPrimarie}
              onChange={() => setShowPrimarie(!showPrimarie)}
            />{" "}
            🏤 Primărie
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              checked={showConacMic}
              onChange={() => setShowConacMic(!showConacMic)}
            />{" "}
            🏡 Conac mic
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              checked={showMorminte}
              onChange={() => setShowMorminte(!showMorminte)}
            />{" "}
            🪦 Necropolă
          </label>
        </div>

        {/* LEGENDĂ */}
        <div
          className="block"
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            zIndex: 1000,
            background: "rgba(255,255,255,0.94)",
            padding: "10px",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.30)",
            fontSize: "12px",
            lineHeight: "1.6",
            maxWidth: "140px",
            color: "#1f2937",
          }}
        >
          <strong style={{ fontSize: "16px" }}>Legendă</strong>
          <br />

          🏛️ Muzeul „Constantin Negruzzi”
          <br />

          ⛪ Biserica „Sfinții Împărați Constantin și Elena”
          <br />

          🏫 Școala din Hermeziu (1870)
          <br />

          🏤 Fosta Primărie
          <br />

          🏡 Conacul mic al familiei Negruzzi
          <br />

          🪦 Necropola familiei Negruzzi
        </div>
      </MapContainer>
    </div>
  );
}