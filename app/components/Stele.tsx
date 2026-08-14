"use client";

import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Stele() {
  const [nota, setNota] = useState(0);
  const [media, setMedia] = useState(0);
  const [numar, setNumar] = useState(0);

  const incarcaEvaluari = async () => {
    try {
      const snapshot = await getDocs(collection(db, "evaluari"));

      let total = 0;

      snapshot.forEach((doc) => {
        const date = doc.data();
        total += Number(date.nota);
      });

      setNumar(snapshot.size);

      if (snapshot.size > 0) {
        setMedia(total / snapshot.size);
      } else {
        setMedia(0);
      }
    } catch (error) {
      console.error("Eroare la încărcarea evaluărilor:", error);
    }
  };

  useEffect(() => {
    incarcaEvaluari();
  }, []);

  const voteaza = async (stele: number) => {
    try {
      setNota(stele);

      await addDoc(collection(db, "evaluari"), {
        nota: stele,
      });

      await incarcaEvaluari();
    } catch (error) {
      console.error("Eroare la salvarea evaluării:", error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "50px auto",
        padding: "35px",
        textAlign: "center",
        background: "#fffdf8",
        border: "1px solid #e5d5b5",
        borderRadius: "20px",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* TITLU */}
      <div
        style={{
          fontSize: "30px",
          marginBottom: "8px",
        }}
      >
        ⭐
      </div>

      <h2
        style={{
          margin: "0 0 10px",
          fontSize: "25px",
          fontWeight: "600",
          color: "#3d3d3d",
        }}
      >
        Spune-ne părerea ta
      </h2>

      <p
        style={{
          margin: "0 auto 25px",
          maxWidth: "430px",
          color: "#666",
          fontSize: "16px",
          lineHeight: "1.5",
        }}
      >
        Cum ți s-a părut prezentarea patrimoniului din satul Hermeziu?
      </p>

      {/* STELE */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #eee3ce",
          borderRadius: "15px",
          padding: "15px 10px",
        }}
      >
        {[1, 2, 3, 4, 5].map((stea) => (
          <button
            key={stea}
            onClick={() => voteaza(stea)}
            aria-label={`Acordă ${stea} stele`}
            style={{
              fontSize: "42px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              padding: "2px 5px",
              color: stea <= nota ? "#e5a900" : "#d5d5d5",
              transition: "transform 0.2s",
            }}
          >
            ★
          </button>
        ))}
      </div>

      {/* MESAJ DUPĂ VOT */}
      {nota > 0 && (
        <div
          style={{
            marginTop: "18px",
            padding: "12px",
            background: "#faf7ef",
            borderRadius: "10px",
            color: "#555",
            fontSize: "15px",
          }}
        >
          Ai acordat{" "}
          <strong>{nota} din 5 stele</strong>. Mulțumim!
        </div>
      )}

      {/* MEDIA TUTUROR EVALUĂRILOR */}
      <div
        style={{
          marginTop: "28px",
          paddingTop: "22px",
          borderTop: "1px solid #e8dfce",
        }}
      >
        <p
          style={{
            margin: "0 0 5px",
            color: "#777",
            fontSize: "14px",
          }}
        >
          Evaluarea vizitatorilor
        </p>

        <div
          style={{
            fontSize: "28px",
            fontWeight: "600",
            color: "#555",
          }}
        >
          {media > 0 ? `${media.toFixed(1)} / 5 ⭐` : "— / 5 ⭐"}
        </div>

        <p
          style={{
            margin: "5px 0 0",
            color: "#888",
            fontSize: "14px",
          }}
        >
          {numar === 0
            ? "Nicio evaluare încă"
            : `Bazat pe ${numar} ${
                numar === 1 ? "evaluare" : "evaluări"
              }`}
        </p>
      </div>
    </div>
  );
}