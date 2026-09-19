"use client"; 
 
import { useState } from "react"; 
 
const categorii = { 
muzeu: { 
  nume: "Muzeu", 
  icon: "🏛️", 
  informatii: [ 
    { 
      titlu: "Un loc de retragere pentru familia Negruzzi", 
      text: "Știai că familia Negruzzi își petrecea în conacul de la Hermeziu o parte importantă a anului, din primăvară până în toamnă? Constantin Negruzzi era legat de acest loc și în perioada în care se afla în afara Iașului, în urma exilului său." 
    }, 
    { 
      titlu: "Primele începuturi ale muzeului", 
      text: "Știai că primul muzeu amenajat în conacul de la Hermeziu a fost deschis în anul 1969, cu sprijinul UNESCO? La acel moment, muzeul nu era dedicat exclusiv familiei Negruzzi, ci avea o tematică mai largă." 
    }, 
    { 
      titlu: "Muzeul dedicat familiei Negruzzi", 
      text: "Știai că abia în anul 1995 muzeul a fost reorganizat și dedicat în mod special familiei Negruzzi? De atunci, patrimoniul muzeal este prezentat în legătură directă cu istoria și activitatea membrilor familiei." 
    }, 
    { 
      titlu: "Obiecte din perioada Negruzzi", 
      text: "Știai că în muzeu se păstrează și obiecte originale? Nu toate exponatele au aparținut familiei Negruzzi, însă o parte dintre obiectele aflate în colecție sunt autentice și provin din perioada istorică în care a trăit familia." 
    }, 
    { 
      titlu: "Un patrimoniu care revine la viață", 
      text: "Știai că muzeul contribuie la păstrarea memoriei familiei Negruzzi și la valorificarea patrimoniului cultural de la Hermeziu? Prin obiectele, documentele și informațiile prezentate, vizitatorii pot descoperi legătura dintre familie, conac și localitate." 
    }, 
  ], 
}, 
familie: { 
  nume: "Familie", 
  icon: "👨‍👩‍👧", 
  informatii: [ 
    { 
      titlu: "O familie cu origini răzășești", 
      text: "Știai că familia Negruzzi este considerată de origine răzășească? Primul înaintaș cunoscut, Ianachi, ar fi primit porecla „Negruț”, asociată culorii obrazului." 
    }, 
    { 
      titlu: "De la Negruț la Negruzzi", 
      text: "Știai că forma „Negruzzi” a numelui familiei este considerată o italienizare ulterioară a numelui „Negruț”?" 
    }, 
        { 
      titlu: "Legătura cu Trifești", 
      text: "Știai că Dinu și Gheorghe Negruț, fiii lui Vasile Negruț, au fost crescuți la moșia Trifești de boierul Constantin Balș Ciuntu?" 
    }, 
{ 
  titlu: "Mama scriitorului", 
  text: "Știai că mama lui Constantin Negruzzi a murit la puțin timp după nașterea scriitorului, care s-a născut în 1808? Rămas fără mamă, Constantin Negruzzi a fost crescut de tatăl său, Dinu Negruzzi." 
}, 
{ 
  titlu: "Versuri pe mormântul scriitorului", 
  text: "Știai că pe mormântul lui Constantin Negruzzi sunt înscrise versuri din epistola „La Maria”, dedicată Mariei Gane? Astfel, una dintre creațiile sale literare a rămas legată de locul în care își doarme somnul de veci." 
}, 
  ], 
}, 
sat: { 
  nume: "Sat", 
  icon: "🏘️", 
  informatii: [ 
    { 
      titlu: "De la Trifeștii-Vechi la Hermeziu", 
      text: "Știai că satul Hermeziu s-a numit inițial Trifeștii-Vechi? Ulterior, localitatea a primit numele Hermeziu, în onoarea Sofiei Hermeziu, mama scriitorului Constantin Negruzzi." 
    }, 
    { 
      titlu: "Denumirea Lunca Prut", 
      text: "Știai că, în perioada comunistă, denumirea localității a fost schimbată în Lunca Prut? Numele era legat de poziționarea satului în zona de luncă a râului Prut." 
    }, 
    { 
      titlu: "Revenirea la numele Hermeziu", 
      text: "Știai că localitatea a revenit ulterior la denumirea de Hermeziu, nume legat de istoria familiei Negruzzi și de Sofia Hermeziu?" 
    }, 
    { 
      titlu: "Aproape de Prut", 
      text: "Știai că satul Hermeziu este situat în partea de est a comunei Trifești, în apropierea râului Prut?" 
    }, 
    { 
      titlu: "O localitate cu patrimoniu", 
      text: "Știai că în Hermeziu se păstrează mai multe elemente de patrimoniu cultural, printre care muzeul, biserica și alte obiective legate de istoria localității?" 
    }, 
  ], 
}, 
}; 
 
type Categorie = keyof typeof categorii; 
 
export default function StiaiCa() { 
  const [categorie, setCategorie] = useState<Categorie>("familie"); 
  const [index, setIndex] = useState(0); 
 
  const date = categorii[categorie]; 
  const informatie = date.informatii[index]; 
 
  const schimbaCategoria = (nouaCategorie: Categorie) => { 
    setCategorie(nouaCategorie); 
    setIndex(0); 
  }; 
 
  const urmatorulFapt = () => { 
    setIndex((index + 1) % date.informatii.length); 
  }; 
 
  const faptulAnterior = () => { 
    setIndex( 
      (index - 1 + date.informatii.length) % 
        date.informatii.length 
    ); 
  }; 
 
  return ( 
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10"> 
 
      {/* TITLU */} 
      <div className="text-center mb-8"> 
 
   
 
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#4a2f1f]"> 
          Știai că...? 
        </h2> 
 

      </div> 
 
      {/* CATEGORII */} 
      <div className="flex flex-col md:flex-row justify-center gap-3 mb-8"> 
 
        {(Object.keys(categorii) as Categorie[]).map((item) => ( 
          <button 
            key={item} 
            onClick={() => schimbaCategoria(item)} 
            className={`px-7 py-4 rounded-full font-bold text-lg transition-all duration-300 ${ 
              categorie === item 
                ? "bg-[#a56b2f] text-white shadow-lg scale-105" 
                : "bg-[#e9dfd1] text-[#5d4a3a] hover:bg-[#dfd1be]" 
            }`} 
          > 
            <span className="mr-2"> 
              {categorii[item].icon} 
            </span> 
 
            {categorii[item].nume} 
          </button> 
        ))} 
      </div> 
 
      {/* CARD FĂRĂ IMAGINE */} 
      <div className="bg-[#fffdf8] rounded-[30px] md:rounded-[38px] shadow-2xl border border-[#d9c5a1] overflow-hidden"> 
 
        <div className="p-7 md:p-14 lg:p-16"> 
 
          <div className="max-w-4xl mx-auto text-center"> 
 
            {/* CATEGORIA */} 
            <div className="inline-flex items-center gap-2 bg-[#eee2d0] text-[#8b5a2b] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-7"> 
              <span>{date.icon}</span> 
              {date.nume} 
            </div> 
 
            {/* NUMĂR */} 
            <p className="text-sm text-[#a0784c] font-bold tracking-widest uppercase mb-4"> 
              Curiozitatea {index + 1} din {date.informatii.length} 
            </p> 
 
            {/* TITLU */} 
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#4a2f1f] mb-7"> 
              {informatie.titlu} 
            </h3> 
 
            {/* TEXT */} 
            <p className="text-lg md:text-xl leading-relaxed text-[#5d4a3a] max-w-3xl mx-auto"> 
              {informatie.text} 
            </p> 
 
  
 
            {/* NAVIGARE */} 
            <div className="flex items-center justify-between gap-4"> 
 
              <button 
                onClick={faptulAnterior} 
                className="px-5 py-3 rounded-full border border-[#cdbb9e] text-[#5d4a3a] hover:bg-[#f6efe6] transition" 
              > 
                ← Înapoi 
              </button> 
 
              {/* BULINE */} 
              <div className="flex gap-2"> 
                {date.informatii.map((_, i) => ( 
                  <button 
                    key={i} 
                    onClick={() => setIndex(i)} 
                    aria-label={`Curiozitatea ${i + 1}`} 
                    className={`w-3 h-3 rounded-full transition-all ${ 
                      i === index 
                        ? "bg-[#a56b2f] scale-125" 
                        : "bg-[#d8cbbb]" 
                    }`} 
                  /> 
                ))} 
              </div> 
 
              <button 
                onClick={urmatorulFapt} 
                className="px-5 py-3 rounded-full bg-[#a56b2f] text-white font-bold hover:bg-[#8b5a2b] transition" 
              > 
                Alt fapt → 
              </button> 
 
            </div> 
 
          </div> 
        </div> 
      </div> 
 
    </section> 
  ); 
}