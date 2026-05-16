export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest font-semibold">
          Emergency Kill Switch
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Kill broken features<br />
          <span className="text-[#58a6ff]">before they kill your startup</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          One-click feature flag management with real-time propagation across all environments. No more 3am deploys to fix a bad rollout.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "Instant propagation", desc: "WebSocket push to all connected clients in under 100ms." },
            { icon: "🔒", title: "All environments", desc: "Toggle flags in dev, staging, and prod from one dashboard." },
            { icon: "📊", title: "Audit log", desc: "Every change timestamped and attributed so you know who did what." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$29<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-sm text-[#8b949e] mb-6">Everything you need, nothing you don't</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited feature flags",
              "Real-time WebSocket sync",
              "Up to 5 team members",
              "All environments included",
              "Full audit history",
              "Slack & email alerts"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How fast does a flag change propagate?",
              a: "Changes are pushed via WebSocket to all connected SDK clients in under 100ms. No polling, no delays."
            },
            {
              q: "Do I need to redeploy to toggle a flag?",
              a: "Never. That's the whole point. Toggle any flag from the dashboard and it takes effect instantly without touching your deployment pipeline."
            },
            {
              q: "What happens if I cancel my subscription?",
              a: "Your flags stay readable for 30 days so you can migrate. After that, all flags default to their last saved state and the dashboard is locked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} FlagKill. Built for founders who ship fast.
      </footer>
    </main>
  );
}
