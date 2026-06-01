"use client";

import dynamic from "next/dynamic";

const MapHermeziu = dynamic(() => import("./MapHermeziu"), {
  ssr: false,
});

export default function MapSection() {
  return <MapHermeziu />;
}