"use client";

import { useState } from "react";

const membri = [
  {
    id: "dinu",
    nume: "Dinu Negruț",
    perioada: "începutul familiei la Hermeziu",
    text: "Dinu Negruț, tatăl lui Constantin Negruzzi, provenea dintr-o familie de răzeși din zona Odobeștilor. În anul 1807 s-a căsătorit cu Sofia Hermeziu și a primit ca zestre moșia Trifeștii-Vechi, actualul Hermeziu.",
  },
  {
    id: "constantin",
    nume: "Constantin Negruzzi",
    perioada: "1808–1868",
    imagine: "/costache-negruzzi.png",
    text: "Constantin Negruzzi s-a născut în 1808, la Hermeziu. A fost scriitor, om politic și unul dintre întemeietorii prozei moderne românești. A construit biserica familiei în anul căsătoriei sale, 1839.",
    copii:
      "A fost căsătorit cu Maria Gane și au avut patru copii: Iacob, Leon, Gheorghe și Eliza.",
  },
  {
    id: "iacob",
    nume: "Iacob Negruzzi",
    perioada: "1842–1932",
    imagine: "/iacob-negruzzi.png",
    text: "Iacob Negruzzi a fost fiul lui Constantin Negruzzi. A fost profesor de drept, membru fondator al societății Junimea și conducător al revistei „Convorbiri literare”. În anul 1870 a construit școala din satul Hermeziu.",
    copii: "A fost căsătorit cu Anna Rosetti și nu au avut descendenți.",
  },
  {
    id: "leon",
    nume: "Leon C. Negruzzi",
    perioada: "1840–1890",
    imagine: "/leon-negruzzi.png",
    text: "Leon C. Negruzzi, fiul lui Constantin Negruzzi, a fost jurist, scriitor, membru al Junimii și primar al municipiului Iași între anii 1883–1886.",
    copii:
      "A fost căsătorit cu Anna Botezat și au avut șapte copii: Constantin, Suzana, Natalia, Anna, Maria, Mihai și Ella.",
  },
  {
    id: "gheorghe",
    nume: "Gheorghe Negruzzi",
    perioada: "1849–1880",
    text: "Gheorghe Negruzzi a fost fiul lui Constantin Negruzzi. Și-a luat doctoratul în drept la Berlin, a profesat avocatura și a fost apreciat ca jurist. A fost membru al societății Junimea. A murit de tânăr și este îngropat în curtea bisericii din sat.",
    copii: "A fost căsătorit cu Anna Sturdza.",
  },
  {
    id: "eliza",
    nume: "Eliza Negruzzi",
    perioada: "secolul XIX",
    text: "Eliza Negruzzi a fost fiica lui Constantin Negruzzi.",
    copii: "S-a căsătorit cu Dumitru Mavrocordat.",
  },
  {
    id: "mihai",
    nume: "Mihai Negruzzi",
    perioada: "1873–1958",
    imagine: "/mihai-negruzzi.jpeg",
    text: "Mihai Negruzzi, fiul lui Leon C. Negruzzi, a avut o carieră militară și politică importantă. A fost primar al Iașului între anii 1920–1921 și a colaborat cu revista „Convorbiri literare”.",
    copii:
      "A fost căsătorit cu Lucia Miclescu și au avut trei copii: Leon Bob, Suzana și Maria-Marta.",
  },
  {
    id: "ella",
    nume: "Ella Negruzzi",
    perioada: "1876–1949",
    imagine: "/ela-negruzzi.jpeg",
    text: "Ella Negruzzi, fiica lui Leon C. Negruzzi, s-a născut la Hermeziu. A fost prima femeie avocat din România și o importantă militantă pentru drepturile femeilor.",
    copii:
      "A fost căsătorită cu George Beldiman, de care a divorțat, nelăsând urmași.",
  },
  {
    id: "leon-bob",
    nume: "Leon Bob Negruzzi",
    perioada: "1900–1987",
    imagine: "/leon-bob-negruzzi.png",
    text: "Leon Bob Negruzzi, fiul lui Mihai Negruzzi, a studiat Dreptul și s-a stabilit la Paris. A publicat volume de călătorii, romane și poezii și a tradus în franceză opere din literatura română.",
    copii:
      "A fost căsătorit de două ori: cu Aileen Frank și ulterior cu Marjorie Devanport.",
  },
  {
    id: "suzana",
    nume: "Suzana Negruzzi",
    perioada: "secolul XX",
    imagine: "/13.jpeg",
    text: "Suzana Negruzzi a fost fiica generalului Mihai Negruzzi și a Luciei Miclescu.",
    copii:
      "A fost căsătorită cu Petre Grant și au avut o fiică: Irina Fotiade.",
  },
  {
    id: "irina",
    nume: "Irina Fotiade",
    perioada: "1927–2006",
    text: "Irina Fotiade a fost fiica Suzanei Negruzzi și a lui Petre Grant.",
    copii:
      "A fost căsătorită cu Dr. Bradu Fotiade și au avut un fiu: Matei Fotiade.",
  },
  {
    id: "marta",
    nume: "Maria-Marta Negruzzi",
    perioada: "1903–1986",
    imagine: "/12.png",
    text: "Maria-Marta Negruzzi a fost fiica generalului Mihai Negruzzi și a Luciei Miclescu.",
    copii:
      "A fost căsătorită cu Eduard Konya și au avut o fiică: Dana Konya Petrișor.",
  },
  {
    id: "dana",
    nume: "Dana Konya Petrișor",
    perioada: "1937–2021",
    imagine: "/dana.png",
    text: "Dana Konya Petrișor a fost fiica Mariei-Marta Negruzzi și a lui Eduard Konya.",
    copii: "A fost căsătorită cu Marcel Petrișor.",
  },
];

const galerie = [
  {
    titlu: "Maria Negruzzi",
    imagine: "/gane.jpeg",
    descriere:
      "Maria Negruzzi (1820–1900) a fost soția lui Constantin Negruzzi. Cei doi s-au căsătorit la 6 iulie 1839 și au avut patru copii: Iacob, Leon, Gheorghe și Eliza.",
  },
  {
    titlu: "Iacob Negruzzi la Hermeziu",
    imagine: "/1.jpeg",
    descriere:
      "Iacob Negruzzi pe treptele conacului familiei Negruzzi din Hermeziu.",
  },
  {
    titlu: "Anna Negruzzi, soția lui Leon C. Negruzzi",
    imagine: "/2.jpeg",
  },
  {
    titlu: "Anna Negruzzi, soția lui Gheorghe C. Negruzzi",
    imagine: "/sturza.jpeg",
  },
  {
    titlu: "Mihai și Lucia Negruzzi",
    imagine: "/3.jpeg",
    descriere:
      "Generalul Mihai Negruzzi alături de soția sa, Lucia Miclescu.",
  },
  {
    titlu: "Leon, Mihai și Iacob Negruzzi",
    imagine: "/fiu.jpeg",
  },
  {
    titlu: "Mihai Negruzzi cu nepoții",
    imagine: "/4.jpeg",
    descriere:
      "Mihai Negruzzi împreună cu nepoții săi în fața conacului de la Hermeziu.",
  },
  {
    titlu: "Ella Negruzzi și George Beldiman",
    imagine: "/5.jpeg",
    descriere:
      "Ella Negruzzi și soțul său, George Beldiman.",
  },
  {
    titlu: "Masă la Hermeziu, septembrie 1909",
    imagine: "/6.jpeg",
    descriere:
      "Membri ai familiei Negruzzi reuniți în grădina conacului de la Hermeziu.",
  },
  {
    titlu: "Anna Negruzzi alături de copiii săi",
    imagine: "/9.jpeg",
    descriere:
      "Anna Negruzzi împreună cu copiii săi în curtea de la Hermeziu.",
  },
  {
    titlu: "Botezul Danei Ilinca Lucia",
    imagine: "/7.jpeg",
    descriere:
      "Ella Negruzzi, Marioara Voiculescu și Mihai Negruzzi la botezul Danei Ilinca Lucia.",
  },
  {
    titlu: "Inaugurarea primului muzeu Negruzzi",
    imagine: "/8.png",
    descriere:
      "Fotografie realizată la inaugurarea primului muzeu dedicat familiei Negruzzi, în anul 1986.",
  },
];

export default function FamiliePage() {
  const [selectat, setSelectat] = useState("constantin");

  const mergiLaMembru = (id: string) => {
    setSelectat(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const CardArbore = ({
    id,
    nume,
    partener,
  }: {
    id: string;
    nume: string;
    partener?: string;
  }) => (
    <button
      onClick={() => mergiLaMembru(id)}
className="px-5 py-4 rounded-2xl border-2 border-[#caa66a] shadow-lg min-w-[190px] bg-white text-[#3b2418] hover:bg-[#f6ead9] transition"
    >
      <p className="font-bold">{nume}</p>
      {partener && <p className="text-sm mt-1">{partener}</p>}
    </button>
  );

  const LinieV = () => (
    <div className="w-[3px] h-8 bg-[#b08968]" />
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7f2] to-[#f1e6d6] text-[#2f1d14]">
      <section className="max-w-7xl mx-auto px-8 py-10">

        <a
          href="/muzeu"
          className="text-[#7a4a22] font-bold hover:underline"
        >
          ← Înapoi la pagina muzeului
        </a>

        {/* ARBORE */}
        <section className="bg-[#fffdf8] rounded-[30px] shadow-xl border border-[#d9c5a1] p-8 mt-6">
          <h2 className="text-4xl font-serif font-bold text-center">
            Arbore genealogic interactiv
          </h2>

          <p className="text-center text-lg mt-3 mb-8">
            Apasă pe un nume pentru a vedea informațiile despre persoană.
          </p>

          <div className="overflow-x-auto">
            <div className="min-w-[1100px] flex flex-col items-center">

              <CardArbore
                id="dinu"
                nume="Dinu Negruț"
                partener="Sofia Hermeziu"
              />

              <LinieV />

              <CardArbore
                id="constantin"
                nume="Constantin Negruzzi"
                partener="Maria Gane"
              />

              <LinieV />

              <div className="w-[850px] h-[3px] bg-[#b08968]" />

              <div className="grid grid-cols-4 gap-6 mt-5">

                <div className="flex flex-col items-center">
                  <LinieV />
                  <CardArbore
                    id="iacob"
                    nume="Iacob Negruzzi"
                    partener="Anna Rosetti"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <LinieV />
                  <CardArbore
                    id="leon"
                    nume="Leon C. Negruzzi"
                    partener="Anna Botezat"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <LinieV />
                  <CardArbore
                    id="gheorghe"
                    nume="Gheorghe Negruzzi"
                    partener="Anna Sturdza"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <LinieV />
                  <CardArbore
                    id="eliza"
                    nume="Eliza Negruzzi"
                    partener="Dumitru Mavrocordat"
                  />
                </div>

              </div>

              <h3 className="font-bold text-[#7a4a22] mt-10 mb-3">
                Descendenții lui Leon C. Negruzzi
              </h3>

              <div className="w-[460px] h-[3px] bg-[#b08968]" />

              <div className="grid grid-cols-2 gap-6 mt-5">

                <CardArbore
                  id="mihai"
                  nume="Mihai Negruzzi"
                  partener="Lucia Miclescu"
                />

                <CardArbore
                  id="ella"
                  nume="Ella Negruzzi"
                  partener="George Beldiman"
                />

              </div>

              <h3 className="font-bold text-[#7a4a22] mt-10 mb-3">
                Descendenții lui Mihai Negruzzi
              </h3>

              <div className="w-[700px] h-[3px] bg-[#b08968]" />

              <div className="grid grid-cols-3 gap-8 mt-5">

                <CardArbore
                  id="leon-bob"
                  nume="Leon Bob Negruzzi"
                  partener="Aileen Frank / Marjorie Devanport"
                />

                <div className="flex flex-col items-center">
                  <CardArbore
                    id="suzana"
                    nume="Suzana Negruzzi"
                    partener="Petre Grant"
                  />
                  <LinieV />
                  <CardArbore
                    id="irina"
                    nume="Irina Fotiade"
                    partener="Dr. Bradu Fotiade"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <CardArbore
                    id="marta"
                    nume="Maria-Marta Negruzzi"
                    partener="Eduard Konya"
                  />
                  <LinieV />
                  <CardArbore
                    id="dana"
                    nume="Dana Konya Petrișor"
                    partener="Marcel Petrișor"
                  />
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* MEMBRII FAMILIEI */}
        <section className="space-y-8 mt-12">

          {membri.map((membru) => (
            <article
              id={membru.id}
              key={membru.id}
              className={`bg-[#fffdf8] rounded-[30px] shadow-xl border overflow-hidden ${
                selectat === membru.id
                  ? "border-[#7a4a22] ring-4 ring-[#c58a3a]/40"
                  : "border-[#d9c5a1]"
              } ${membru.imagine ? "grid md:grid-cols-[280px_1fr]" : ""}`}
            >

              {membru.imagine && (
                <div className="bg-[#f8f3ec]">
                  <img
                    src={membru.imagine}
                    alt={membru.nume}
                    className="w-full h-full min-h-[280px] object-contain p-3"
                  />
                </div>
              )}

              <div className="p-8">

                <p className="text-[#9a6328] font-bold mb-2">
                  {membru.perioada}
                </p>

                <h2 className="text-4xl font-serif font-bold mb-4">
                  {membru.nume}
                </h2>

                <p className="text-lg leading-relaxed">
                  {membru.text}
                </p>

                {membru.copii && (
                  <div className="bg-[#f6ead9] border-l-8 border-[#c58a3a] rounded-2xl p-5 mt-5">
                    <strong>Descendenți:</strong> {membru.copii}
                  </div>
                )}

              </div>
            </article>
          ))}

        </section>

       <section className="mt-16">
  <div className="bg-[#fffdf8] rounded-[30px] shadow-xl p-8 border border-[#d9c5a1]">

    <h2 className="text-4xl font-serif font-bold mb-3 text-center">
      Galerie istorică a familiei Negruzzi
    </h2>

    <p className="text-lg mb-8">
      Fotografii de epocă, portrete și imagini reprezentative ale familiei
      Negruzzi și ale patrimoniului cultural din Hermeziu.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      {galerie.map((foto) => (
        <div
          key={foto.imagine}
          className="relative group rounded-3xl shadow-lg bg-[#f8f3ec] p-3 overflow-hidden"
        >

          {/* Fotografia */}
          <img
            src={foto.imagine}
            alt={foto.titlu}
            className="w-full h-[350px] object-contain"
          />

          {/* Titlul */}
          <h3 className="text-center font-bold text-lg mt-3">
            {foto.titlu}
          </h3>

          {/* Descrierea care apare la hover */}
          {foto.descriere && (
            <div
              className="
                absolute inset-0
                bg-black/75
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
                flex items-center justify-center
                p-6
                rounded-3xl
              "
            >
              <p className="text-white text-center text-lg">
                {foto.descriere}
              </p>
            </div>
          )}

        </div>
      ))}

    </div>
  </div>
</section>

      </section>
    </main>
  );
}