import Spline from '@splinetool/react-spline'
import { ShieldCheck, Lock, Fingerprint, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(56,189,248,0.18),transparent)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-cyan-300">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20">
              <ShieldCheck className="h-3.5 w-3.5" />
            </span>
            Enterprise-grade cybersecurity platform
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Secure your cloud. Protect your edge. Own your attack surface.
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            SentriGuard is a modern, minimal security platform that unifies asset discovery, continuous monitoring, and automated response in one elegant dashboard.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-medium text-white shadow-[0_10px_40px_rgba(34,211,238,0.35)] hover:shadow-[0_10px_50px_rgba(34,211,238,0.55)]">
              Start Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#features" className="rounded-xl border border-white/10 px-5 py-3 font-medium text-white/90 hover:bg-white/5">Explore Features</a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-slate-300/90">
            <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-cyan-400" /> SOC2, ISO27001</div>
            <div className="flex items-center gap-2"><Fingerprint className="h-4 w-4 text-cyan-400" /> SSO & MFA</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-cyan-400" /> 99.99% uptime</div>
          </div>
        </div>

        <div className="relative aspect-square w-full">
          <div className="absolute -inset-10 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/30">
            <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  )
}
