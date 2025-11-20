export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_20%_10%,#22c55e_0%,transparent_25%),radial-gradient(circle_at_80%_0%,#3b82f6_0%,transparent_25%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-emerald-300 ring-1 ring-white/20 mb-4">Intergenerationele zorg in het groen</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Zorgkwekerij Plant en Tuin Noordbroek</h1>
          <p className="text-slate-200 text-lg leading-relaxed mb-6">Zorgkwekerij Plant en Tuin Noordbroek biedt actieve agrarische dagbesteding waar talenten groeien, generaties elkaar ontmoeten en iedereen mee kan doen.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/dagbesteding" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition shadow">Voor Cliënten</a>
            <a href="/partners" className="px-5 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition shadow">Voor Zorgpartners</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=60&w=1200)'}} />
          <div className="absolute -bottom-5 -left-5 w-32 h-32 rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/20" />
          <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/20" />
        </div>
      </div>
    </section>
  )
}
