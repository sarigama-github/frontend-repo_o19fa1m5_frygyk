import { useState } from 'react'
import { Menu, Shield, X } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                <Shield className="h-5 w-5 text-white" />
              </span>
              <span className="font-semibold tracking-tight text-white">SentriGuard</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
              <a href="#get-started" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-[0_8px_30px_rgb(32,211,238,0.35)] hover:shadow-[0_8px_40px_rgb(32,211,238,0.55)] transition-shadow">Get Started</a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-white/5">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 p-4 md:hidden">
              <div className="grid gap-4">
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#pricing">Pricing</NavLink>
                <NavLink href="#faq">FAQ</NavLink>
                <a href="#get-started" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white">Get Started</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
