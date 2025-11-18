import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="get-started" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Start securing in minutes</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Launch a fully featured trial with sample assets and guided playbooks. No credit card required.
        </p>

        <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white shadow-[0_10px_40px_rgba(34,211,238,0.35)] hover:shadow-[0_10px_50px_rgba(34,211,238,0.55)]">
            Create Account
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#" className="rounded-xl border border-white/10 px-6 py-3 font-medium text-white/90 hover:bg-white/5">Book a Demo</a>
        </div>

        <p className="mt-6 text-xs text-slate-400">14-day free trial • Cancel anytime • No credit card required</p>
      </div>
    </section>
  )
}
