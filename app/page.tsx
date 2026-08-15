import MapSection from "./MapSection";
import Stele from "./components/Stele";

export default function Acasa() { 
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7f2] to-[#f1e6d6] text-[#2f1d14]">
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Descoperă patrimoniul familiei Negruzzi
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Explorează conacul, biserica, istoria familiei, fotografiile,
              elementele GIS vectorizate și turul virtual al domeniului de la
              Hermeziu printr-o aplicație WebGIS interactivă.
            </p>

            <div className="flex gap-3 md:gap-4 w-full">
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

          <div className="h-full rounded-[28px] md:rounded-[34px] overflow-hidden shadow-2xl border border-[#d9c5a1]">
            <img
              src="/muzeu.jpeg"
              alt="Muzeul Constantin Negruzzi"
              className="w-full h-full min-h-[430px] object-cover"
            />
          </div>
        </div>
      </section>

  <section className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
  <div className="bg-[#fffdf8] rounded-[26px] md:rounded-[34px] shadow-xl border border-[#d9c5a1] p-6 md:p-8">
    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-[#4a2f1f] text-center">
      De la Trifeștii-Vechi la Hermeziu
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="bg-[#f6efe6] rounded-3xl p-5 border border-[#d9c5a1]">
       <h3 className="text-2xl font-serif font-bold mt-2 mb-3 text-center">
          Denumirea veche
        </h3>
        <p className="text-[#5d4a3a] leading-relaxed">
          Satul Hermeziu a fost cunoscut inițial sub numele de
          <strong> Trifeștii-Vechi</strong>, denumire păstrată înainte
          de asocierea localității cu familia Negruzzi.
        </p>
      </div>

      <div className="bg-[#f6efe6] rounded-3xl p-5 border border-[#d9c5a1]">
        <h3 className="text-2xl font-serif font-bold mt-2 mb-3 text-center">
          Secolul al XIX-lea
        </h3>
        <p className="text-[#5d4a3a] leading-relaxed">
          Dinu Negruț s-a căsătorit cu
          <strong> Sofia Hermeziu</strong>, mama scriitorului
          <strong> Constantin Negruzzi</strong>. După moartea timpurie
          a acesteia, satul a primit numele
          <strong> Hermeziu</strong> în memoria ei.
        </p>
      </div>

      <div className="bg-[#f6efe6] rounded-3xl p-5 border border-[#d9c5a1]">
       <h3 className="text-2xl font-serif font-bold mt-2 mb-3 text-center">
          Secolul al XX-lea
        </h3>
        <p className="text-[#5d4a3a] leading-relaxed">
          În <strong>1969</strong>, localitatea avea denumirea de
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

       <section
        id="harta"
        className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10"
      >

        <div className="bg-[#fffdf8] rounded-[26px] md:rounded-[34px] shadow-2xl border border-[#d9c5a1] p-4 md:p-6">

          <div className="mb-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Harta interactivă
            </h2>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <MapSection />
          </div>

        </div>
      </section>

      <Stele />

      <footer className="bg-[#4a2f1f] text-white mt-12 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <p className="text-sm md:text-base leading-relaxed">
            Aplicație WebGIS realizată de <strong>Glod Adina-Elena</strong>,
            în cadrul lucrării de disertație pentru programul de master
            <strong> Geomatică și Cartografie</strong>, Facultatea de
            Hidrotehnică, Geodezie și Ingineria Mediului, Universitatea Tehnică
            „Gheorghe Asachi” din Iași.
          </p>

        </div>
      </footer>
    </main>
  );
}