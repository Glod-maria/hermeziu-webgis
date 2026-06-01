const membri = [
  {
    nume: "Dinu Negruți",
    perioada: "începutul familiei la Hermeziu",
    text: "Dinu Negruți, tatăl lui Costache Negruzzi, provenea dintr-o familie de răzeși din zona Odobeștilor. În anul 1807 s-a căsătorit cu Sofia Hermeziu și a primit ca zestre moșia Trifești-Vechi, actualul Hermeziu.",
  },
  {
    nume: "Costache Negruzzi",
    perioada: "1808–1868",
    imagine: "/costache-negruzzi.png",
    text: "Costache Negruzzi s-a născut în 1808, la Hermeziu. A fost scriitor, om politic și unul dintre întemeietorii prozei moderne românești. A construit biserica familiei în anul căsătoriei sale, 1839.",
    copii: "A fost căsătorit cu Maria Gane și au avut cinci copii: Iacob, Leon, Gheorghe, Eliza și Nicolae. Nicolae nu apare în arborele genealogic deoarece a murit de mic, răpus de holeră.",
  },
  {
    nume: "Iacob Negruzzi",
    perioada: "1842–1932",
    imagine: "/iacob-negruzzi.png",
    text: "Iacob Negruzzi a fost fiul lui Costache Negruzzi. A fost profesor de drept, membru fondator al societății Junimea și conducător al revistei „Convorbiri literare”. În anul 1870 a construit școala din satul Hermeziu.",
    copii: "A fost căsătorit cu Anna Rosetti și nu au avut descendenți.",
  },
  {
    nume: "Gheorghe Negruzzi",
    perioada: "1849–1880",
    text: "Gheorghe Negruzzi a fost fiul lui Costache Negruzzi. Și-a luat doctoratul în drept la Berlin, a profesat avocatura, fiind apreciat ca jurist. A fost membru al societății Junimea de la înființarea ei, dar nu a activat ca scriitor. A murit de tânăr și este îngropat în curtea bisericii din sat.",
    copii: "A fost căsătorit cu Anna Sturdza și au avut un singur copil: Margareta Negruzzi.",
  },
  {
    nume: "Leon C. Negruzzi",
    perioada: "1840–1890",
    imagine: "/leon-negruzzi.png",
    text: "Leon C. Negruzzi, fiul lui Costache Negruzzi, a fost jurist, scriitor, membru al Junimii și primar al municipiului Iași între anii 1883–1886.",
    copii: "A fost căsătorit cu Anna Botezat și au avut șapte copii: Constantin, Suzana, Natalia, Anna, Maria, Mihai și Ella.",
  },
  {
    nume: "Ella Negruzzi",
    perioada: "1876–1949",
    imagine: "/ela-negruzzi.jpeg",
    text: "Ella Negruzzi, fiica lui Leon C. Negruzzi, s-a născut la Hermeziu. A fost prima femeie avocat din România și o importantă militantă pentru drepturile femeilor.",
    copii: "A fost căsătorită cu George Beldiman, de care a divorțat, nelăsând urmași.",
  },
  {
    nume: "Mihai Negruzzi",
    perioada: "1873–1958",
    imagine: "/mihai-negruzzi.jpeg",
    text: "Mihai Negruzzi, fiul lui Leon C. Negruzzi, a avut o carieră militară și politică importantă. A fost primar al Iașului între anii 1920–1921 și a colaborat cu revista „Convorbiri literare”.",
    copii: "A fost căsătorit cu Lucia Miclescu și au avut trei copii: Leon Bob, Suzana și Maria-Marta.",
  },
  {
    nume: "Leon Bob Negruzzi",
    perioada: "1900–1987",
    imagine: "/leon-bob-negruzzi.png",
    text: "Leon Bob Negruzzi, fiul lui Mihai Negruzzi, a studiat Dreptul și s-a stabilit la Paris. A publicat volume de călătorii, romane și poezii și a tradus în franceză opere din literatura română.",
    copii: "A fost căsătorit de două ori: prima dată cu Aileen Frank, iar ulterior cu Marjorie Devanport, ambele de origine americană.",
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

        <div className="space-y-8">
          {membri.map((membru, index) => (
            <div
              key={membru.nume}
              className={`bg-[#fffdf8] rounded-[30px] shadow-xl border border-[#d9c5a1] overflow-hidden ${
                membru.imagine ? "grid md:grid-cols-[280px_1fr]" : ""
              }`}
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

                <p className="text-lg leading-relaxed mb-4">
                  {membru.text}
                </p>

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