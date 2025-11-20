export default function FeatureGrid() {
  const features = [
    {
      title: 'Human-first zorg',
      desc: 'Kleine setting, persoonlijke doelen, warme begeleiding.',
    },
    {
      title: 'Echte activiteiten',
      desc: 'Kwekerij, dieren, koken, facilitair: betekenisvol en tastbaar werk.',
    },
    {
      title: 'Regionale samenwerking',
      desc: 'Sterk netwerk met wijkteams en instellingen in Midden-Groningen.',
    },
    {
      title: 'Veilig & transparant',
      desc: 'Heldere afspraken, terugkoppeling en continuïteit.',
    },
  ]

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Waarom voor ons kiezen</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
              <div className="text-white font-semibold mb-1">{f.title}</div>
              <div className="text-slate-300 text-sm">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
