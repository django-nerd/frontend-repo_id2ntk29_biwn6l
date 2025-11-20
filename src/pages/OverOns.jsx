export default function OverOns() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-200">
      <h1 className="text-3xl font-bold text-white mb-6">Over Ons</h1>
      <p className="mb-4">Wij zijn een sociale onderneming in Noordbroek met een hart voor mensen en het milieu. Op onze zorgkwekerij verbinden we dagbesteding met duurzame voedselproductie.</p>

      <div className="grid md:grid-cols-2 gap-10">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Missie & Visie</h2>
          <p className="text-slate-300">We geloven in een inclusieve samenleving waarin iedereen mee kan doen. Met betekenisvol werk in het groen versterken we eigenwaarde, gezondheid en verbinding.</p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Team</h2>
          <ul className="text-slate-300 space-y-1">
            <li>Jan – Begeleider Kwekerij</li>
            <li>Fatima – Zorgcoördinator</li>
            <li>Piet – Dierenverzorging</li>
            <li>Sanne – Facilitair & Logistiek</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Kerncijfers</h2>
          <ul className="grid grid-cols-2 gap-3 text-slate-300">
            <li className="p-4 rounded-lg bg-white/5 ring-1 ring-white/10"><span className="text-3xl text-white font-bold">40+</span><br/>deelnemers per week</li>
            <li className="p-4 rounded-lg bg-white/5 ring-1 ring-white/10"><span className="text-3xl text-white font-bold">12</span><br/>vrijwilligers</li>
            <li className="p-4 rounded-lg bg-white/5 ring-1 ring-white/10"><span className="text-3xl text-white font-bold">2019</span><br/>startjaar</li>
            <li className="p-4 rounded-lg bg-white/5 ring-1 ring-white/10"><span className="text-3xl text-white font-bold">95%</span><br/>tevredenheid</li>
          </ul>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Partners</h2>
          <p className="text-slate-300">We werken samen met gemeenten, zorginstellingen en lokale initiatieven in Midden-Groningen.</p>
        </section>
      </div>
    </main>
  )
}
