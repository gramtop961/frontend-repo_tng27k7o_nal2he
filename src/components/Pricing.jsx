import { motion } from 'framer-motion'
import { Check, Crown } from 'lucide-react'
import { useState } from 'react'

const tiers = [
  {
    name: 'Founder Pass',
    price: 19,
    tagline: 'Limited pre-launch access',
    features: [
      'Early access to the extension',
      'Lifetime Founder badge',
      '3 exclusive timer themes',
      'Priority feature voting',
    ],
    highlight: true
  },
  {
    name: 'Supporter',
    price: 9,
    tagline: 'Support the launch',
    features: [
      'Early access invite',
      '1 exclusive timer theme',
      'Discord role',
    ]
  }
]

export default function Pricing({ onSignup }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleJoin = async (plan) => {
    setLoading(true)
    setMessage('')
    try {
      const res = await fetch(`${backend}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, plan })
      })
      const data = await res.json()
      if (res.ok) {
        setMessage(data.message || 'Welcome aboard!')
        onSignup && onSignup()
      } else {
        setMessage(data.detail || 'Something went wrong')
      }
    } catch (e) {
      setMessage(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get early access</h2>
          <p className="mt-3 text-blue-200/90">Secure your spot and help shape the launch.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-[1.2fr_1fr] gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              />
              <input
                type="email"
                placeholder="Email for your invite"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              />
            </div>
            {message && <p className="mt-3 text-sm text-blue-100">{message}</p>}
            <p className="mt-4 text-xs text-blue-200/70">We’ll send you a secure payment link after you reserve your spot.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {tiers.map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl border ${t.highlight ? 'border-cyan-300/40 bg-cyan-400/10' : 'border-white/10 bg-white/5'} p-6`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{t.name}</h3>
                  {t.highlight && (
                    <span className="inline-flex items-center gap-1 text-cyan-200 text-xs"><Crown className="h-4 w-4"/> Popular</span>
                  )}
                </div>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-3xl font-bold text-white">${t.price}</span>
                  <span className="text-blue-200/80 text-sm mb-1">one‑time</span>
                </div>
                <p className="mt-2 text-sm text-blue-200/90">{t.tagline}</p>
                <ul className="mt-4 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-blue-100 text-sm">
                      <Check className="h-4 w-4 text-cyan-300"/> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleJoin(t.name)}
                  disabled={loading || !email}
                  className="mt-5 w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 font-semibold disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Reserve your spot'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-10">
        <div className="h-40 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>
    </section>
  )
}
