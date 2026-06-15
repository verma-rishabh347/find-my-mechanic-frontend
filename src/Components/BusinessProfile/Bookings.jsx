import { useMemo, useState } from "react";
import {
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiEye,
  FiFilter,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSearch,
  FiTool,
  FiUser,
  FiX,
} from "react-icons/fi";

const initialBookings = [

  {
    id: "BK-2049",
    customer: "Sophia Wilson",
    phone: "+1 (555) 487-1034",
    email: "sophia.wilson@email.com",
    vehicle: "Audi A4",
    vehicleDetails: "2020 · White · DL 3F CD 7712",
    service: "Brake Inspection",
    mechanic: "Daniel Cooper",
    date: "Jun 12, 2026",
    time: "11:00 AM",
    duration: "1 hr",
    price: 90,
    status: "Confirmed",
    notes: "Inspect front brake pads and check brake fluid level.",
  },

];

const filters = ["All", "Pending", "Confirmed", "In Progress", "Completed", "Cancelled"];



function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

function SummaryCard({ title, value, color }) {
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

const Bookings = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredBookings = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return bookings.filter((booking) => {
      const matchesFilter =
        activeFilter === "All" || booking.status === activeFilter;
      const matchesSearch =
        !query ||
        booking.customer.toLowerCase().includes(query) ||
        booking.id.toLowerCase().includes(query) ||
        booking.vehicle.toLowerCase().includes(query) ||
        booking.service.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, bookings, searchTerm]);

  const updateStatus = (bookingId, status) => {
    setBookings((current) =>
      current.map((booking) =>
        booking.id === bookingId ? { ...booking, status } : booking,
      ),
    );
    setSelectedBooking((current) =>
      current?.id === bookingId ? { ...current, status } : current,
    );
  };

  const pendingCount = bookings.filter(
    (booking) => booking.status === "Pending",
  ).length;
  const activeCount = bookings.filter(
    (booking) =>
      booking.status === "Confirmed" || booking.status === "In Progress",
  ).length;
  const completedCount = bookings.filter(
    (booking) => booking.status === "Completed",
  ).length;
  const confirmedRevenue = bookings
    .filter((booking) => booking.status !== "Cancelled")
    .reduce((total, booking) => total + booking.price, 0);

  return (
    <main className="min-w-0 flex-1 bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px] space-y-6">
        <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b2d89]">
              Appointment management
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Bookings
            </h1>
            <p className="mt-2 text-slate-500">
              Track appointments, assign work, and update service progress.
            </p>
          </div>

         
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            title="Pending Requests"
            value={pendingCount}
            
          />
          <SummaryCard
            title="Active Bookings"
            value={activeCount}
            

          />
          <SummaryCard
            title="Completed"
            value={completedCount}
           

          />
          <SummaryCard
            title="Booking Value"
            value={`$${confirmedRevenue}`}
          />
        </section>

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              

              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      activeFilter === filter
                        ? "bg-[#0b2d89] text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">Customer</th>
                  <th className="px-6 py-4 font-semibold">Vehicle & Service</th>
                  <th className="px-6 py-4 font-semibold">Schedule</th>
                  <th className="px-6 py-4 font-semibold">Mechanic</th>
                  <th className="px-6 py-4 font-semibold">Amount</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="transition hover:bg-slate-50/80"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                       
                        <div>
                          <p className="font-semibold text-slate-900">
                            {booking.customer}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-400">
                            {booking.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-semibold text-slate-800">
                        {booking.vehicle}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {booking.service}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <FiCalendar className="text-slate-400" />
                        {booking.date}
                      </p>
                      <p className="mt-1.5 flex items-center gap-2 text-sm text-slate-500">
                        <FiClock className="text-slate-400" />
                        {booking.time}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <FiUser className="text-slate-400" />
                        {booking.mechanic}
                      </p>
                    </td>
                    <td className="px-6 py-5 font-bold text-slate-900">
                      ${booking.price}
                    </td>
                    <td className="px-6 py-5">
                      {booking.status} 
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-end gap-2">
                        
                        <button
                       
                          title="View booking details"
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#0b2d89]"
                        >
                          <FiEye />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="flex flex-col items-center px-6 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <FiCalendar size={24} />
              </div>
              <h3 className="mt-4 font-bold text-slate-800">No bookings found</h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing the search text or selected status.
              </p>
            </div>
          )}

          
        </section>
      </div>

      {selectedBooking && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-slate-950/40 backdrop-blur-[2px]"
          onClick={() => setSelectedBooking(null)}
        >
          <aside
            className="h-full w-full max-w-lg overflow-y-auto bg-white p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0b2d89]">
                  {selectedBooking.id}
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Booking details
                </h2>
              </div>
              <button
                onClick={() => setSelectedBooking(null)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              >
                <FiX />
              </button>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b2d89] font-bold text-white">
                  {selectedBooking.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    {selectedBooking.customer}
                  </p>
                  <p className="text-sm text-slate-500">Customer</p>
                </div>
              </div>
              <StatusBadge status={selectedBooking.status} />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={`tel:${selectedBooking.phone}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4"
              >
                <FiPhone className="shrink-0 text-[#0b2d89]" />
                <span className="truncate text-sm font-medium text-slate-700">
                  {selectedBooking.phone}
                </span>
              </a>
              <a
                href={`mailto:${selectedBooking.email}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4"
              >
                <FiMail className="shrink-0 text-[#0b2d89]" />
                <span className="truncate text-sm font-medium text-slate-700">
                  {selectedBooking.email}
                </span>
              </a>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Vehicle
                </p>
                <p className="mt-2 text-lg font-bold text-slate-900">
                  {selectedBooking.vehicle}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {selectedBooking.vehicleDetails}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Service information
                </p>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-bold text-slate-900">
                      {selectedBooking.service}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Assigned to {selectedBooking.mechanic}
                    </p>
                  </div>
                  <p className="text-xl font-bold text-[#0b2d89]">
                    ${selectedBooking.price}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <FiCalendar className="text-[#0b2d89]" />
                  <p className="mt-3 text-xs text-slate-500">Date & time</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    {selectedBooking.date}
                  </p>
                  <p className="text-sm text-slate-600">{selectedBooking.time}</p>
                </div>
                <div className="rounded-2xl bg-violet-50 p-4">
                  <FiClock className="text-violet-700" />
                  <p className="mt-3 text-xs text-slate-500">Duration</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    {selectedBooking.duration}
                  </p>
                  <p className="text-sm text-slate-600">Estimated</p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  <FiMapPin />
                  Customer notes
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {selectedBooking.notes}
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              {selectedBooking.status === "Pending" && (
                <button
                  onClick={() => updateStatus(selectedBooking.id, "Confirmed")}
                  className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 font-semibold text-white transition hover:bg-emerald-700"
                >
                  <FiCheck />
                  Confirm
                </button>
              )}
              {selectedBooking.status === "Confirmed" && (
                <button
                  onClick={() => updateStatus(selectedBooking.id, "In Progress")}
                  className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#0b2d89] font-semibold text-white transition hover:bg-blue-900"
                >
                  <FiTool />
                  Start service
                </button>
              )}
              {selectedBooking.status === "In Progress" && (
                <button
                  onClick={() => updateStatus(selectedBooking.id, "Completed")}
                  className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 font-semibold text-white transition hover:bg-violet-700"
                >
                  <FiCheckCircle />
                  Mark completed
                </button>
              )}
              {!["Completed", "Cancelled"].includes(selectedBooking.status) && (
                <button
                  onClick={() => updateStatus(selectedBooking.id, "Cancelled")}
                  className="flex h-12 items-center justify-center gap-2 rounded-xl border border-rose-200 px-5 font-semibold text-rose-600 transition hover:bg-rose-50"
                >
                  <FiX />
                  Cancel
                </button>
              )}
              {["Completed", "Cancelled"].includes(selectedBooking.status) && (
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="h-12 flex-1 rounded-xl bg-slate-900 font-semibold text-white"
                >
                  Close details
                </button>
              )}
            </div>
          </aside>
        </div>
      )}
    </main>
  );
};

export default Bookings;
