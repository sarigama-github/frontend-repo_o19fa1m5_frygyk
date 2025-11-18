import { Shield, Radar, ScanLine, LockKeyhole, Clock4, BellRing } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Unified Protection',
    desc: 'One console for assets, vulnerabilities, and real-time threats across cloud, endpoints, and edge.'
  },
  {
    icon: Radar,
    title: 'Continuous Discovery',
    desc: 'Auto-inventory every service and secret with agentless scanning and graph-based correlation.'
  },
  {
    icon: ScanLine,
    title: 'Attack Surface Monitoring',
    desc: 'Map exposures, misconfigurations, and shadow IT with prioritized remediation paths.'
  },
  {
    icon: LockKeyhole,
    title: 'Zero-Trust Ready',
    desc: 'Built-in SSO, MFA, SCIM provisioning, role-based access, and least-privilege defaults.'
  },
  {
    icon: Clock4,
    title: 'Real-time Response',
    desc: 'Policy-driven playbooks, SOAR integrations, and one-click containment.'
  },
  {
    icon: BellRing,
    title: 'Smart Alerting',
    desc: 'Noise-cancelled signals powered by anomaly detection and context enrichment.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Built for Security Teams</h2>
          <p className="mt-3 text-slate-300">Everything you need to see, secure, and scale — without the noise.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-colors hover:bg-slate-900/60">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
