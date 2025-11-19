import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_200px_at_90%_30%,rgba(59,130,246,0.15),transparent)]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <CTA />

        <footer className="py-10 text-center text-sm text-blue-200/70">
          © {new Date().getFullYear()} FocusFortress. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default App
