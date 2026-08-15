"use client";

import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Stele() {
  const [nota, setNota] = useState(0);
  const [media, setMedia] = useState(0);
  const [numar, setNumar] = useState(0);

  const incarcaEvaluari = async () => {
    const snapshot = await getDocs(collection(db, "evaluari"));

    let total = 0;

    snapshot.forEach((doc) => {
      total += Number(doc.data().nota);
    });

    setNumar(snapshot.size);
    setMedia(snapshot.size ? total / snapshot.size : 0);
  };

  useEffect(() => {
    incarcaEvaluari();
  }, []);

  const voteaza = async (stele: number) => {
    setNota(stele);

    await addDoc(collection(db, "evaluari"), {
      nota: stele,
    });

    incarcaEvaluari();
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-semibold">
        Spune-ne părerea ta
      </h2>

      <p className="my-4">
        Cum ți s-a părut prezentarea patrimoniului din satul Hermeziu?
      </p>

      <div className="text-4xl">
        {[1, 2, 3, 4, 5].map((stea) => (
          <button
            key={stea}
            onClick={() => voteaza(stea)}
            className={stea <= nota ? "text-yellow-500" : "text-gray-300"}
          >
            ★
          </button>
        ))}
      </div>

      {nota > 0 && (
        <p className="mt-4">
          Ai acordat <strong>{nota} din 5 stele</strong>. Mulțumim!
        </p>
      )}

      <div className="mt-6">
        <p>Evaluarea vizitatorilor</p>

        <p className="text-2xl font-semibold">
          {media > 0 ? `${media.toFixed(1)} / 5 ⭐` : "— / 5 ⭐"}
        </p>

        <p>
          {numar === 0
            ? "Nicio evaluare încă"
            : `Bazat pe ${numar} evaluări`}
        </p>
      </div>
    </div>
  );
}