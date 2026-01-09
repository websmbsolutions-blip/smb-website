import { useEffect, useState } from "react";
import { sanityClient } from "../sanity/client";
import { teamMembersQuery } from "../sanity/queries";

export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient.fetch(teamMembersQuery)
      .then((data) => setTeam(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading…</div>;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">Our Team</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <div key={m._id} className="rounded-xl border p-6">
            {m.photoUrl ? (
              <img
                src={m.photoUrl}
                alt={m.name}
                className="mb-4 aspect-square w-full rounded-lg object-cover"
                loading="lazy"
              />
            ) : null}

            <h2 className="text-xl font-semibold">{m.name}</h2>
            <p className="text-sm text-neutral-500">{m.role}</p>
            {m.bio ? <p className="mt-2 text-sm">{m.bio}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
