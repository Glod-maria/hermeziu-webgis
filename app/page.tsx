import MapSection from "./MapSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7f2] to-[#f1e6d6] text-[#2f1d14]">
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
        <nav className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="text-2xl font-serif font-bold">
            Hermeziu WebGIS
          </h2>

          <div className="flex gap-3 flex-wrap">
            <a href="/muzeu" className="bg-[#8b5a2b] text-white px-4 md:px-5 py-3 rounded-2xl font-bold hover:bg-[#a56b35]">
              🏛️ Muzeu
            </a>

            <a href="/biserica" className="bg-[#c58a3a] text-white px-4 md:px-5 py-3 rounded-2xl font-bold hover:bg-[#a56b35]">
              ⛪ Biserică
            </a>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm text-[#8b5a2b] mb-4">
              Patrimoniu cultural interactiv
            </p>

            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Descoperă patrimoniul familiei Negruzzi
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Explorează conacul, biserica, istoria familiei, fotografiile,
              elementele GIS vectorizate și turul virtual al domeniului de la
              Hermeziu printr-o aplicație WebGIS interactivă.
            </p>

            <div className="flex gap-3 md:gap-4 flex-wrap">
              <a href="#harta" className="bg-[#4a2f1f] text-white px-5 md:px-7 py-3 md:py-4 rounded-2xl font-bold hover:bg-[#6b4a32]">
                Explorează patrimoniul
              </a>

              <a href="/muzeu" className="border-2 border-[#8b5a2b] text-[#8b5a2b] px-5 md:px-7 py-3 md:py-4 rounded-2xl font-bold hover:bg-[#fffdf8]">
                🏛️ Pagina muzeului
              </a>

              <a href="/biserica" className="bg-[#c58a3a] text-white px-5 md:px-7 py-3 md:py-4 rounded-2xl font-bold hover:bg-[#a56b35]">
                ⛪ Pagina bisericii
              </a>
            </div>
          </div>

          <div className="rounded-[28px] md:rounded-[34px] overflow-hidden shadow-2xl border border-[#d9c5a1]">
            <img
              src="/muzeu.jpeg"
              alt="Muzeul Constantin Negruzzi"
              className="w-full h-[260px] md:h-[430px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="bg-[#fffdf8] rounded-[26px] md:rounded-[34px] shadow-xl border border-[#d9c5a1] p-6 md:p-8">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-[#8b5a2b] mb-3">
            Istoria denumirii
          </p>

          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-[#4a2f1f]">
            De la Trifeștii-Vechi la Hermeziu
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#f6efe6] rounded-3xl p-5 border border-[#d9c5a1]">
              <span className="text-sm font-bold text-[#8b5a2b]">
                Denumirea veche
              </span>

              <h3 className="text-2xl font-serif font-bold mt-2 mb-3">
                Trifeștii-Vechi
              </h3>

              <p className="text-[#5d4a3a] leading-relaxed">
                Satul Hermeziu a fost cunoscut inițial sub numele de
                <strong> Trifeștii-Vechi</strong>, denumire păstrată înainte
                de asocierea localității cu familia Negruzzi.
              </p>
            </div>

            <div className="bg-[#f6efe6] rounded-3xl p-5 border border-[#d9c5a1]">
              <span className="text-sm font-bold text-[#8b5a2b]">
                Familia Negruzzi
              </span>

              <h3 className="text-2xl font-serif font-bold mt-2 mb-3">
                Sofia Hermeziu
              </h3>

              <p className="text-[#5d4a3a] leading-relaxed">
                Dinu Negruzzi s-a căsătorit cu
                <strong> Sofia Hermeziu</strong>, mama scriitorului
                <strong> Constantin Negruzzi</strong>. După moartea timpurie a
                acesteia, satul a primit numele <strong>Hermeziu</strong> în
                memoria ei.
              </p>
            </div>

            <div className="bg-[#f6efe6] rounded-3xl p-5 border border-[#d9c5a1]">
              <span className="text-sm font-bold text-[#8b5a2b]">
                Secolul XX
              </span>

              <h3 className="text-2xl font-serif font-bold mt-2 mb-3">
                Lunca Prut și revenirea
              </h3>

              <p className="text-[#5d4a3a] leading-relaxed">
                În <strong>1969</strong>, localitatea a fost redenumită
                <strong> Lunca Prut</strong>, datorită amplasării în lunca
                râului Prut. În <strong>1996</strong>, satul a revenit la
                denumirea istorică de <strong>Hermeziu</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
<section className="max-w-7xl mx-auto px-4 md:px-8 py-6">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="bg-[#fffdf8] rounded-3xl p-6 shadow-xl border border-[#d9c5a1] text-center">
      <p className="text-5xl mb-3">🏛️</p>
      <p className="text-3xl font-bold text-[#8b5a2b]">1995</p>
      <p>Muzeul „Constantin Negruzzi”</p>
    </div>

    <div className="bg-[#fffdf8] rounded-3xl p-6 shadow-xl border border-[#d9c5a1] text-center">
      <p className="text-5xl mb-3">⛪</p>
      <p className="text-3xl font-bold text-[#8b5a2b]">1839</p>
      <p>Biserică cu hramul Sfinții „Constantin și Elena”</p>
    </div>

    <div className="bg-[#fffdf8] rounded-3xl p-6 shadow-xl border border-[#d9c5a1] text-center">
      <p className="text-5xl mb-3">🏫</p>
      <p className="text-3xl font-bold text-[#8b5a2b]">1870</p>
      <p>Școala construită de Iacob Negruzzi</p>
    </div>

    <div className="bg-[#fffdf8] rounded-3xl p-6 shadow-xl border border-[#d9c5a1] text-center">
      <p className="text-5xl mb-3">🪦</p>
      <p className="text-3xl font-bold text-[#8b5a2b]">6</p>
      <p>Monumente funerare</p>
    </div>

  </div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
  <div className="bg-[#fffdf8] rounded-[34px] shadow-xl border border-[#d9c5a1] p-6 md:p-8">

    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">
      Patrimoniul de la Hermeziu
    </h2>

    <div className="overflow-x-auto">
      <div className="flex gap-6 w-max">

        <img
          src="/muzeu.jpeg"
          className="w-[500px] h-[350px] object-cover rounded-[30px] shadow-xl"
        />

        <img
          src="/biserica.jpeg"
          className="w-[500px] h-[350px] object-cover rounded-[30px] shadow-xl"
        />

        <img
          src="/scoala.png"
          className="w-[500px] h-[350px] object-cover rounded-[30px] shadow-xl"
        />

        <img
          src="/cruce.jpeg"
          className="w-[500px] h-[350px] object-cover rounded-[30px] shadow-xl"
        />

      </div>
    </div>

  </div>
</section>

      <section id="harta" className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10">
        <div className="bg-[#fffdf8] rounded-[26px] md:rounded-[34px] shadow-2xl border border-[#d9c5a1] p-4 md:p-6">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Harta interactivă
              </h2>

              <p className="text-base md:text-lg text-[#5d4a3a]">
                Localizarea muzeului, bisericii, limitei vectorizate a
                proprietății și elementelor de patrimoniu integrate prin
                GeoJSON.
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a href="/muzeu" className="bg-[#8b5a2b] text-white px-4 md:px-5 py-3 rounded-2xl font-bold hover:bg-[#a56b35]">
                Detalii muzeu
              </a>

              <a href="/biserica" className="bg-[#c58a3a] text-white px-4 md:px-5 py-3 rounded-2xl font-bold hover:bg-[#a56b35]">
                Detalii biserică
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <MapSection />
          </div>
        </div>
      </section>

      <footer className="bg-[#4a2f1f] text-white mt-12 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex justify-between flex-wrap gap-4">
          <p className="text-sm md:text-base leading-relaxed">
            Aplicație WebGIS realizată de <strong>Glod Adina-Elena</strong>,
            în cadrul lucrării de disertație pentru programul de master
            <strong> Geomatică și Cartografie</strong>, Facultatea de
            Hidrotehnică, Geodezie și Ingineria Mediului, Universitatea Tehnică
            „Gheorghe Asachi” din Iași.
          </p>

          <p className="text-[#d9b46f] text-sm md:text-base">
            Next.js • Leaflet • QGIS • GeoJSON
          </p>
        </div>
      </footer>
    </main>
  );
}