import { motion } from 'framer-motion'

export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Soft gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_0%_0%,#052e26_0%,transparent_50%),radial-gradient(90%_70%_at_100%_10%,#0b3a68_0%,transparent_55%),radial-gradient(60%_50%_at_50%_100%,#0a1b2e_0%,transparent_60%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

      {/* Animated orbs */}
      <motion.div
        className="absolute -top-24 -left-16 w-[42rem] h-[42rem] rounded-full bg-emerald-500/15 blur-3xl"
        animate={{ y: [0, 25, 0], x: [0, 10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 w-[36rem] h-[36rem] rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[32rem] h-[32rem] rounded-full bg-amber-400/10 blur-3xl"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light" style={{backgroundImage:'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")'}} />
    </div>
  )
}
