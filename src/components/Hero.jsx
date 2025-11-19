import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4TrRyLcIHhcItjnk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 items-center gap-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Tame your tabs. Build your focus.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg text-blue-100/90 max-w-xl"
            >
              A floating timer that follows you across every tab, smart whitelists that lock distractions, and a playful fortress you build with every focused minute.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/30 border border-white/20">
                Get Early Access
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md border border-white/20">
                See how it works
              </a>
            </motion.div>

            <div className="mt-6 text-sm text-blue-200/80">
              Pre-launch pricing. Limited founder slots.
            </div>
          </div>

          <div className="pointer-events-none hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
        <div className="h-40 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>
    </section>
  )
}
