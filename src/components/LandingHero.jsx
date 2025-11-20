import { motion } from 'framer-motion'

export default function LandingHero() {
  return (
    <section className="relative pt-24 pb-16">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-400 to-cyan-400 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Groene dagbesteding, menselijk en vooruitstrevend
          </motion.h1>
          <motion.p
            className="mt-5 text-lg text-slate-300 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Een plek waar talent groeit en generaties elkaar ontmoeten. Samen werken we aan gezondheid, structuur en verbondenheid.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <a href="/dagbesteding" className="px-5 py-3 rounded-xl bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition">Ontdek Dagbesteding</a>
            <a href="/partners" className="px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition">Voor Zorgpartners</a>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop)'}} />
          <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20" />
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/20" />
        </motion.div>
      </div>
    </section>
  )
}
