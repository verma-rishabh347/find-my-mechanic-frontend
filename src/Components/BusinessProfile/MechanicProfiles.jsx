import { useMemo, useState } from "react";
import {
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiEdit2,
  FiFilter,
  FiMail,
  FiPhone,
  FiPlus,
  FiSearch,
  FiStar,
  FiTool,
  FiTrash2,
  FiUserCheck,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";

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
  {
    id: 2,
    name: "Daniel Cooper",
    initials: "DC",
    role: "Brake & Suspension Expert",
    specialty: "Brakes",
    phone: "+1 (555) 214-7720",
    email: "daniel@precisionauto.com",
    experience: 9,
    jobs: 1086,
    rating: 4.8,
    activeJobs: 1,
    status: "Active",
    skills: ["Brake Systems", "Suspension", "Wheel Alignment"],
  },

];

const emptyForm = {
  name: "",
  role: "",
  specialty: "Engine",
  phone: "",
  email: "",
  experience: "",
  status: "Active",
  skills: "",
};

const statusFilters = ["All", "Active", "On Leave", "Inactive"];
const specialties = [
  "Engine",
  "Brakes",
  "General Service",
  "Electrical",
  "AC Service",
  "Bodywork",
];

const statusStyles = {
  Active: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "On Leave": "bg-amber-50 text-amber-700 ring-amber-200",
  Inactive: "bg-slate-100 text-slate-500 ring-slate-200",
};

function SummaryCard({ title, value, detail, icon: Icon, color }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
          
        </div>
        
      </div>
    </article>
  );
}

const MechanicProfiles = () => {
  const [mechanics, setMechanics] = useState(initialMechanics);
  const [activeStatus, setActiveStatus] = useState("All");
  const [activeSpecialty, setActiveSpecialty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const filteredMechanics = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return mechanics.filter((mechanic) => {
      const matchesStatus =
        activeStatus === "All" || mechanic.status === activeStatus;
      const matchesSpecialty =
        activeSpecialty === "All" || mechanic.specialty === activeSpecialty;
      const matchesSearch =
        !query ||
        mechanic.name.toLowerCase().includes(query) ||
        mechanic.role.toLowerCase().includes(query) ||
        mechanic.specialty.toLowerCase().includes(query) ||
        mechanic.skills.some((skill) => skill.toLowerCase().includes(query));

      return matchesStatus && matchesSpecialty && matchesSearch;
    });
  }, [activeSpecialty, activeStatus, mechanics, searchTerm]);

  const activeCount = mechanics.filter(
    (mechanic) => mechanic.status === "Active",
  ).length;
  const activeJobs = mechanics.reduce(
    (total, mechanic) => total + mechanic.activeJobs,
    0,
  );
  const averageRating =
    mechanics.reduce((total, mechanic) => total + mechanic.rating, 0) /
    mechanics.length;
  const totalJobs = mechanics.reduce(
    (total, mechanic) => total + mechanic.jobs,
    0,
  );





  

  const saveMechanic = (event) => {
    event.preventDefault();

    const mechanicData = {
      ...form,
      name: form.name.trim(),
      role: form.role.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      experience: Number(form.experience),
      skills: form.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    };

    if (editingId) {
      setMechanics((current) =>
        current.map((mechanic) =>
          mechanic.id === editingId
            ? { ...mechanic, ...mechanicData }
            : mechanic,
        ),
      );
    } else {
      const initials = mechanicData.name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

      setMechanics((current) => [
        {
          ...mechanicData,
          id: Date.now(),
          initials,
          jobs: 0,
          rating: 5,
          activeJobs: 0,
        },
        ...current,
      ]);
    }

    closeModal();
  };

  const toggleAvailability = (mechanicId) => {
    setMechanics((current) =>
      current.map((mechanic) =>
        mechanic.id === mechanicId
          ? {
              ...mechanic,
              status: mechanic.status === "Active" ? "Inactive" : "Active",
            }
          : mechanic,
      ),
    );
  };

  

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

          <button
           
            className="flex h-12 items-center justify-center gap-2 self-start rounded-xl bg-[#0b2d89] px-5 font-semibold text-white transition hover:bg-blue-900 sm:self-auto"
          >
            <FiPlus />
            Add mechanic
          </button>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            title="Total Mechanics"
            value={mechanics.length}
            detail={`${activeCount} currently available`}
            color="bg-blue-50 text-blue-700"
          />
          
          
          <SummaryCard
            title="Jobs Completed"
            value={totalJobs.toLocaleString()}
            detail="Combined team experience"
            color="bg-emerald-50 text-emerald-700"
          />
        </section>

        

        {filteredMechanics.length > 0 ? (
          <section className="grid grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
            {filteredMechanics.map((mechanic) => (
              <article
                key={mechanic.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="truncate text-xl font-bold text-slate-900">
                          {mechanic.name}
                        </h2>
                        
                      </div>
                      
                    </div>
                  </div>

                 
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

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                  

                  <div className="flex gap-2">
                    <button
                      // onClick={() => openEditModal(mechanic)}
                      aria-label={`Edit ${mechanic.name}`}
                      className=" border text-white bg-blue-700 pl-3 pr-3 text-xl pt-1 pb-1 rounded-xl"
                    >
                      Edit
                    </button>
                    <button
                      // onClick={() => deleteMechanic(mechanic.id)}
                      aria-label={`Delete ${mechanic.name}`}
                      className=" border text-white bg-red-700 pl-3 pr-3 text-xl pt-1 pb-1 rounded-xl"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        ) : (
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
          </section>
        )}
      </div>

          </main>
  );
};

export default MechanicProfiles;
