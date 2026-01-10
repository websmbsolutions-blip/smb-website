import { Link, NavLink, Outlet } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

const baseLinkClasses =
  "text-xs font-semibold uppercase tracking-[0.2em] transition hover:text-emerald-200";

const getNavLinkClasses = ({ isActive }) =>
  [
    baseLinkClasses,
    isActive ? "text-emerald-300" : "text-slate-300",
  ].join(" ");

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-32 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <header className="relative z-10">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-8">
            <Link to="/" className="flex flex-col leading-none">
              <span className="text-lg font-semibold tracking-tight">
                SMB Solutions
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Managed IT + Cloud
              </span>
            </Link>

            <nav className="flex flex-wrap items-center gap-4 md:gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={getNavLinkClasses}
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <Link
              to="/contact"
              className="rounded-full bg-emerald-400 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-[0_0_24px_rgba(52,211,153,0.35)] transition hover:bg-emerald-300"
            >
              Get a Consultation
            </Link>
          </div>
        </header>

        <main className="relative z-10">
          <Outlet />
        </main>

        <footer className="relative z-10 border-t border-slate-800/70">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold">SMB Solutions</p>
              <p className="mt-2 text-sm text-slate-400">
                Proactive IT partnerships for growing businesses.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500">
                Phoenix - Denver - Remote
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              <span>hello@smbsolutions.com</span>
              <span>+1 (480) 555-0192</span>
              <span>Mon-Fri 8am-6pm</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
