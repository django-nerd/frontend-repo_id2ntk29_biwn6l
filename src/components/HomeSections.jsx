export function Themes() {
  const items = [
    { title: 'Kweken voor de Minima', desc: 'Samen telen we groenten en planten voor mensen met een kleine portemonnee.' },
    { title: 'Werken op de Kwekerij', desc: 'Leer en werk mee op het land, in de kas en bij het verpakken.' },
    { title: 'Dierenverzorging', desc: 'Dagelijks verzorgen we kippen, konijnen en andere kleine boerderijdieren.' },
    { title: 'Facilitaire Diensten', desc: 'Ondersteun de organisatie met logistiek, onderhoud en catering.' },
  ]
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Vier Thema’s</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-5 rounded-xl bg-white/5 ring-1 ring-white/10 text-slate-200">
              <h3 className="text-white font-semibold mb-2">{it.title}</h3>
              <p className="text-slate-300 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Special() {
  const items = [
    { title: 'Voedsel Waste Reductie', desc: 'We voorkomen verspilling door slim te plannen en reststromen te benutten.' },
    { title: 'Culturele Uitstapjes', desc: 'Regelmatig organiseren we uitstapjes en verbinden we culturen en generaties.' },
    { title: 'Flexibele Participatie', desc: 'Ieder mens is anders. We bieden maatwerk in tempo, taken en begeleiding.' },
  ]
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Wat Maakt Ons Bijzonder</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-5 rounded-xl bg-white/5 ring-1 ring-white/10 text-slate-200">
              <h3 className="text-white font-semibold mb-2">{it.title}</h3>
              <p className="text-slate-300 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
