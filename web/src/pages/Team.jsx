import { useEffect, useState } from "react";
import { sanityClient } from "../sanity/client";
import { teamMembersQuery } from "../sanity/queries";

const fallbackTeam = [
  {
    _id: "jordan",
    name: "Jordan Patel",
    role: "Head of Client Success",
    bio: "Transforms complex operations into clear, measurable roadmaps.",
  },
  {
    _id: "sasha",
    name: "Sasha Nguyen",
    role: "Security Operations Lead",
    bio: "Leads threat detection, incident response, and security posture.",
  },
  {
    _id: "mike",
    name: "Mike Alvarez",
    role: "Cloud Solutions Architect",
    bio: "Designs resilient cloud infrastructure for fast-moving teams.",
  },
];

export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient.fetch(teamMembersQuery)
      .then((data) => setTeam(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 py-20 text-slate-400">
        Loading team...
      </div>
    );
  }

  const teamToShow = team.length > 0 ? team : fallbackTeam;

  return (
    <div className="space-y-16 pb-24">
      <section>
        <div className="mx-auto w-full max-w-6xl px-6 pt-12 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                Our Team
              </p>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
                People-first experts who keep your systems steady.
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                We combine deep technical capability with clear communication
                and accountability. You always know who is working on your
                systems and why.
              </p>
            </div>
            <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">
                Team Promise
              </p>
              <p className="mt-4 text-lg font-semibold">
                Responsive, respectful, and relentlessly thorough.
              </p>
              <p className="mt-4 text-sm text-slate-300">
                Every client gets a dedicated pod of engineers, security
                analysts, and a vCIO partner.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-800/70 bg-slate-950/50 p-4 text-sm text-slate-400">
                Average tenure: 6.5 years.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamToShow.map((member) => (
              <div
                key={member._id}
                className="rounded-[28px] border border-slate-800/70 bg-slate-900/60 p-6"
              >
                {member.photoUrl ? (
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="mb-4 aspect-square w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="mb-4 aspect-square w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900" />
                )}

                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="text-sm text-slate-400">{member.role}</p>
                {member.bio ? (
                  <p className="mt-3 text-sm text-slate-300">{member.bio}</p>
                ) : null}
                {member.linkedinUrl ? (
                  <a
                    href={member.linkedinUrl}
                    className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200"
                  >
                    LinkedIn
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
