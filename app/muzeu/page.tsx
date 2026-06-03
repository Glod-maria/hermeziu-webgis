export default function MuzeuPage() {
  const timeline = [
    ["1807", "Dinu Negruți primește moșia de la Hermeziu."],
    ["1968", "Este amenajat primul spațiu muzeal în fostul conac."],
    ["1995", "Muzeul este inaugurat oficial și dedicat familiei Negruzzi."],
    ["2026", "Muzeul este integrat în aplicația WebGIS interactivă."],
  ];

  const obiecte = [
    {
      titlu: "Flautul lui Iacob Negruzzi",
      imagine: "/flaut.jpeg",
      text: "Instrument muzical care a aparținut lui Iacob Negruzzi și amintește de preocupările culturale și artistice ale familiei.",
    },
    {
      titlu: "Punguță pentru galbeni",
      imagine: "/punguta.jpeg",
      text: "Punguță brodată cu mărgele și fir auriu, folosită pentru păstrarea galbenilor. A aparținut lui Leon C. Negruzzi, fiul lui Constantin Negruzzi.",
    },
    {
      titlu: "Pipa de chihlimbar",
      imagine: "/pipa.jpeg",
      text: "Pipă care a aparținut lui Constantin Negruzzi și care se numără printre obiectele autentice păstrate în muzeu.",
    },
    {
      titlu: "Ceasornic de soare",
      imagine: "/ceas.jpeg",
      text: "Piesă autentică ce a aparținut lui Constantin Negruzzi. Pe cadran este inscripționat mesajul „Umbra mea arată orele cu care trec”.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7f2] to-[#f1e6d6] text-[#2f1d14]">
      <section className="max-w-7xl mx-auto px-8 py-8">
        <a href="/" className="text-[#7a4a22] font-bold hover:underline">
          ← Înapoi la hartă
        </a>

        <div className="mt-8 rounded-[34px] overflow-hidden shadow-2xl bg-[#4a2f1f]">
          <img
            src="/muzeu.jpeg"
            alt="Muzeul Constantin Negruzzi"
            className="w-full h-[430px] object-cover opacity-90"
          />

          <div className="bg-gradient-to-r from-[#3d2619] to-[#6b4a32] p-10 text-center text-white">
            <p className="uppercase tracking-[0.35em] text-sm text-[#d9b46f] mb-4">
              Patrimoniu cultural • Hermeziu
            </p>

            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Muzeul „Constantin Negruzzi”
            </h1>

            <div className="w-32 h-1 bg-[#c58a3a] rounded-full mx-auto mb-6" />

            <p className="max-w-4xl mx-auto text-xl text-[#fff7ec]">
              Fostul conac al familiei Negruzzi, transformat într-un spațiu
              dedicat memoriei, literaturii și istoriei culturale românești.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#fffdf8] rounded-[30px] shadow-xl p-8 border border-[#d9c5a1]">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Istoria muzeului
          </h2>

          <p className="text-lg leading-relaxed mb-4">
            Muzeul „Constantin Negruzzi” este amenajat în fostul conac al
            familiei Negruzzi din Hermeziu, pe vechea moșie primită de Dinu
            Negruți în anul 1807.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            După instaurarea regimului comunist, conacul a fost confiscat și
            folosit în mai multe scopuri, printre care sediu al unei gospodării
            agricole colective, depozit de cartofi, clocitoare și grădiniță.
          </p>

          <p className="text-lg leading-relaxed">
            În anul 1968 a fost amenajat primul spațiu muzeal, iar între anii
            1993–1995 conacul a fost restaurat. La 7 octombrie 1995 a fost
            inaugurat muzeul dedicat memoriei familiei Negruzzi.
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
            <strong>Coordonate:</strong> 47.442261, 27.550625
          </p>
          <p className="mb-6">
            <strong>Tip:</strong> muzeu memorial
          </p>

          <a
            href="https://captur3d.io/view/mnlri/muzeul-constantin-negruzzi"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#c58a3a] text-white px-6 py-4 rounded-2xl font-bold hover:bg-[#a56b35]"
          >
            🏛️ Explorează turul 3D
          </a>

          <a
            href="/familie"
            className="block text-center mt-4 bg-[#fff7ec] text-[#4a2f1f] px-6 py-4 rounded-2xl font-bold hover:bg-[#f1e6d6]"
          >
            👨‍👩‍👧 Vezi familia Negruzzi
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10">
        <div className="bg-[#fffdf8] rounded-[30px] shadow-xl p-8 border border-[#d9c5a1]">
          <h2 className="text-4xl font-serif font-bold mb-8">
            Timeline istoric
          </h2>

          <div className="grid md:grid-cols-4 gap-5">
            {timeline.map(([year, text]) => (
              <div
                key={year}
                className="bg-[#faf7f2] rounded-2xl p-6 border-l-8 border-[#c58a3a] shadow"
              >
                <p className="text-4xl font-bold text-[#8b5a2b] mb-3">
                  {year}
                </p>
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10">
        <div className="bg-[#fffdf8] rounded-[30px] shadow-xl border border-[#d9c5a1] p-10 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#8b5a2b] mb-4">
            Arbore genealogic
          </p>

          <h2 className="text-5xl font-serif font-bold mb-5">
            Familia Negruzzi
          </h2>

          <p className="text-xl max-w-3xl mx-auto mb-8">
            Descoperă istoria familiei Negruzzi, de la Dinu Negruți și
            Constantin Negruzzi până la Ella Negruzzi, Mihai Negruzzi și Leon
            Bob Negruzzi.
          </p>

          <a
            href="/familie"
            className="inline-block bg-[#4a2f1f] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#6b4a32]"
          >
            👨‍👩‍👧 Explorează familia Negruzzi
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10">
        <div className="bg-[#f7f0e4] rounded-[40px] shadow-2xl border border-[#d9c5a1] p-8 md:p-12">
          <p className="uppercase tracking-[0.3em] text-sm text-[#8b5a2b] mb-4 text-center">
            Colecția muzeului
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Comori ale familiei Negruzzi
          </h2>

          <p className="text-center text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
            Puține obiecte autentice au supraviețuit distrugerilor și
            degradărilor suferite de conac în perioada comunistă. Cele păstrate
            astăzi reprezintă mărturii valoroase ale vieții și activității
            familiei Negruzzi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {obiecte.map((obiect) => (
              <div
                key={obiect.titlu}
                className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-[#d9c5a1] group hover:-translate-y-2 transition duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={obiect.imagine}
                    alt={obiect.titlu}
                    className="w-full h-[300px] md:h-[430px] object-contain transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-5 left-5 bg-[#4a2f1f] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Obiect de patrimoniu
                  </div>
                </div>

                <div className="p-7 md:p-8">
                  <h3 className="text-3xl font-serif font-bold text-[#4a2f1f] mb-4">
                    {obiect.titlu}
                  </h3>

                  <div className="w-20 h-1 bg-[#c58a3a] rounded-full mb-5" />

                  <p className="text-lg leading-relaxed text-[#3d3128]">
                    {obiect.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#fffdf8] rounded-3xl p-6 border-l-8 border-[#c58a3a] shadow">
            <p className="text-lg leading-relaxed">
              Aceste obiecte reprezintă doar o parte din patrimoniul muzeului.
              Vizitatorii pot descoperi și alte piese, documente, fotografii,
              mobilier și obiecte personale care păstrează memoria familiei
              Negruzzi.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10">
        <div className="bg-[#fffdf8] rounded-3xl shadow-xl border border-[#d9c5a1] p-8">
          <h2 className="text-4xl font-serif font-bold mb-3">
            Galerie foto
          </h2>

          <div className="w-32 h-1 bg-[#c58a3a] rounded-full mb-8" />

          <div className="flex gap-5 overflow-x-auto pb-4">
            <img src="/bust.jpeg" className="h-80 rounded-3xl shadow-lg" alt="Bust" />
            <img src="/trasura.jpeg" className="h-80 rounded-3xl shadow-lg" alt="Trăsură" />
            <img src="/poarta-mica.jpeg" className="h-80 rounded-3xl shadow-lg" alt="Poartă mică" />
            <img src="/poarta-mare.jpeg" className="h-80 rounded-3xl shadow-lg" alt="Poartă mare" />
            <img src="/vizitatori.jpeg" className="h-80 rounded-3xl shadow-lg" alt="Vizitatori" />
            <img src="/vizitat.jpeg" className="h-80 rounded-3xl shadow-lg" alt="Muzeu vizitat" />
            <img src="/cop.jpeg" className="h-80 rounded-3xl shadow-lg" alt="Copil" />
            <img src="/copii.jpeg" className="h-80 rounded-3xl shadow-lg" alt="Copii" />
            <img src="/buni.jpeg" className="h-80 rounded-3xl shadow-lg" alt="Bunici" />
            <img src="/prezentatoarea.jpeg" className="h-80 rounded-3xl shadow-lg" alt="Prezentatoare" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10 pb-20">
        <div className="bg-gradient-to-r from-[#3d2619] to-[#6b4a32] text-white rounded-[30px] shadow-xl p-8">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Integrare GIS și WebGIS
          </h2>

          <p className="text-xl leading-relaxed">
            Muzeul este integrat prin localizare GPS, contur vectorizat în QGIS,
            fișiere GeoJSON, galerie foto și tur virtual 3D. Această abordare
            transformă patrimoniul cultural de la Hermeziu într-o experiență
            digitală interactivă.
          </p>
        </div>
      </section>
    </main>
  );
}