import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../sanity/client";
import { featuredProjectsQuery, teamMembersQuery } from "../sanity/queries";

const services = [
  {
    title: "Managed IT & Helpdesk",
    description: "24/7 monitoring, rapid response, and device management.",
    outcome: "Reduce downtime and get predictable support.",
  },
  {
    title: "Cloud & Infrastructure",
    description: "Migration, modernization, and cost governance.",
    outcome: "Scale securely without surprise bills.",
  },
  {
    title: "Cybersecurity",
    description: "Threat detection, identity, and compliance readiness.",
    outcome: "Cut risk with a layered defense strategy.",
  },
  {
    title: "Business Continuity",
    description: "Backup, recovery, and incident response planning.",
    outcome: "Stay resilient through outages and disasters.",
  },
  {
    title: "Automation & Data",
    description: "Workflow automation, dashboards, and analytics.",
    outcome: "Turn data into real-time decisions.",
  },
  {
    title: "vCIO Advisory",
    description: "Roadmaps, budgeting, and vendor accountability.",
    outcome: "Make IT a growth lever, not a cost center.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description: "We learn your business goals, systems, and risks.",
  },
  {
    title: "Blueprint",
    description: "We map a clear plan with milestones and budgets.",
  },
  {
    title: "Execution",
    description: "We implement, migrate, and secure with zero drama.",
  },
  {
    title: "Optimize",
    description: "We measure outcomes and continuously improve.",
  },
];

const industries = [
  "Professional Services",
  "Healthcare Clinics",
  "Logistics & Warehousing",
  "Construction",
  "Financial & Legal",
  "Retail & eCommerce",
  "Manufacturing",
  "Hospitality",
  "Nonprofits",
];

const trustStats = [
  { value: "18+", label: "Years supporting SMBs" },
  { value: "98%", label: "Client retention rate" },
  { value: "24/7", label: "Monitoring coverage" },
  { value: "30 min", label: "Average response time" },
];

const testimonials = [
  {
    quote:
      "SMB Solutions feels like an extension of our leadership team. No surprises, no jargon, just clear answers.",
    name: "Lena Brooks",
    title: "COO, Northwind Partners",
  },
  {
    quote:
      "They modernized our stack without downtime and gave us a roadmap we finally trust.",
    name: "Chris Delgado",
    title: "Founder, Vista Health",
  },
];

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
];

const fallbackTeam = [
  {
    _id: "jordan",
    name: "Jordan Patel",
    role: "Head of Client Success",
  },
  {
    _id: "sasha",
    name: "Sasha Nguyen",
    role: "Security Operations Lead",
  },
  {
    _id: "mike",
    name: "Mike Alvarez",
    role: "Cloud Solutions Architect",
  },
];

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    let active = true;

    sanityClient
      .fetch(featuredProjectsQuery)
      .then((data) => {
        if (active && Array.isArray(data)) {
          setFeaturedProjects(data);
        }
      })
      .catch(() => {});

    sanityClient
      .fetch(teamMembersQuery)
      .then((data) => {
        if (active && Array.isArray(data)) {
          setTeamMembers(data);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  const projectsToShow =
    featuredProjects.length > 0 ? featuredProjects : fallbackProjects;
  const teamToShow = teamMembers.length > 0 ? teamMembers : fallbackTeam;

  return (
    <div className="space-y-24 pb-24">
      <section className="relative">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-emerald-300">
                SMB Solutions
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                Proactive IT partnerships that keep your business moving.
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                We help growing companies stabilize their infrastructure, secure
                their data, and build a clear technology roadmap.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-emerald-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 shadow-[0_0_30px_rgba(52,211,153,0.35)] transition hover:bg-emerald-300"
                >
                  Get a Consultation
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-slate-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
                >
                  Talk to an Expert
                </Link>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-2xl font-semibold text-slate-100">18+</p>
                  <p className="text-sm text-slate-400">
                    Years delivering accountable IT for SMBs
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-slate-100">
                    Zero guesswork
                  </p>
                  <p className="text-sm text-slate-400">
                    Clear SLAs, dashboards, and monthly reporting
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-r from-emerald-500/20 via-cyan-500/10 to-transparent blur-2xl" />
              <div className="relative rounded-[32px] border border-slate-800/80 bg-slate-900/70 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      Live Operations
                    </p>
                    <p className="mt-2 text-2xl font-semibold">
                      Command Center
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    Stable
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      label: "Security posture",
                      value: "92/100",
                      status: "Managed",
                    },
                    {
                      label: "Cloud spend",
                      value: "On track",
                      status: "Optimized",
                    },
                    {
                      label: "Helpdesk SLAs",
                      value: "29 min",
                      status: "Avg response",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4"
                    >
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>{item.label}</span>
                        <span className="text-xs text-slate-500">
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-2 text-lg font-semibold text-slate-100">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-800/70 bg-gradient-to-r from-slate-900/80 to-slate-950/60 p-4 text-sm text-slate-300">
                  <span>Quarterly Roadmap Review</span>
                  <span className="text-emerald-200">Scheduled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                What We Do
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Outcome-driven services that unlock focus and growth.
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              Every engagement starts with clarity. We align technology to
              business goals, then keep it measured, secured, and predictable.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-slate-900/0 to-emerald-500/10 opacity-0 transition group-hover:opacity-100" />
                <div className="relative">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-400">
                    {service.description}
                  </p>
                  <p className="mt-6 text-sm font-semibold text-emerald-200">
                    {service.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8">
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                Why SMB Solutions
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                A local partner with enterprise-grade accountability.
              </h2>
              <p className="mt-4 text-sm text-slate-400">
                We bring the reliability of a large IT department with the
                responsiveness of a dedicated partner. No handoffs. No hidden
                complexity.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Experience",
                    body: "Deep bench of engineers, architects, and security specialists.",
                  },
                  {
                    title: "Reliability",
                    body: "Measured SLAs, proactive alerts, and documented playbooks.",
                  },
                  {
                    title: "Local Presence",
                    body: "On-site response across regional offices and remote teams.",
                  },
                  {
                    title: "Accountability",
                    body: "A single partner for vendors, licensing, and strategy.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-[28px] border border-slate-800/70 bg-gradient-to-br from-slate-900/90 to-slate-950/70 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                  Partnership Focus
                </p>
                <h3 className="mt-4 text-2xl font-semibold">
                  Your IT strategy, co-owned.
                </h3>
                <p className="mt-3 text-sm text-slate-400">
                  We align technology priorities with leadership, finance, and
                  operations so IT decisions stay transparent.
                </p>
              </div>
              <div className="rounded-[28px] border border-slate-800/70 bg-slate-900/60 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  Continuous Improvement
                </p>
                <h3 className="mt-4 text-2xl font-semibold">
                  Measurable outcomes, every quarter.
                </h3>
                <p className="mt-3 text-sm text-slate-400">
                  Executive reports, security scorecards, and optimization
                  sessions keep you ahead of change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                How We Work
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Simple, transparent, and built around your team.
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              You always know what is happening, why it matters, and how we are
              measuring success.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/50 text-sm font-semibold text-emerald-200">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
              Who We Help
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Teams that need calm, capable IT leadership.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-slate-400">
              From 25 to 500 employees, we partner with leaders who need reliable
              infrastructure and a roadmap that scales with them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-slate-700/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                Trust Signals
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Proof, not promises.
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {trustStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6"
                  >
                    <p className="text-2xl font-semibold text-emerald-200">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                <span>ISO 27001 aligned</span>
                <span>Microsoft Partner</span>
                <span>CIS Controls</span>
                <span>HIPAA Ready</span>
              </div>
            </div>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-[28px] border border-slate-800/70 bg-slate-900/60 p-6"
                >
                  <p className="text-sm text-slate-300">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-4 text-xs uppercase tracking-[0.3em] text-emerald-200">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {testimonial.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                Projects
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Recent wins powered by resilient infrastructure.
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200"
            >
              View all projects
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projectsToShow.slice(0, 3).map((project) => (
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
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
                Our Team
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Meet the experts behind the calm.
              </h2>
            </div>
            <Link
              to="/team"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200"
            >
              See full team
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {teamToShow.slice(0, 3).map((member) => (
              <div
                key={member._id}
                className="rounded-[28px] border border-slate-800/70 bg-slate-900/60 p-6"
              >
                {member.photoUrl ? (
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="mb-4 h-44 w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="mb-4 h-44 w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900" />
                )}
                <p className="text-lg font-semibold">{member.name}</p>
                <p className="text-sm text-slate-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-[36px] border border-emerald-400/20 bg-gradient-to-r from-emerald-500/15 via-slate-900/70 to-slate-950/80 p-10 md:p-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-emerald-200">
                  Call to Action
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Ready for a clearer, calmer IT partnership?
                </h2>
                <p className="mt-4 max-w-xl text-sm text-slate-300">
                  Tell us where you are today and what you want to achieve. We
                  will map the next right steps with zero pressure.
                </p>
              </div>
              <Link
                to="/contact"
                className="rounded-full bg-emerald-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 shadow-[0_0_30px_rgba(52,211,153,0.4)] transition hover:bg-emerald-300"
              >
                Start the Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
