export default function BisericaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7f2] to-[#f1e6d6] text-[#2f1d14]">
      <section className="max-w-7xl mx-auto px-8 py-8">
        <a href="/" className="text-[#7a4a22] font-bold hover:underline">
          ← Înapoi la pagina principală
        </a>

        <div className="mt-8 rounded-[34px] overflow-hidden shadow-2xl bg-[#4a2f1f]">
          <img
            src="/biserica.jpeg"
            alt="Biserica familiei Negruzzi din Hermeziu"
            className="w-full h-[430px] object-cover opacity-90"
          />

          <div className="bg-gradient-to-r from-[#3d2619] to-[#6b4a32] p-10 text-center text-white">
            <p className="uppercase tracking-[0.35em] text-sm text-[#d9b46f] mb-4">
              Patrimoniu religios • Hermeziu
            </p>

            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Biserica familiei Negruzzi
            </h1>

            <div className="w-32 h-1 bg-[#c58a3a] rounded-full mx-auto mb-6" />

            <p className="max-w-4xl mx-auto text-xl text-[#fff7ec]">
              Biserica din Hermeziu reprezintă unul dintre cele mai importante
              obiective de patrimoniu legate de familia Negruzzi.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#fffdf8] rounded-[30px] shadow-xl p-8 border border-[#d9c5a1]">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Istoria bisericii
          </h2>

          <p className="text-lg leading-relaxed mb-4">
            Biserica familiei Negruzzi a fost construită în anul 1839,
            în anul căsătoriei lui Costache Negruzzi cu Maria Gane.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Lăcașul de cult are o valoare istorică și memorială importantă,
            deoarece este strâns legat de familia Negruzzi și de vechea moșie
            de la Hermeziu.
          </p>

          <p className="text-lg leading-relaxed">
            În curtea bisericii se află morminte ale membrilor familiei,
            inclusiv locul unde a fost înmormântat Costache Negruzzi,
            conform dorinței sale.
          </p>
        </div>

        <div className="bg-[#4a2f1f] text-white rounded-[30px] shadow-xl p-8">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Informații rapide
          </h2>

          <p className="mb-3">
            <strong>Localitate:</strong> Hermeziu, Iași
          </p>

          <p className="mb-3">
            <strong>An construcție:</strong> 1839
          </p>

          <p className="mb-3">
            <strong>Tip:</strong> patrimoniu religios
          </p>

          <p className="mb-6">
            <strong>Legătură:</strong> familia Negruzzi
          </p>

          <a
            href="/familie"
            className="block text-center bg-[#c58a3a] text-white px-6 py-4 rounded-2xl font-bold hover:bg-[#a56b35]"
          >
            Vezi familia Negruzzi →
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10">
        <div className="bg-[#fffdf8] rounded-[30px] shadow-xl p-8 border border-[#d9c5a1]">
          <h2 className="text-4xl font-serif font-bold mb-8">
            Importanța în aplicația WebGIS
          </h2>

          <p className="text-xl leading-relaxed">
            Biserica este integrată în aplicația WebGIS ca obiectiv cultural
            și religios, fiind localizată pe hartă și inclusă în traseul
            turistic al patrimoniului familiei Negruzzi din Hermeziu.
          </p>
        </div>
      </section>
    </main>
  );
}