import { useState } from "react";
import { FiClock, FiTool } from "react-icons/fi";
import { FaCarSide, FaMotorcycle } from "react-icons/fa";

const initialServices = [
  {
    id: 1,
    name: "General Car Service",
    description:
      "Complete inspection, fluids, filters, and essential maintenance.",
    category: "Car",
    price: 180,
    duration: 120,
    bookings: 84,
    active: true,
  },
];

function ServiceIcon({ category }) {
  return category === "Car" ? (
    <FaCarSide size={22} />
  ) : (
    <FaMotorcycle size={22} />
  );
}

function SummaryCard({ title, value }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
    </article>
  );
}

const Services = () => {
  const [services, setServices] = useState(initialServices);

  const totalBookings = services.reduce(
    (total, service) => total + service.bookings,
    0
  );

  const activeCount = services.filter(
    (service) => service.active
  ).length;

  const averagePrice =
    services.length > 0
      ? Math.round(
          services.reduce(
            (total, service) => total + service.price,
            0
          ) / services.length
        )
      : 0;

  const toggleService = (serviceId) => {
    setServices((current) =>
      current.map((service) =>
        service.id === serviceId
          ? { ...service, active: !service.active }
          : service
      )
    );
  };

  return (
    <main className="min-w-0 flex-1 bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px] space-y-6">
        <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b2d89]">
              Service Catalog
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Services
            </h1>

            <p className="mt-2 text-slate-500">
              Manage pricing, duration, availability, and vehicle categories.
            </p>
          </div>
          <button className="bg-blue-800 text-white pl-5 pr-5 text-2xl pt-2 pb-2 rounded-2xl">Edit Services</button>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            title="Total Services"
            value={services.length}
          />

          <SummaryCard
            title="Total Bookings"
            value={totalBookings}
          />

          <SummaryCard
            title="Active Services"
            value={activeCount}
          />

          <SummaryCard
            title="Average Price"
            value={`₹${averagePrice}`}
          />
        </section>

        
          <section className="grid w-full grid-cols-1 gap-5 ">
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
  <div className="hidden md:grid grid-cols-12 gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-600">
    <div className="col-span-5">Service</div>
    <div className="col-span-2">Price</div>
    <div className="col-span-2">Duration</div>
    <div className="col-span-3 text-right">Active</div>
  </div>

  {services.map((service) => (
    <div
      key={service.id}
      className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b border-slate-100 px-6 py-5 last:border-b-0"
    >
      {/* Service Info */}
      <div className="col-span-5 flex items-start gap-4">
        

        <div>
          <h3 className="font-semibold text-slate-900">
            {service.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {service.description}
          </p>
        </div>
      </div>

      {/* Editable Price */}
      <div className="col-span-2">
        <input
        disabled
          type="number"
          value={service.price}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
      </div>

      {/* Editable Duration */}
      <div className="col-span-2">
        <input
        disabled
          type="number"
          value={service.duration}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
      </div>


        
     

      {/* Active Toggle */}
      <div className="col-span-3 flex justify-end">
        <button
          onClick={() => toggleService(service.id)}
          className={`relative h-7 w-12 rounded-full transition ${
            service.active ? "bg-[#0b2d89]" : "bg-slate-300"
          }`}
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
              service.active ? "left-6" : "left-1"
            }`}
          />
        </button>
      </div>
    </div>
  ))}
</section>
          </section>
        
      </div>
    </main>
  );
};

export default Services;