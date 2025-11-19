import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold">Focus is a skill. We make it fun to practice.</h3>
            <p className="mt-2 text-blue-100/90">Join early and help shape the fortress-building meta.</p>
          </div>
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold shadow">
            Claim Early Access <ArrowRight className="h-4 w-4"/>
          </a>
        </div>
      </div>
    </section>
  )
}
