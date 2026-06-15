


import { useState } from "react";
import { CalendarDays } from "lucide-react";

const BookingTiming = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("09:00 AM");

  const dates = [
    {
      day: "MON",
      date: "28",
      month: "Oct",
    },
    {
      day: "TUE",
      date: "29",
      month: "Oct",
    },
    {
      day: "WED",
      date: "30",
      month: "Oct",
    },
    {
      day: "THU",
      date: "31",
      month: "Oct",
    },
    {
      day: "FRI",
      date: "01",
      month: "Nov",
    },
  ];

  const morningSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
  ];

  const afternoonSlots = [
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  return (
    <div className="mt-6 flex flex-wrap gap-3">
  {dates.map((item, index) => (
    <button
      key={index}
      onClick={() => setSelectedDate(index)}
      className={`rounded-xl px-5 py-3 transition ${
        selectedDate === index
          ? "bg-[#0b2d89] text-white"
          : "border border-slate-200 bg-white"
      }`}
    >
      {item.day} {item.date}
    </button>
  ))}
</div>
  );
};

export default BookingTiming;
