"use client";

import { useState } from "react";

const membri = [
  {
    id: "dinu",
    nume: "Dinu Negruți",
    perioada: "începutul familiei la Hermeziu",
    text: "Dinu Negruți, tatăl lui Costache Negruzzi, provenea dintr-o familie de răzeși din zona Odobeștilor. În anul 1807 s-a căsătorit cu Sofia Hermeziu și a primit ca zestre moșia Trifești-Vechi, actualul Hermeziu.",
  },
  {
    id: "costache",
    nume: "Costache Negruzzi",
    perioada: "1808–1868",
    imagine: "/costache-negruzzi.png",
    text: "Costache Negruzzi s-a născut în 1808, la Hermeziu. A fost scriitor, om politic și unul dintre întemeietorii prozei moderne românești. A construit biserica familiei în anul căsătoriei sale, 1839.",
    copii: "A fost căsătorit cu Maria Gane și au avut cinci copii: Iacob, Leon, Gheorghe, Eliza și Nicolae. Nicolae nu apare în arborele genealogic deoarece a murit de mic, răpus de holeră.",
  },
  {
    id: "iacob",
    nume: "Iacob Negruzzi",
    perioada: "1842–1932",
    imagine: "/iacob-negruzzi.png",
    text: "Iacob Negruzzi a fost fiul lui Costache Negruzzi. A fost profesor de drept, membru fondator al societății Junimea și conducător al revistei „Convorbiri literare”. În anul 1870 a construit școala din satul Hermeziu.",
    copii: "A fost căsătorit cu Anna Rosetti și nu au avut descendenți.",
  },
  {
    id: "gheorghe",
    nume: "Gheorghe Negruzzi",
    perioada: "1849–1880",
    text: "Gheorghe Negruzzi a fost fiul lui Costache Negruzzi. Și-a luat doctoratul în drept la Berlin, a profesat avocatura, fiind apreciat ca jurist. A fost membru al societății Junimea de la înființarea ei, dar nu a activat ca scriitor. A murit de tânăr și este îngropat în curtea bisericii din sat.",
    copii: "A fost căsătorit cu Anna Sturdza și au avut un singur copil: Margareta Negruzzi.",
  },
  {
    id: "margareta",
    nume: "Margareta Negruzzi",
    perioada: "secolul XIX",
    text: "Margareta Negruzzi a fost fiica lui Gheorghe Negruzzi și a Annei Sturdza.",
  },
  {
    id: "leon",
    nume: "Leon C. Negruzzi",
    perioada: "1840–1890",
    imagine: "/leon-negruzzi.png",
    text: "Leon C. Negruzzi, fiul lui Costache Negruzzi, a fost jurist, scriitor, membru al Junimii și primar al municipiului Iași între anii 1883–1886.",
    copii: "A fost căsătorit cu Anna Botezat și au avut șapte copii: Constantin, Suzana, Natalia, Anna, Maria, Mihai și Ella.",
  },
  {
    id: "eliza",
    nume: "Eliza Negruzzi",
    perioada: "secolul XIX",
    text: "Eliza Negruzzi a fost fiica lui Costache Negruzzi.",
    copii: "S-a căsătorit cu Dumitru Mavrocordat.",
  },
  {
    id: "nicolae",
    nume: "Nicolae Negruzzi",
    perioada: "copilărie",
    text: "Nicolae Negruzzi a fost fiul lui Costache Negruzzi și al Mariei Gane. A murit de mic, răpus de holeră.",
  },
  {
    id: "ella",
    nume: "Ella Negruzzi",
    perioada: "1876–1949",
    imagine: "/ela-negruzzi.jpeg",
    text: "Ella Negruzzi, fiica lui Leon C. Negruzzi, s-a născut la Hermeziu. A fost prima femeie avocat din România și o importantă militantă pentru drepturile femeilor.",
    copii: "A fost căsătorită cu George Beldiman, de care a divorțat, nelăsând urmași.",
  },
  {
    id: "mihai",
    nume: "Mihai Negruzzi",
    perioada: "1873–1958",
    imagine: "/mihai-negruzzi.jpeg",
    text: "Mihai Negruzzi, fiul lui Leon C. Negruzzi, a avut o carieră militară și politică importantă. A fost primar al Iașului între anii 1920–1921 și a colaborat cu revista „Convorbiri literare”.",
    copii: "A fost căsătorit cu Lucia Miclescu și au avut trei copii: Leon Bob, Suzana și Maria-Marta.",
  },
  {
    id: "leon-bob",
    nume: "Leon Bob Negruzzi",
    perioada: "1900–1987",
    imagine: "/leon-bob-negruzzi.png",
    text: "Leon Bob Negruzzi, fiul lui Mihai Negruzzi, a studiat Dreptul și s-a stabilit la Paris. A publicat volume de călătorii, romane și poezii și a tradus în franceză opere din literatura română.",
    copii: "A fost căsătorit de două ori: prima dată cu Aileen Frank, iar ulterior cu Marjorie Devanport, ambele de origine americană.",
  },
  {
    id: "suzana",
    nume: "Suzana Negruzzi",
    perioada: "secolul XX",
    imagine: "/13.jpeg",
    text: "Suzana Negruzzi a fost fiica generalului Mihai Negruzzi și a Luciei Miclescu.",
    copii: "A fost căsătorită cu Petre Grant și au avut o fiică: Irina Fotiade.",
  },
  {
    id: "irina",
    nume: "Irina Fotiade",
    perioada: "secolul XX",
    copii: "A fost căsătorită cu Dr. Bradu Fotiade și au avut un fiu: Matei Fotiade.",
  },
  {
    id: "marta",
    nume: "Maria-Marta Negruzzi",
    perioada: "1903-1986",
 imagine: "/12.png",
    text: "Maria-Marta Negruzzi a fost fiica generalului Mihai Negruzzi și a Luciei Miclescu.",
    copii: "A fost căsătorită cu Eduard Konya și au avut o fiică: Dana Konya Petrișor.",
  },
  {
    id: "dana",
    nume: "Dana Konya Petrișor",
    perioada: "1937-2021",
 imagine: "/11.png",
    copii: "A fost căsătorită cu Marcel Petrișor.",
  },
];

const galerie = [
  {
    titlu: "Iacob Negruzzi la Hermeziu",
    imagine: "/1.jpeg",
    descriere:
      "Iacob Negruzzi pe treptele conacului familiei Negruzzi din Hermeziu.",
  },
  {
    titlu: "Anna Negruzzi",
    imagine: "/2.jpeg",
    descriere: "Anna Negruzzi, soția lui Leon C. Negruzzi.",
  },
  {
    titlu: "Mihai și Lucia Negruzzi",
    imagine: "/3.jpeg",
    descriere:
      "Generalul Mihai Negruzzi alături de soția sa, Lucia Miclescu.",
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
    descriere: "Ella Negruzzi și soțul său, George Beldiman.",
  },
  {
    titlu: "Masă la Hermeziu, septembrie 1909",
    imagine: "/6.jpeg",
    descriere:
      "Membri ai familiei Negruzzi reuniți în grădina conacului de la Hermeziu, în septembrie 1909.",
  },
  {
    titlu: "Anna Negruzzi alături de copiii săi",
    imagine: "/9.jpeg",
    descriere:
      "Anna Negruzzi împreună cu copiii săi, așezați pe un leagăn din lemn în curtea de la Hermeziu.",
  },
  {
    titlu: "Botezul Danei Ilinca Lucia",
    imagine: "/7.jpeg",
    descriere:
      "De la stânga la dreapta: Ella Negruzzi, actrița Marioara Voiculescu și Mihai Negruzzi la botezul Danei Ilinca Lucia, fiica Martei Negruzzi și a lui Eduard Konya.",
  },
  {
    titlu: "Inaugurarea primului muzeu Negruzzi (1986)",
    imagine: "/8.png",
    descriere:
      "Fotografie realizată cu ocazia inaugurării primului muzeu dedicat familiei Negruzzi, amenajat în anul 1986 în vechea casă a familiei. De la stânga la dreapta apar Leon Bob Negruzzi, Martha Konya și Dana Konya Petrișor, descendenți ai generalului Mihai Negruzzi.",
  },
];

export default function FamiliePage() {
  const [selectat, setSelectat] = useState("costache");

  const mergiLaMembru = (id: string) => {
    setSelectat(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const CardArbore = ({
    id,
    nume,
    mic,
  }: {
    id: string;
    nume: string;
    mic?: string;
  }) => (
    <button
      onClick={() => mergiLaMembru(id)}
      className={`px-5 py-4 rounded-2xl shadow-lg border-2 min-w-[190px] transition hover:scale-105 ${
        selectat === id
          ? "bg-[#4a2f1f] text-white border-[#4a2f1f]"
          : "bg-white text-[#3b2418] border-[#caa66a] hover:bg-[#f6ead9]"
      }`}
    >
      <p className="font-bold">{nume}</p>
      {mic && <p className="text-sm mt-1">{mic}</p>}
    </button>
  );

  const CardInfo = ({ titlu, text }: { titlu: string; text: string }) => (
    <div className="bg-[#f6ead9] border-2 border-[#caa66a] rounded-2xl px-5 py-4 min-w-[190px] text-center shadow-md">
      <p className="font-bold">{titlu}</p>
      <p className="text-sm mt-1">{text}</p>
    </div>
  );

  const LinieV = () => <div className="w-[3px] h-8 bg-[#b08968]" />;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7f2] to-[#f1e6d6] text-[#2f1d14]">
      <section className="max-w-7xl mx-auto px-8 py-10">
        <a href="/muzeu" className="text-[#7a4a22] font-bold hover:underline">
          ← Înapoi la pagina muzeului
        </a>

        <div className="text-center mt-10 mb-14">
          <p className="uppercase tracking-[0.35em] text-[#9a6328] mb-4">
            Arbore genealogic povestit
          </p>

          <h1 className="text-6xl font-serif font-bold mb-5">
            Familia Negruzzi
          </h1>

          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Secțiune cronologică dedicată membrilor familiei Negruzzi și
            legăturii lor cu satul Hermeziu, fostul Trifeștii Vechi.
          </p>
        </div>

        <section className="bg-[#fffdf8] rounded-[30px] shadow-xl border border-[#d9c5a1] p-8 mb-12">
          <h2 className="text-4xl font-serif font-bold text-center mb-3">
            Arbore genealogic interactiv
          </h2>

          <p className="text-center text-lg mb-8">
            Apasă pe un nume pentru a vedea detaliile persoanei în cronologia de
            mai jos.
          </p>

          <div className="overflow-x-auto pb-6">
            <div className="min-w-[1200px] flex flex-col items-center">
              <CardArbore id="dinu" nume="Dinu Negruți" mic="Sofia Hermeziu" />
              <LinieV />

              <CardArbore
                id="costache"
                nume="Costache Negruzzi"
                mic="Maria Gane"
              />
              <LinieV />

              <div className="w-[1000px] h-[3px] bg-[#b08968]" />

              <div className="grid grid-cols-5 gap-6 mt-5">
                <div className="flex flex-col items-center">
                  <LinieV />
                  <CardArbore
                    id="iacob"
                    nume="Iacob Negruzzi"
                    mic="Anna Rosetti"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <LinieV />
                  <CardArbore
                    id="leon"
                    nume="Leon C. Negruzzi"
                    mic="Anna Botezat"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <LinieV />
                  <CardArbore
                    id="gheorghe"
                    nume="Gheorghe Negruzzi"
                    mic="Anna Sturdza"
                  />
                  <LinieV />
                  <CardArbore
                    id="margareta"
                    nume="Margareta Negruzzi"
                    mic="fiica lui Gheorghe"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <LinieV />
                  <CardArbore
                    id="eliza"
                    nume="Eliza Negruzzi"
                    mic="Dumitru Mavrocordat"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <LinieV />
                  <CardArbore id="nicolae" nume="Nicolae Negruzzi" mic="† copil" />
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center">
                <p className="font-bold text-[#7a4a22] mb-3">
                  Descendenți ai lui Leon C. Negruzzi
                </p>

                <div className="w-[460px] h-[3px] bg-[#b08968]" />

                <div className="grid grid-cols-2 gap-6 mt-5">
                  <CardArbore
                    id="mihai"
                    nume="Mihai Negruzzi"
                    mic="Lucia Miclescu"
                  />
                  <CardArbore
                    id="ella"
                    nume="Ella Negruzzi"
                    mic="George Beldiman"
                  />
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center">
                <p className="font-bold text-[#7a4a22] mb-3">
                  Descendenți ai lui Mihai Negruzzi
                </p>

                <div className="w-[700px] h-[3px] bg-[#b08968]" />

                <div className="grid grid-cols-3 gap-8 mt-5">
                  <CardArbore
                    id="leon-bob"
                    nume="Leon Bob Negruzzi"
                    mic="Aileen Frank / Marjorie Devanport"
                  />

                  <div className="flex flex-col items-center">
                    <CardArbore
                      id="suzana"
                      nume="Suzana Negruzzi"
                      mic="Petre Grant"
                    />
                    <LinieV />
                    <CardArbore 
                      id="irina" 
                      nume="Irina Fotiade" 
                      mic="Dr. Bradu Fotiade"
                     />
                  </div>

                  <div className="flex flex-col items-center">
                    <CardArbore
                      id="marta"
                      nume="Maria-Marta Negruzzi"
                      mic="Eduard Konya"
                    />
                    <LinieV />
                    <CardArbore
                      id="dana"
                      nume="Dana Konya Petrișor"
                      mic="Marcel Petrișor"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-8">
          {membri.map((membru, index) => (
            <div
              id={membru.id}
              key={membru.nume}
              className={`bg-[#fffdf8] rounded-[30px] shadow-xl border overflow-hidden transition scroll-mt-20 ${
                selectat === membru.id
                  ? "border-[#7a4a22] ring-4 ring-[#c58a3a]/40"
                  : "border-[#d9c5a1]"
              } ${membru.imagine ? "grid md:grid-cols-[280px_1fr]" : ""}`}
            >
              {membru.imagine && (
                <div className="relative bg-[#f8f3ec]">
                  <img
                    src={membru.imagine}
                    alt={membru.nume}
                    className="w-full h-full min-h-[280px] object-contain p-3"
                  />

                  <div className="absolute top-4 left-4 bg-[#4a2f1f] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
              )}

              <div className="p-8 relative">
                {!membru.imagine && (
                  <div className="absolute top-6 right-6 bg-[#4a2f1f] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                )}

                <p className="text-[#9a6328] font-bold mb-2 pr-16">
                  {membru.perioada}
                </p>

                <h2 className="text-4xl font-serif font-bold mb-4 pr-16">
                  {membru.nume}
                </h2>

                <p className="text-lg leading-relaxed mb-4">{membru.text}</p>

                {membru.copii && (
                  <div className="bg-[#f6ead9] border-l-8 border-[#c58a3a] rounded-2xl p-5 mt-5">
                    <p className="text-lg leading-relaxed">
                      <strong>Descendenți:</strong> {membru.copii}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16">
          <div className="bg-[#fffdf8] rounded-[30px] shadow-xl p-8 border border-[#d9c5a1]">
            <h2 className="text-4xl font-serif font-bold mb-3">
              Galerie istorică a familiei Negruzzi
            </h2>

            <p className="text-lg mb-8">
              Fotografii de epocă, portrete și imagini reprezentative care
              ilustrează istoria familiei Negruzzi și contribuția acesteia la
              patrimoniul cultural al satului Hermeziu.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {galerie.map((foto) => (
                <div
                  key={foto.imagine}
                  className="relative group rounded-3xl shadow-lg bg-[#f8f3ec] p-3"
                >
                  <img
                    src={foto.imagine}
                    className="w-full h-[350px] object-contain"
                    alt={foto.titlu}
                  />

                  <h3 className="text-center font-bold text-lg mt-3">
                    {foto.titlu}
                  </h3>

                  <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-6 rounded-3xl">
                    <p className="text-white text-center text-lg">
                      {foto.descriere}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}