export default function Contact() {
  return (
    <div className="space-y-20 pb-24">
      <section>
        <div className="mx-auto w-full max-w-6xl px-6 pt-12 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                Contact
              </p>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
                Tell us what is holding your IT back.
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Whether you need a full managed services partner or a focused
                project team, we will bring clarity and a plan you can trust.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-400">
                <p>hello@smbsolutions.com</p>
                <p>+1 (480) 555-0192</p>
                <p>Mon-Fri, 8am-6pm MST</p>
              </div>
            </div>
            <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">
                Quick Response
              </p>
              <p className="mt-4 text-sm text-slate-300">
                Expect a response in one business day with next steps and a
                clear timeline.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-400">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Headquarters
                  </p>
                  <p className="mt-2">1100 Central Ave, Phoenix, AZ</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Offices
                  </p>
                  <p className="mt-2">Phoenix - Denver - Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form
              className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8"
              onSubmit={(event) => event.preventDefault()}
            >
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                Project Intake
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="text-sm text-slate-300">
                  Full Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Jordan Patel"
                    className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-emerald-300 focus:outline-none"
                  />
                </label>
                <label className="text-sm text-slate-300">
                  Work Email
                  <input
                    type="email"
                    name="email"
                    placeholder="jordan@company.com"
                    className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-emerald-300 focus:outline-none"
                  />
                </label>
                <label className="text-sm text-slate-300">
                  Company
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-emerald-300 focus:outline-none"
                  />
                </label>
                <label className="text-sm text-slate-300">
                  Team Size
                  <select
                    name="size"
                    className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-emerald-300 focus:outline-none"
                  >
                    <option>1-25</option>
                    <option>26-100</option>
                    <option>101-250</option>
                    <option>250+</option>
                  </select>
                </label>
              </div>
              <label className="mt-4 block text-sm text-slate-300">
                How can we help?
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your goals, timeline, or challenges."
                  className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-emerald-300 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="mt-6 rounded-full bg-emerald-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-emerald-300"
              >
                Send Request
              </button>
            </form>
            <div className="space-y-6">
              <div className="rounded-[32px] border border-slate-800/70 bg-gradient-to-br from-emerald-500/10 via-slate-900/70 to-slate-950/80 p-8">
                <p className="text-xs uppercase tracking-[0.5em] text-emerald-200">
                  What Happens Next
                </p>
                <ul className="mt-6 space-y-4 text-sm text-slate-300">
                  <li>We review your request within one business day.</li>
                  <li>We schedule a discovery call to clarify needs.</li>
                  <li>We deliver a proposal with timeline and pricing.</li>
                </ul>
              </div>
              <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8">
                <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                  Prefer to Talk?
                </p>
                <p className="mt-4 text-sm text-slate-300">
                  Call us at +1 (480) 555-0192 or email hello@smbsolutions.com.
                </p>
                <p className="mt-4 text-sm text-slate-400">
                  We can jump on a quick call or set a time for a deeper
                  assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
