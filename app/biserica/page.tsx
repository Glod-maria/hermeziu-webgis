export default function BisericaPage() {
  const info = [
    ["Localitate", "Hermeziu, Iași"],
    ["An construcție", "1839"],
    ["Ctitor", "Constantin Negruzzi"],
    ["Hram", "Sfinții Împărați Constantin și Elena"],
    ["Cod LMI", "IS-II-m-B-04193.01"],
    ["Tip", "Patrimoniu religios"],
  ];

  const necropola = [
    {
      src: "/constantin.jpeg",
      title: "Constantin Negruzzi",
      ani: "1808–1868",
      text: `Eu nu am fost ca alții
de-aceea-n suferință,
Am petrecut și-n lipsa
plăcerilor lumești,
Dar cugetul îmi spune
că n-om avea căință,
C-am fost și eu unealtă
la rele omenești.

Soția și fiii recunoscători,
septembrie 1868.`,
    },
    {
      src: "/leon-ana.jpeg",
      title: "Leon C. Negruzzi și Anna L. Negruzzi",
      ani: "1840–1890 • 1849–1929",
      text: `În a dumnezeirii carte
E scris că omul se desparte,
De tot ce-i e mai drag pe lume,
Dar Sfânta Carte spune anume
Că despărțirea nu-i pe vecie,
Că revedere o să mai fie!

Nu-ți spun adio...
La revedere!
La revedere în alte sfere!`,
    },
    {
      src: "/george.jpeg",
      title: "Gheorghe C. Negruzzi",
      ani: "29 decembrie 1849 – 22 august 1890",
      text: `Fiul scriitorului
Constantin Negruzzi.

Înhumat în necropola
familiei Negruzzi
de la Hermeziu.`,
    },
    {
      src: "/ana-s.jpeg",
      title: "Anna Sturza",
      ani: "1852–1939",
      text: `Soția lui Gheorghe
C. Negruzzi.

Monument funerar aflat
în necropola familiei
Negruzzi.`,
    },
    {
      src: "/l.jpeg",
      title: "Leon Negruzzi",
      ani: "13 octombrie 1872 – 14 februarie 1875",
      text: `Domnul vru un îngeraș,
Ne luă un copilaș,
Iar durerea noastră grea
Domnul nu vru să o ia.`,
    },
    {
      src: "/sanda.jpeg",
      title: "Sanda Racovitză",
      ani: "25 aprilie 1912 – 25 august 1912",
      text: `Abia născută de opt luni,
Eram frumoasă ca o floare,
M-am dus după ai mei străbuni
În lumea unde-i numai soare.`,
    },
  ];

  const galerie = [
    {
      src: "/hero-biserica.jpeg",
      alt: "Poarta de intrare spre biserica din Hermeziu",
    },
    {
      src: "/biserica.jpeg",
      alt: "Biserica Sfinții Împărați Constantin și Elena din Hermeziu",
    },
    {
      src: "/interior-biserica.jpeg",
      alt: "Interiorul bisericii din Hermeziu",
    },
    {
      src: "/morminte.jpeg",
      alt: "Vedere asupra necropolei familiei Negruzzi",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6efe4] text-[#2f1d14]">
<section className="max-w-7xl mx-auto px-6 md:px-8 py-12">
  <div className="grid lg:grid-cols-2 gap-10 items-center">

    <div>
      <a
        href="/"
        className="inline-block mb-6 bg-[#4a2f1f] text-white px-5 py-3 rounded-full font-bold hover:bg-[#6b4a32] transition"
      >
        ← Înapoi la pagina principală
      </a>

      <p className="uppercase tracking-[0.35em] text-sm text-[#8b5a2b] mb-4">
        Patrimoniu religios • Hermeziu
      </p>

      <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
        Biserica
        <br />
        „Sfinții Împărați
        <br />
        Constantin și Elena”
      </h1>

      <div className="w-32 h-1 bg-[#c58a3a] rounded-full mb-8" />

      <p className="text-xl leading-relaxed mb-8">
        Ctitorită în anul 1839 de Constantin Negruzzi, biserica reprezintă
        unul dintre cele mai valoroase monumente istorice și religioase
        ale satului Hermeziu.
      </p>

      <div className="flex flex-wrap gap-4">
        <div className="bg-[#fffdf8] border border-[#d9c5a1] rounded-2xl px-6 py-4 shadow">
          <p className="text-3xl font-bold text-[#8b5a2b]">1839</p>
          <p>Construcție</p>
        </div>

        <div className="bg-[#fffdf8] border border-[#d9c5a1] rounded-2xl px-6 py-4 shadow">
          <p className="text-3xl font-bold text-[#8b5a2b]">LMI</p>
          <p>Monument istoric</p>
        </div>

        <div className="bg-[#fffdf8] border border-[#d9c5a1] rounded-2xl px-6 py-4 shadow">
          <p className="text-3xl font-bold text-[#8b5a2b]">1868</p>
          <p>Necropola familiei</p>
        </div>
      </div>
    </div>

    <div>
      <img
        src="/biserica.jpeg"
        alt="Biserica Sfinții Împărați Constantin și Elena"
        className="w-full rounded-[40px] shadow-2xl border border-[#d9c5a1]"
      />
    </div>

  </div>
</section>


      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-5">
          {info.map(([label, value]) => (
            <div
              key={label}
              className="bg-[#fffdf8] rounded-3xl shadow-xl border border-[#d9c5a1] p-6"
            >
              <p className="uppercase tracking-[0.2em] text-xs text-[#8b5a2b] mb-2">
                {label}
              </p>
              <p className="text-xl font-bold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
        <div className="bg-[#fffdf8] rounded-[36px] shadow-xl p-8 md:p-10 border border-[#d9c5a1]">
          <p className="uppercase tracking-[0.3em] text-sm text-[#8b5a2b] mb-4">
            Istorie
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Biserica familiei Negruzzi
          </h2>

          <p className="text-lg leading-relaxed mb-5">
            Biserica „Sfinții Împărați Constantin și Elena” din Hermeziu a fost
            construită în anul 1839 de spătarul Constantin Negruzzi. Ea face
            parte din ansamblul curții familiei Negruzzi și reprezintă unul
            dintre cele mai importante obiective religioase și memoriale ale
            satului.
          </p>

          <p className="text-lg leading-relaxed mb-5">
            Înaintea actualei biserici, în sat a existat o bisericuță de lemn,
            amintită într-o însemnare din anul 1887. Actualul lăcaș a fost
            ridicat pe vechea moșie a familiei, în apropierea conacului.
          </p>

          <p className="text-lg leading-relaxed">
            Biserica a fost renovată în anul 1935, prin contribuția familiei
            ctitoriale și a enoriașilor. Astăzi este inclusă pe Lista
            Monumentelor Istorice, cu codul LMI IS-II-m-B-04193.01.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#3d2619] to-[#6b4a32] text-white rounded-[36px] shadow-xl p-8 md:p-10">
          <h2 className="text-4xl font-serif font-bold mb-6">
            De ce este importantă?
          </h2>

          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Este ctitoria lui Constantin Negruzzi și păstrează legătura
              directă dintre familie, comunitate și moșia de la Hermeziu.
            </p>

            <p>
              Curtea bisericii adăpostește mormântul scriitorului și alte
              monumente funerare ale familiei Negruzzi.
            </p>

            <p>
              În aplicația WebGIS, biserica completează traseul cultural alături
              de muzeu, școală și celelalte puncte de patrimoniu.
            </p>
          </div>

          <a
            href="/familie"
            className="block text-center mt-8 bg-[#c58a3a] text-white px-6 py-4 rounded-2xl font-bold hover:bg-[#a56b35] transition"
          >
            Vezi familia Negruzzi →
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-[#fffdf8] rounded-[36px] shadow-xl p-8 border border-[#d9c5a1]">
            <p className="uppercase tracking-[0.25em] text-sm text-[#8b5a2b] mb-4">
              Inscripție istorică
            </p>

            <h2 className="text-4xl font-serif font-bold mb-6">
              Pisania bisericii
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Deasupra intrării în pronaos se află o pisanie scrisă în limba
              română cu caractere chirilice. Textul amintește rolul bisericii în
              viața omului: nașterea, căsătoria, moartea și mântuirea.
            </p>

            <blockquote className="bg-[#f6ead9] border-l-8 border-[#c58a3a] rounded-2xl p-6 text-lg italic leading-relaxed">
              „În acest lăcaș de pace, unde Domnul se mărește, omul întâi se
              botează, când se naște pe pământ, și apoi cu a lui soție vine de
              se însoțește, în sfârșit aicea află liniștire în mormânt.”
            </blockquote>
          </div>

          <div className="bg-[#f7f0e4] rounded-[36px] shadow-xl p-8 border border-[#d9c5a1]">
            <p className="uppercase tracking-[0.25em] text-sm text-[#8b5a2b] mb-4">
              Spațiu memorial
            </p>

            <h2 className="text-4xl font-serif font-bold mb-6">
              Necropola familiei Negruzzi
            </h2>

            <p className="text-lg leading-relaxed mb-5">
              În curtea Bisericii „Sfinții Împărați Constantin și Elena” din
              Hermeziu se află necropola familiei Negruzzi, loc de odihnă pentru
              mai multe generații ale familiei care a marcat istoria culturală
              și socială a Moldovei.
            </p>

            <p className="text-lg leading-relaxed">
              Lângă zidul sudic al bisericii sunt amplasate monumentele funerare
              ale lui Constantin Negruzzi, Leon C. Negruzzi, Gheorghe C.
              Negruzzi, Anna Sturza și Anna L. Negruzzi. Lângă zidul nordic se
              află mormintele copiilor Leon Negruzzi și Sanda Racovitză.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="bg-[#fffdf8] rounded-[36px] shadow-xl p-8 md:p-10 border border-[#d9c5a1]">
          <p className="uppercase tracking-[0.25em] text-sm text-[#8b5a2b] mb-4 text-center">
            Morminte și epitafuri
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6">
            Necropola familiei Negruzzi
          </h2>

          <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto mb-8">
            Monumentele funerare din curtea bisericii păstrează memoria
            membrilor familiei Negruzzi și completează legătura dintre biserică,
            vechea moșie și patrimoniul cultural al satului Hermeziu.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
            <div className="bg-[#f8f3ec] border border-[#d9c5a1] rounded-3xl px-8 py-5 shadow">
              <p className="text-4xl font-bold text-[#8b5a2b]">1839</p>
              <p className="font-medium">Anul ctitoriei</p>
            </div>

            <div className="bg-[#f8f3ec] border border-[#d9c5a1] rounded-3xl px-8 py-5 shadow">
              <p className="text-4xl font-bold text-[#8b5a2b]">1868</p>
              <p className="font-medium">Mormântul scriitorului</p>
            </div>

            <div className="bg-[#f8f3ec] border border-[#d9c5a1] rounded-3xl px-8 py-5 shadow">
              <p className="text-4xl font-bold text-[#8b5a2b]">6</p>
              <p className="font-medium">Monumente prezentate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {necropola.map((mormant) => (
              <div
                key={mormant.title}
                className="bg-[#f8f3ec] rounded-[30px] overflow-hidden shadow-xl border border-[#d9c5a1]"
              >
                <div className="bg-[#efe3d0] p-4 flex items-center justify-center">
                  <img
                    src={mormant.src}
                    alt={mormant.title}
                    className="max-h-[360px] w-auto max-w-full rounded-2xl object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-center">
                    {mormant.title}
                  </h3>

                  <p className="text-[#8b5a2b] font-bold mb-5 text-center">
                    {mormant.ani}
                  </p>

                  <blockquote className="italic text-center text-base leading-7 whitespace-pre-line text-[#4b3621] border-t border-b border-[#c58a3a] py-4">
                    {mormant.text}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="bg-[#fffdf8] rounded-[36px] shadow-xl p-8 md:p-10 border border-[#d9c5a1]">
          <p className="uppercase tracking-[0.25em] text-sm text-[#8b5a2b] mb-4">
            Arhitectură
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Arhitectură și patrimoniu religios
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#faf7f2] rounded-3xl p-6 border border-[#e2cda7]">
              <h3 className="text-2xl font-bold mb-3">Stil clasic</h3>
              <p className="text-lg leading-relaxed">
                Biserica are formă de navă și absida altarului semicirculară.
              </p>
            </div>

            <div className="bg-[#faf7f2] rounded-3xl p-6 border border-[#e2cda7]">
              <h3 className="text-2xl font-bold mb-3">
                Pridvor și clopotniță
              </h3>
              <p className="text-lg leading-relaxed">
                Pridvorul vestic este susținut de șase coloane cilindrice, iar
                deasupra se ridică o clopotniță.
              </p>
            </div>

            <div className="bg-[#faf7f2] rounded-3xl p-6 border border-[#e2cda7]">
              <h3 className="text-2xl font-bold mb-3">Patrimoniu religios</h3>
              <p className="text-lg leading-relaxed">
                Biserica păstrează cărți de cult vechi, icoane și elemente
                liturgice importante pentru memoria comunității.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="bg-[#fffdf8] rounded-[36px] shadow-xl p-8 md:p-10 border border-[#d9c5a1]">
          <p className="uppercase tracking-[0.25em] text-sm text-[#8b5a2b] mb-4 text-center">
            Imagini
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-10">
            Galerie foto
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {galerie.map((foto) => (
              <div
                key={foto.src}
                className="rounded-[30px] overflow-hidden shadow-xl border border-[#d9c5a1] bg-[#efe3d0] p-3"
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="w-full h-[300px] object-contain rounded-2xl hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10 pb-20">
        <div className="bg-gradient-to-r from-[#3d2619] to-[#6b4a32] text-white rounded-[36px] shadow-xl p-8 md:p-10">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Integrare în aplicația WebGIS
          </h2>

          <p className="text-xl leading-relaxed">
            Biserica este integrată în aplicația WebGIS ca obiectiv cultural,
            religios și memorial. Ea este localizată pe hartă și inclusă în
            traseul turistic dedicat patrimoniului familiei Negruzzi din
            Hermeziu.
          </p>
        </div>
      </section>
    </main>
  );
}