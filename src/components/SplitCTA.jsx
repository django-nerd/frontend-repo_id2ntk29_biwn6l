export default function SplitCTA() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 ring-1 ring-white/10">
            <h3 className="text-white text-2xl font-bold">Voor cliënten</h3>
            <p className="text-slate-200 mt-2">Zinvolle dagbesteding met structuur, natuur en persoonlijke aandacht.</p>
            <a href="/dagbesteding" className="inline-block mt-5 px-5 py-3 rounded-xl bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition">Lees meer</a>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 ring-1 ring-white/10">
            <h3 className="text-white text-2xl font-bold">Voor zorgpartners</h3>
            <p className="text-slate-200 mt-2">Betrouwbare samenwerking met duidelijke evaluaties en doelen.</p>
            <a href="/partners" className="inline-block mt-5 px-5 py-3 rounded-xl bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition">Samenwerken</a>
          </div>
        </div>
      </div>
    </section>
  )
}
