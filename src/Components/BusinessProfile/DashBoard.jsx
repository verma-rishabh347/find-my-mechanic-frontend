import { Link } from "react-router-dom";
import {
  FiActivity,
  FiArrowUpRight,
  FiCalendar,
  FiCheckCircle,
  FiChevronRight,
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiPlus,
  FiStar,
  FiTool,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Revenue",
    value: "₹18,420",

  },
  {
    title: "Total Bookings",
    value: "248",

  },
  {
    title: "Jobs Completed",
    value: "196",

  },
  {
    title: "Average Rating",
    value: "4.9",

  }
];

const bookings = [
  {
    id: "BK-2048",
    customer: "Ethan Carter",
    vehicle: "BMW X5 · 2021",
    service: "Engine Diagnostics",
    time: "09:30 AM",
    status: "In Progress",
    statusClass: " text-blue-700",
  },
  {
    id: "BK-2049",
    customer: "Sophia Wilson",
    vehicle: "Audi A4 · 2020",
    service: "Brake Inspection",
    time: "11:00 AM",
    status: "Confirmed",
    statusClass: " text-emerald-700",
  },
  {
    id: "BK-2050",
    customer: "Liam Anderson",
    vehicle: "Ford Mustang · 2019",
    service: "Oil & Filter Change",
    time: "01:30 PM",
    status: "Confirmed",
    statusClass: " text-emerald-700",
  },
  {
    id: "BK-2051",
    customer: "Olivia Martin",
    vehicle: "Tesla Model 3 · 2022",
    service: "Tire Rotation",
    time: "03:00 PM",
    status: "Pending",
    statusClass: " text-amber-700",
  },
];


const activities = [
  {
    title: "Booking BK-2046 completed",
    detail: "Brake replacement · Michael Brown",
    time: "18 minutes ago",
    icon: FiCheckCircle,
    iconClass: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "New booking received",
    detail: "Oil & Filter Change · Olivia Martin",
    time: "42 minutes ago",
    icon: FiCalendar,
    iconClass: "bg-blue-50 text-blue-700",
  },
  {
    title: "New 5-star review",
    detail: "“Excellent service and quick turnaround.”",
    time: "2 hours ago",
    icon: FiStar,
    iconClass: "bg-amber-50 text-amber-700",
  },
  {
    title: "Mechanic profile updated",
    detail: "Daniel Cooper added two new skills",
    time: "Yesterday",
    icon: FiUsers,
    iconClass: "bg-violet-50 text-violet-700",
  },
];

const quickActions = [
  {
    label: "Add Service",
    detail: "Create a new shop service",
    to: "../services",
    icon: FiPlus,
  },
  {
    label: "Add Mechanic",
    detail: "Grow your service team",
    to: "../mechanicprofiles",
    icon: FiUserPlus,
  },
  {
    label: "Manage Bookings",
    detail: "Review customer requests",
    to: "../bookings",
    icon: FiCalendar,
  },
];

function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{stat.title}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {stat.value}
          </h2>
        </div>
        
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm">
      </div>
    </article>
  );
}

const DashBoard = () => {
  return (
    <main className="min-w-0 flex-1 bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px] space-y-6">
        <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b2d89]">
              Business Dashboard
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Welcome back, Marcus
            </h1>
            <p className="mt-2 text-slate-500">
              Here is what is happening at Precision Auto Care today.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:self-auto">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0b2d89]">
              <FiCalendar />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Today
              </p>
              <p className="text-sm font-semibold text-slate-800">
                Friday, June 12
              </p>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} stat={stat} />
          ))}
        </section>

        <section className="grid grid-cols-1 gap-6 ">
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Recent bookings
                </h2>
              </div>
              <Link
                to="../bookings"
                className="flex shrink-0 items-center gap-1 text-sm font-semibold text-[#0b2d89] hover:underline"
              >
                View all
                <FiChevronRight />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Customer</th>
                    <th className="px-6 py-4 font-semibold">Service</th>
                    <th className="px-6 py-4 font-semibold">Time</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {bookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="transition hover:bg-slate-50/80"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          
                          <div>
                            <p className="font-semibold text-slate-900">
                              {booking.customer}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-500">
                              {booking.vehicle}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-medium text-slate-700">
                          {booking.service}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-400">
                          {booking.id}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-2 font-medium text-slate-700">
                          <FiClock className="text-slate-400" />
                          {booking.time}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${booking.statusClass}`}
                        >
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

                 </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_1fr]">
          
          <div className="space-y-6  ">
            <article className="rounded-3xl border  border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="pb-4">
                  <h2 className="text-2xl font-bold   text-slate-900">
                    Quick actions
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Common workshop tasks
                  </p>
                </div>
                
              </div>

              <div className="space-y-6 ">
                {quickActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <Link
                      key={action.label}
                      to={action.to}
                      className="group flex items-center gap-3 rounded-2xl border border-slate-200 p-3 transition hover:border-blue-200 hover:bg-blue-50/50"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0b2d89]">
                        <Icon />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-slate-800">
                          {action.label}
                        </p>
                        <p className="truncate text-xs text-slate-500">
                          {action.detail}
                        </p>
                      </div>
                      <FiChevronRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#0b2d89]" />
                    </Link>
                  );
                })}
              </div>


            </article>

            
          </div>


           <article className=" items-center gap-4 rounded-3xl border border-blue-100 bg-blue-50 p-5">
            <div><iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6970.11285721098!2d75.71986809999996!3d29.133525999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1781254164598!5m2!1sen!2sin"
  
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-2xl w-full"
/></div>
              <div className="flex mt-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#0b2d89] shadow-sm">
                <FiMapPin size={21} />
              </div>
              <div className="min-w-0 ml-7 flex-1">
                <p className="font-bold text-slate-900">Shop is open</p>
                <p className="mt-0.5 text-sm text-slate-500">
                  Closing today at 6:00 PM
                </p>
              </div>
              </div>
             
            </article>

          
        </section>
       
      </div>
    </main>
  );
};

export default DashBoard;
