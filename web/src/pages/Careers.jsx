import { useEffect, useState } from "react";
import { sanityClient } from "../sanity/client";
import { openJobsQuery } from "../sanity/queries";
import { Link } from "react-router-dom";

const fallbackJobs = [
  {
    _id: "senior-systems",
    title: "Senior Systems Engineer",
    location: "Phoenix, AZ",
    employmentType: "Full-time",
  },
  {
    _id: "security-analyst",
    title: "Security Operations Analyst",
    location: "Remote",
    employmentType: "Full-time",
  },
  {
    _id: "client-success",
    title: "Client Success Manager",
    location: "Denver, CO",
    employmentType: "Full-time",
  },
];

const benefits = [
  "Health, dental, and vision coverage",
  "Remote-friendly with regional meetups",
  "Learning budget and certification support",
  "Wellness days and flexible PTO",
  "401(k) match and profit sharing",
  "Team offsites focused on growth",
];

export default function Careers() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let active = true;

    sanityClient
      .fetch(openJobsQuery)
      .then((data) => {
        if (active && Array.isArray(data)) {
          setJobs(data);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  const jobsToShow = jobs.length > 0 ? jobs : fallbackJobs;

  return (
    <div className="space-y-20 pb-24">
      <section>
        <div className="mx-auto w-full max-w-6xl px-6 pt-12 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                Careers
              </p>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
                Build the calm behind ambitious businesses.
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                We are a team of builders, advisors, and operators. If you love
                solving complex problems with clarity and care, you will fit
                right in.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-emerald-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-emerald-300"
                >
                  Start a Conversation
                </Link>
                <a
                  href="mailto:careers@smbsolutions.com"
                  className="rounded-full border border-slate-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
                >
                  Email Recruiting
                </a>
              </div>
            </div>
            <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">
                Why Join Us
              </p>
              <ul className="mt-6 space-y-4 text-sm text-slate-300">
                <li>Lead projects that directly shape client outcomes.</li>
                <li>Work alongside senior engineers and strategists.</li>
                <li>Own your growth with clear feedback and support.</li>
                <li>Build long-term relationships, not one-off tickets.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
              Open Roles
            </p>
            <div className="mt-8 space-y-4">
              {jobsToShow.map((job) => (
                <div
                  key={job._id}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/40 p-6 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-lg font-semibold">{job.title}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {job.location} - {job.employmentType}
                    </p>
                  </div>
                  <a
                    href="mailto:careers@smbsolutions.com"
                    className="rounded-full border border-slate-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8">
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                Benefits
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4 text-sm text-slate-300"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-slate-800/70 bg-gradient-to-br from-emerald-500/10 via-slate-900/70 to-slate-950/80 p-8">
              <p className="text-xs uppercase tracking-[0.5em] text-emerald-200">
                Culture
              </p>
              <p className="mt-4 text-lg font-semibold">
                Calm, curious, and relentlessly helpful.
              </p>
              <p className="mt-4 text-sm text-slate-300">
                We value transparency, craft, and accountability. We solve
                problems together, document what we learn, and celebrate wins as
                a team.
              </p>
              <p className="mt-6 text-sm text-slate-400">
                Interested but do not see your role? Reach out and introduce
                yourself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
