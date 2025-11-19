import { Brain, ListCheck, Timer, Lock, Music2, Puzzle, Sparkles, Share2, LineChart, Trophy } from 'lucide-react'

const features = [
  {
    icon: Timer,
    title: 'Floating Timer Everywhere',
    desc: 'A persistent timer/stopwatch pinned above all tabs. Same time, same position, every page.'
  },
  {
    icon: ListCheck,
    title: 'Smart Whitelist',
    desc: 'Auto-detects open tabs and lets you whitelist what matters. Everything else is quietly blocked.'
  },
  {
    icon: Music2,
    title: 'Focus Sounds & Music',
    desc: 'Play YouTube, Spotify, or built‑in gamma tones, nature and low‑fi soundscapes during sessions.'
  },
  {
    icon: Brain,
    title: 'Intent Prompt + Challenge',
    desc: 'Off‑whitelist visits ask your intent. Skip it and face a timed math gate for 5 minutes of access.'
  },
  {
    icon: Lock,
    title: 'Presets & Sessions',
    desc: 'Save preset whitelists. One click opens needed tabs and closes the rest — then the clock starts.'
  },
  {
    icon: LineChart,
    title: 'Session Analytics',
    desc: 'See focus streaks, blocked attempts, most productive sites and time-on-task trends.'
  },
  {
    icon: Share2,
    title: 'Share & Library',
    desc: 'Share presets with friends, browse a community library, and import with one click.'
  },
  {
    icon: Trophy,
    title: 'XP & Leaderboards',
    desc: 'Earn XP by staying disciplined. Climb the leaderboard with your crew.'
  },
  {
    icon: Sparkles,
    title: 'Build Your Fortress',
    desc: 'Turn focus into a living 3D fortress. Stay sharp and it thrives; slack off and it fractures.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What you get</h2>
          <p className="mt-3 text-blue-200/90">Minimal friction. Playful accountability. Real focus.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center shadow-lg ring-1 ring-white/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-10">
        <div className="h-40 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>
    </section>
  )
}
