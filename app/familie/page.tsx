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
    copii: "A avut cinci copii: Iacob, Leon, Gheorghe, Eliza și Nicolae. Nicolae nu apare în arborele genealogic deoarece a murit de mic, răpus de holeră.",
  },
  {
    nume: "Iacob Negruzzi",
    perioada: "1842–1932",
    imagine: "/iacob-negruzzi.png",
    text: "Iacob Negruzzi a fost fiul lui Costache Negruzzi. A fost profesor de drept, membru fondator al societății Junimea și conducător al revistei „Convorbiri literare”. În anul 1870 a construit școala din satul Hermeziu.",
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
  },
  {
    nume: "Mihai Negruzzi",
    perioada: "1873–1958",
    imagine: "/mihai-negruzzi.jpeg",
    text: "Mihai Negruzzi, fiul lui Leon C. Negruzzi, a avut o carieră militară și politică importantă. A fost primar al Iașului între anii 1920–1921 și a colaborat cu revista „Convorbiri literare”.",
    copii: "S-a căsătorit cu Lucia Miclescu și au avut trei copii: Leon Bob, Suzana și Maria-Marta.",
  },
  {
    nume: "Leon Bob Negruzzi",
    perioada: "1900–1987",
    imagine: "/leon-bob-negruzzi.png",
    text: "Leon Bob Negruzzi, fiul lui Mihai Negruzzi, a studiat Dreptul și s-a stabilit la Paris. A publicat volume de călătorii, romane și poezii și a tradus în franceză opere din literatura română.",
  },
];

export default function FamiliePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7f2] to-[#f1e6d6] text-[#2f1d14]">
      <section className="max-w-7xl mx-auto px-8 py-10">
        <a href="/" className="text-[#7a4a22] font-bold hover:underline">
          ← Înapoi la pagina principală
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
                <div className="relative">
                  <img
                    src={membru.imagine}
                    alt={membru.nume}
                    className="w-full h-full min-h-[280px] object-cover"
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
      </section>
    </main>
  );
}