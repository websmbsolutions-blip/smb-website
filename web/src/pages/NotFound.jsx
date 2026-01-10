import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-10 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-sm text-slate-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-emerald-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-emerald-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
