import { useNavigate } from "react-router-dom";

function BookingSummary() {
  const booking = {
    vehicle: "Tesla Model 3",

    services: [
      { name: "Oil Change", price: 80 },
      { name: "Tire Rotation", price: 40 },
    ],

    date: "Jun 12, 2026",
    time: "09:00 AM",

    pricing: {
      subtotal: 120,
      tax: 14,
      total: 134,
    },
  };

  const details = [
    {
      label: "Vehicle",
      value: booking.vehicle,
    },
    {
      label: "Date",
      value: booking.date,
    },
  ];

  const naviagte = useNavigate();
  const onnextpage = () =>
  {
    naviagte("/bookingconfirm")

  }

  return (
    <div className="sticky top-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-[#0b2d89]">
        Booking Summary
      </h2>

      <div className="space-y-6">
        {details.map((item) => (
          <div key={item.label}>
            <p className="text-sm text-slate-500">
              {item.label}
            </p>

            <h3 className="font-semibold">
              {item.value}
            </h3>
          </div>
        ))}

        <div>
          <p className="text-sm text-slate-500">
            Services
          </p>

          <div className="mt-3 space-y-2">
            {booking.services.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2"
              >
                <span>{service.name}</span>

                <span className="font-medium">
                  ₹{service.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <hr />

        {Object.entries(booking.pricing).map(
          ([key, value]) => (
            <div
              key={key}
              className={`flex justify-between ${
                key === "total"
                  ? "text-xl font-bold"
                  : ""
              }`}
            >
              <span className="capitalize">
                {key}
              </span>

              <span>₹{value}</span>
            </div>
          )
        )}

        <button onClick={onnextpage} className="w-full rounded-2xl bg-[#0b2d89] py-4 font-semibold text-white transition hover:bg-[#082065]">
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}
export default BookingSummary;