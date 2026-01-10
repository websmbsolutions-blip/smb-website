const values = [
  {
    title: "Clarity",
    body: "We explain the why behind every decision and keep you informed.",
  },
  {
    title: "Accountability",
    body: "We own outcomes and document what success looks like.",
  },
  {
    title: "Resilience",
    body: "We build systems that stay dependable under pressure.",
  },
  {
    title: "Partnership",
    body: "We grow alongside your business, quarter after quarter.",
  },
];

const timeline = [
  {
    year: "2007",
    detail: "Founded to bring enterprise-grade IT to local SMBs.",
  },
  {
    year: "2013",
    detail: "Expanded into cloud migration and cybersecurity services.",
  },
  {
    year: "2018",
    detail: "Launched vCIO advisory and long-term roadmap planning.",
  },
  {
    year: "2024",
    detail: "Serving multi-state teams with 24/7 monitoring coverage.",
  },
];

export default function About() {
  return (
    <div className="space-y-20 pb-24">
      <section>
        <div className="mx-auto w-full max-w-6xl px-6 pt-12 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                About Us
              </p>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
                We turn IT into a steady, trusted advantage.
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                SMB Solutions was built for growing businesses that need
                enterprise-grade reliability without enterprise overhead. We
                bring deep expertise, clear communication, and a partnership
                mindset to every engagement.
              </p>
            </div>
            <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">
                Mission
              </p>
              <p className="mt-4 text-lg font-semibold">
                Deliver calm, secure, and scalable IT for ambitious teams.
              </p>
              <p className="mt-4 text-sm text-slate-300">
                We work as a long-term partner, aligning IT strategy with
                business outcomes so leaders can focus on growth.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-800/70 bg-slate-950/50 p-4 text-sm text-slate-400">
                Local presence with nationwide reach.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
              Values
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-6"
                >
                  <p className="text-lg font-semibold">{value.title}</p>
                  <p className="mt-2 text-sm text-slate-400">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[32px] border border-slate-800/70 bg-gradient-to-br from-emerald-500/10 via-slate-900/70 to-slate-950/80 p-8">
              <p className="text-xs uppercase tracking-[0.5em] text-emerald-200">
                Our Story
              </p>
              <p className="mt-4 text-lg font-semibold">
                Built alongside the SMBs we serve.
              </p>
              <p className="mt-4 text-sm text-slate-300">
                We started as a hands-on MSP, then expanded into security,
                cloud, and strategic advisory as our clients scaled. Today, we
                remain intentionally focused on the SMB market.
              </p>
            </div>
            <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8">
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                Timeline
              </p>
              <div className="mt-6 space-y-4">
                {timeline.map((item) => (
                  <div
                    key={item.year}
                    className="flex items-start gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4"
                  >
                    <div className="text-sm font-semibold text-emerald-200">
                      {item.year}
                    </div>
                    <p className="text-sm text-slate-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
