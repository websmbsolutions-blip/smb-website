import { useEffect, useState } from "react";
import { sanityClient } from "../sanity/client";
import { projectsQuery } from "../sanity/queries";
import { Link } from "react-router-dom";

const fallbackProjects = [
  {
    _id: "atlas",
    title: "Atlas Logistics Modernization",
    summary:
      "Unified dispatch, inventory, and field devices into a single cloud command center.",
    industry: "Logistics",
    techStack: ["Azure", "Kubernetes", "Power BI"],
  },
  {
    _id: "lighthouse",
    title: "Lighthouse Security Overhaul",
    summary:
      "Implemented zero-trust identity and 24/7 threat response for a 5-location firm.",
    industry: "Professional Services",
    techStack: ["Microsoft Entra", "Sentinel", "Intune"],
  },
  {
    _id: "brightline",
    title: "Brightline Recovery Program",
    summary:
      "Reduced RPO/RTO from days to hours with a tailored continuity plan.",
    industry: "Healthcare",
    techStack: ["Veeam", "Azure Backup", "VMware"],
  },
  {
    _id: "foundry",
    title: "Foundry Data Automation",
    summary:
      "Connected ERP, CRM, and finance for real-time operational dashboards.",
    industry: "Manufacturing",
    techStack: ["Snowflake", "dbt", "Power BI"],
  },
  {
    _id: "coastline",
    title: "Coastline Cloud Cost Reset",
    summary:
      "Trimmed monthly spend by 28% while improving performance and resilience.",
    industry: "Retail",
    techStack: ["AWS", "Terraform", "Datadog"],
  },
  {
    _id: "summit",
    title: "Summit Workforce Mobility",
    summary:
      "Enabled secure remote operations for a 300-seat distributed team.",
    industry: "Consulting",
    techStack: ["Microsoft 365", "Intune", "Zero Trust"],
  },
];

const metrics = [
  { value: "120+", label: "Projects delivered" },
  { value: "45%", label: "Average efficiency gain" },
  { value: "99.9%", label: "Uptime achieved" },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let active = true;

    sanityClient
      .fetch(projectsQuery)
      .then((data) => {
        if (active && Array.isArray(data)) {
          setProjects(data);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  const projectsToShow = projects.length > 0 ? projects : fallbackProjects;

  return (
    <div className="space-y-20 pb-24">
      <section>
        <div className="mx-auto w-full max-w-6xl px-6 pt-12 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                Projects
              </p>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
                Real outcomes for real businesses.
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                From cloud migrations to security transformations, every project
                is built around measurable results and long-term resiliency.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-emerald-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-emerald-300"
                >
                  Start a Project
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-slate-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
                >
                  Request a Case Study
                </Link>
              </div>
            </div>
            <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">
                Impact Metrics
              </p>
              <div className="mt-6 space-y-6">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-2xl font-semibold text-slate-100">
                      {metric.value}
                    </p>
                    <p className="text-sm text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-slate-800/70 bg-slate-950/50 p-4 text-sm text-slate-400">
                Project dashboards, executive summaries, and post-launch
                performance reviews included.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {projectsToShow.map((project) => (
              <div
                key={project._id}
                className="overflow-hidden rounded-[28px] border border-slate-800/70 bg-slate-900/60"
              >
                {project.coverImageUrl ? (
                  <img
                    src={project.coverImageUrl}
                    alt={project.title}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-44 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
                )}
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {project.industry}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
              Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Built for complex environments with lean teams.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                "Cloud migration & modernization",
                "Security assessments & remediation",
                "Network redesign & segmentation",
                "Data platforms & analytics",
                "Business continuity planning",
                "IT strategy & roadmap delivery",
              ].map((capability) => (
                <div
                  key={capability}
                  className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4 text-sm text-slate-300"
                >
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
