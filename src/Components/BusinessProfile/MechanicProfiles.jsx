import { useMemo, useState } from "react";
import { FiMail, FiPhone, FiPlus, FiUsers } from "react-icons/fi";

const initialMechanics = [
  {
    id: 1,
    name: "Marcus Thorne",
    initials: "MT",
    role: "Senior Engine Specialist",
    specialty: "Engine",
    phone: "+1 (555) 012-3456",
    email: "marcus@precisionauto.com",
    experience: 12,
    jobs: 1420,
    rating: 4.9,
    activeJobs: 2,
    status: "Active",
    skills: ["Engine Repair", "Diagnostics", "Transmission"],
  },
];

function SummaryCard({ title, value }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
    </article>
  );
}

const MechanicProfiles = () => {
  const [mechanics] = useState(initialMechanics);

  const activeCount = mechanics.filter(
    (mechanic) => mechanic.status === "Active",
  ).length;
  const activeJobs = mechanics.reduce(
    (total, mechanic) => total + mechanic.activeJobs,
    0,
  );
  const averageRating = useMemo(() => {
    if (!mechanics.length) return 0;
    return (
      mechanics.reduce((total, mechanic) => total + mechanic.rating, 0) /
      mechanics.length
    );
  }, [mechanics]);
  const totalJobs = mechanics.reduce(
    (total, mechanic) => total + mechanic.jobs,
    0,
  );

  return (
    <main className="min-w-0 flex-1 bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px] space-y-6">
        <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b2d89]">
              Team management
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Mechanics
            </h1>
            <p className="mt-2 text-slate-500">
              Manage your workshop team, availability, skills, and performance.
            </p>
          </div>

          <button className="flex h-12 items-center justify-center gap-2 self-start rounded-xl bg-[#0b2d89] px-5 font-semibold text-white transition hover:bg-blue-900 sm:self-auto">
            <FiPlus />
            Add mechanic
          </button>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SummaryCard title="Total Mechanics" value={mechanics.length} />
          <SummaryCard title="Active Mechanics" value={activeCount} />
          <SummaryCard title="Active Jobs" value={activeJobs} />
          <SummaryCard title="Jobs Completed" value={totalJobs.toLocaleString()} />
        </section>

        <section className="grid grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
          {mechanics.map((mechanic) => (
            <article
              key={mechanic.id}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0b2d89] text-lg font-bold text-white">
                    {mechanic.initials}
                  </div>
                  <div className="min-w-0">
                    <h2 className="truncate text-xl font-bold text-slate-900">
                      {mechanic.name}
                    </h2>
                    <p className="truncate text-sm text-slate-500">
                      {mechanic.role}
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {mechanic.status}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-400">Experience</p>
                  <p className="mt-1 font-bold text-slate-900">
                    {mechanic.experience} yrs
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-400">Jobs done</p>
                  <p className="mt-1 font-bold text-slate-900">
                    {mechanic.jobs.toLocaleString()}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-400">Rating</p>
                  <p className="mt-1 font-bold text-slate-900">
                    {mechanic.rating.toFixed(1)}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <a
                  href={`tel:${mechanic.phone}`}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2.5 text-sm text-slate-600"
                >
                  <FiPhone className="shrink-0 text-slate-400" />
                  {mechanic.phone}
                </a>
                <a
                  href={`mailto:${mechanic.email}`}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2.5 text-sm text-slate-600"
                >
                  <FiMail className="shrink-0 text-slate-400" />
                  <span className="truncate">{mechanic.email}</span>
                </a>
              </div>
            </article>
          ))}
        </section>

        {mechanics.length === 0 && (
          <section className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <FiUsers size={24} />
            </div>
            <h2 className="mt-4 text-lg font-bold text-slate-800">
              No mechanics found
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or team filters.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Average rating: {averageRating.toFixed(1)}
            </p>
          </section>
        )}
      </div>
    </main>
  );
};

export default MechanicProfiles;
