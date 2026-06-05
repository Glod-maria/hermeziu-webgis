import MapSection from "./MapSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7f2] to-[#f1e6d6] text-[#2f1d14]">
      <section className="max-w-7xl mx-auto px-8 py-8">
        <nav className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="text-2xl font-serif font-bold">
            Hermeziu WebGIS
          </h2>

          <div className="flex gap-3 flex-wrap">
            <a
              href="/muzeu"
              className="bg-[#8b5a2b] text-white px-5 py-3 rounded-2xl font-bold hover:bg-[#a56b35]"
            >
              🏛️ Muzeu
            </a>

            <a
              href="/biserica"
              className="bg-[#c58a3a] text-white px-5 py-3 rounded-2xl font-bold hover:bg-[#a56b35]"
            >
              ⛪ Biserică
            </a>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#8b5a2b] mb-4">
              Patrimoniu cultural interactiv
            </p>

            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Descoperă patrimoniul familiei Negruzzi
            </h1>

            <p className="text-xl leading-relaxed mb-8">
              Explorează conacul, biserica, istoria familiei, fotografiile,
              elementele GIS vectorizate și turul virtual al domeniului de la
              Hermeziu printr-o aplicație WebGIS interactivă.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#harta"
                className="bg-[#4a2f1f] text-white px-7 py-4 rounded-2xl font-bold hover:bg-[#6b4a32]"
              >
                Explorează patrimoniul
              </a>

              <a
                href="/muzeu"
                className="border-2 border-[#8b5a2b] text-[#8b5a2b] px-7 py-4 rounded-2xl font-bold hover:bg-[#fffdf8]"
              >
                🏛️ Pagina muzeului
              </a>

              <a
                href="/biserica"
                className="bg-[#c58a3a] text-white px-7 py-4 rounded-2xl font-bold hover:bg-[#a56b35]"
              >
                ⛪ Pagina bisericii
              </a>
            </div>
          </div>

          <div className="rounded-[34px] overflow-hidden shadow-2xl border border-[#d9c5a1]">
            <img
              src="/muzeu.jpeg"
              alt="Muzeul Constantin Negruzzi"
              className="w-full h-[430px] object-cover"
            />
          </div>
        </div>
      </section>


      <section id="harta" className="max-w-7xl mx-auto px-8 py-10">
        <div className="bg-[#fffdf8] rounded-[34px] shadow-2xl border border-[#d9c5a1] p-6">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-serif font-bold">
                Harta interactivă
              </h2>

              <p className="text-lg text-[#5d4a3a]">
                Localizarea muzeului, bisericii, limitei vectorizate a
                proprietății și elementelor de patrimoniu integrate prin
                GeoJSON.
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href="/muzeu"
                className="bg-[#8b5a2b] text-white px-5 py-3 rounded-2xl font-bold hover:bg-[#a56b35]"
              >
                Detalii muzeu
              </a>

              <a
                href="/biserica"
                className="bg-[#c58a3a] text-white px-5 py-3 rounded-2xl font-bold hover:bg-[#a56b35]"
              >
                Detalii biserică
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <MapSection />
          </div>
        </div>
      </section>

      <footer className="bg-[#4a2f1f] text-white mt-16">
        <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between flex-wrap gap-4">
<p>
  Aplicație WebGIS realizată de <strong>Glod Adina-Elena</strong>,
  în cadrul lucrării de disertație pentru programul de master
  <strong> Geomatică și Cartografie</strong>,
  Facultatea de Hidrotehnică, Geodezie și Ingineria Mediului,
  Universitatea Tehnică „Gheorghe Asachi” din Iași.
</p>

          <p className="text-[#d9b46f]">
            Next.js • Leaflet • QGIS • GeoJSON
          </p>
        </div>
      </footer>
    </main>
  );
}