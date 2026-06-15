import { useState } from "react";
import {
  Car,
  CheckCheck,
  ChevronDown,
} from "lucide-react";

const BookServices = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    {
      id: 1,
      title: "Oil Change",
      desc: "Full synthetic oil & filter replacement",
      price: 80,
    },
    {
      id: 2,
      title: "Brake Repair",
      desc: "Pad inspection and high-performance replacement",
      price: 150,
    },
    {
      id: 3,
      title: "Tire Rotation",
      desc: "Enhance tire life and vehicle stability",
      price: 40,
    },
    {
      id: 4,
      title: "Engine Diagnostics",
      desc: "Full computer scan & technical assessment",
      price: 100,
    },
  ];

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(
        selectedServices.filter((item) => item !== id)
      );
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  return (
    <div className="mt-6 space-y-3">
  {services.map((service) => {
  const isSelected = selectedServices.includes(service.id);

  return (
    <button
      key={service.id}
      type="button"
      onClick={() => toggleService(service.id)}
      className={`w-full rounded-lg border p-4 text-left ${
        isSelected
          ? "border-[#0b2d89] bg-blue-50"
          : "border-slate-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">{service.title}</h3>
          <p className=" text-slate-500">
            {service.desc}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-semibold text-[#0b2d89]">
            ₹{service.price}
          </span>

          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full border text-xs ${
              isSelected
                ? "border-[#0b2d89] bg-[#0b2d89] text-white"
                : "border-slate-300"
            }`}
          >
            {isSelected ? "✓" : ""}
          </span>
        </div>
      </div>
    </button>
  );
})}
</div>
  );
};

export default BookServices;
