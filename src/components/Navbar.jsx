import { Menu, Shield, Clock, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-white/20 shadow-lg flex items-center justify-center">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div className="text-left">
            <p className="text-white font-semibold leading-tight">FocusFortress</p>
            <p className="text-xs text-blue-200/80 -mt-0.5">Chrome extension</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-blue-100/80 hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-blue-100/80 hover:text-white transition-colors">Early Access</a>
          <a href="#faq" className="text-blue-100/80 hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm backdrop-blur-md border border-white/20 transition">
            <Shield className="h-4 w-4" />
            Get Early Access
          </a>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 border border-white/20 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <div className="absolute inset-x-0 top-0 -z-0">
        <div className="pointer-events-none h-40 bg-gradient-to-b from-cyan-400/20 via-transparent to-transparent blur-2xl" />
      </div>
    </header>
  )
}
