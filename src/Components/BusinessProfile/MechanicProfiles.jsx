import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { FiMail, FiPhone, FiPlus, FiUsers } from "react-icons/fi";
import api from "../../data/axios/Axios";
import { useNavigate } from "react-router-dom";

const initialMechanics = [
  {
    id: 1,
    name: "Marcus Thorne",
    phone: "+1 (555) 012-3456",
    email: "marcus@precisionauto.com",
    experience: 12,
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
  const [mechanics,setmechanics] = useState(initialMechanics);
const [editingId, setEditingId] = useState(null);

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

  const handlegetapi = async () =>
{
  try{
    const res = await api.get("/Mechanic");
    console.log(res.data.data);
    setmechanics(res.data.data);
  }
  catch(err)
  {
    console.log(err);
  }

}

const nav = useNavigate();

const addmechanic = ( ) =>
{
  nav('/businessprofilepage/addmechanic');
}

useEffect(()=>{handlegetapi()},[]);

const changeedit = (id) => {
  setEditingId(id);
};

const handleChange = (id, field, value) => {
  setmechanics((prev) =>
    prev.map((mechanic) =>
      mechanic.id === id
        ? { ...mechanic, [field]: value }
        : mechanic
    )
  );
};

const handleSave = async (mechanic) => {
  try {
    const res = await api.put(`/Mechanic`, mechanic);

    console.log(res.data);

    setEditingId(null);
  } catch (err) {
    console.log(err);
  }
};

const handledelte = async (mechanic) =>
{
  try
  {
     const res = await api.delete(`/Mechanic/${mechanic.id}`);
     console.log(res.data);
      }
      catch(err)
      {
        console.log(err);
      }
}


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

          <button onClick={addmechanic} className="flex h-12 items-center justify-center gap-2 self-start rounded-xl bg-[#0b2d89] px-5 font-semibold text-white transition hover:bg-blue-900 sm:self-auto">
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
                 
              
                  <div className="min-w-0">
                    <input
  disabled={editingId !== mechanic.id}
  value={mechanic.name}
  onChange={(e) =>
    handleChange(mechanic.id, "name", e.target.value)
  }
/>
             
                
                  </div>
                </div>

       
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-400">Experience</p>
                 <input
  disabled={editingId !== mechanic.id}
  value={mechanic.experience}
  onChange={(e) =>
    handleChange(mechanic.id, "experience", e.target.value)
  }
/>
                
                </div>
               
               
              </div>

              <div className="mt-5 space-y-2">
                <input
  disabled={editingId !== mechanic.id}
  value={mechanic.phone}
  onChange={(e) =>
    handleChange(mechanic.id, "phone", e.target.value)
  }
/>
               <input
  disabled={editingId !== mechanic.id}
  value={mechanic.email}
  onChange={(e) =>
    handleChange(mechanic.id, "email", e.target.value)
  }
/>
              </div>

              <div className="flex space-x-20 text-center w-40 justify-center ">
                {editingId === mechanic.id ? (
  <>
    <button onClick={() => handleSave(mechanic)}>
      Save
    </button>

    <button onClick={() => setEditingId(null)}>
      Cancel
    </button>
  </>
) : (
  <>
    <button onClick={() => changeedit(mechanic.id)}>
      Edit
    </button>

    <button onClick={()=>handledelte(mechanic)}>
      Delete
    </button>
  </>
)}
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
