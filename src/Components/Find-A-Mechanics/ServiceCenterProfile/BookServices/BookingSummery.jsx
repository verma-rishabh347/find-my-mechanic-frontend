import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VEHICLE_OPTIONS = [
  "Tesla Model 3",
  "Tesla Model Y",
  "Hyundai Creta",
  "Maruti Swift",
  "Toyota Innova",
];

// Only tomorrow onwards is bookable — today and past dates are blocked.
function getMinDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

// Hourly slots from 9:00 AM to 7:00 PM.
function getTimeSlots() {
  const slots = [];
  for (let h = 9; h <= 19; h++) {
    const period = h < 12 ? "AM" : "PM";
    const hour12 = h > 12 ? h - 12 : h;
    slots.push(`${hour12}:00 ${period}`);
  }
  return slots;
}

const TIME_SLOTS = getTimeSlots();
const MIN_DATE = getMinDate();

const ICONS = {
  vehicle: (
    <path d="M5 17h14M5 17a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4zM5 17l1.5-6.5A2 2 0 018.42 9h7.16a2 2 0 011.92 1.5L19 17M5 17H3v-3a2 2 0 012-2h.5m13.5 5h2v-3a2 2 0 00-2-2h-.5M9 9V6a1 1 0 011-1h4a1 1 0 011 1v3" />
  ),
  date: (
    <path d="M8 2v4M16 2v4M3.5 9h17M5 4h14a2 2 0 012 2v13a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
  ),
  time: <path d="M12 7v5l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
};

function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      {ICONS[name]}
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function BookingSummary() {
  const [vehicle, setVehicle] = useState(VEHICLE_OPTIONS[0]);
  const [date, setDate] = useState(MIN_DATE);
  const [time, setTime] = useState(TIME_SLOTS[0]);

  const navigate = useNavigate();
  const onNextPage = () => {
    navigate("/bookingconfirm");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-[800px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#0b2d89] to-[#123aa8] px-7 py-6">
          <p className="text-xs font-medium uppercase tracking-wider text-white/60">
            Review &amp; confirm
          </p>
          <h2 className="mt-1 text-2xl font-bold text-white">
            Booking Summary
          </h2>
        </div>

        <div className="space-y-5 px-7 py-6">
          {/* Vehicle */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
              <Icon name="vehicle" />
              Vehicle
            </label>
            <div className="relative">
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 font-semibold text-slate-900 outline-none transition hover:border-slate-300 focus:border-[#0b2d89] focus:ring-4 focus:ring-[#0b2d89]/10"
              >
                {VEHICLE_OPTIONS.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
              <ChevronDown />
            </div>
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                <Icon name="date" />
                Date
              </label>
              <input
                type="date"
                value={date}
                min={MIN_DATE}
                onChange={(e) => setDate(e.target.value)}
                className="w-full cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-900 outline-none transition hover:border-slate-300 focus:border-[#0b2d89] focus:ring-4 focus:ring-[#0b2d89]/10"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                <Icon name="time" />
                Time
              </label>
              <div className="relative">
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 pr-8 text-sm font-semibold text-slate-900 outline-none transition hover:border-slate-300 focus:border-[#0b2d89] focus:ring-4 focus:ring-[#0b2d89]/10"
                >
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <ChevronDown />
              </div>
            </div>
          </div>
          <p className="-mt-3 text-xs text-slate-400">
            Bookings open tomorrow onwards, 9:00 AM – 7:00 PM.
          </p>

          <button
            onClick={onNextPage}
            className="group mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0b2d89] py-4 font-semibold text-white transition hover:bg-[#082065] active:scale-[0.99]"
          >
            Confirm Appointment
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingSummary;