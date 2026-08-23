"use client";

import dynamic from "next/dynamic";

const Harta = dynamic(() => import("./MapSection"), {
  ssr: false,
});

export default function MapHermeziu() {
  return <Harta />;
}