import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import api from "../../../data/axios/Axios";


const ViewProfile = () => {
  const nav = useNavigate();
  const [station, setStation] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const { id } = useParams();

  const onnextpage = () => {
    nav(`/bookingpage/${id}`);
  };

  useEffect(() => {
    const fetchStationDetail = async () => {
      try {
        setLoading(true);
        

        const response = await api.get("FindMechanics/GetStationDetailById",           {

            params: { id }

          });
        setStation(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.error("Error fetching station detail:", err);
        setError("Failed to load station details.");
      } finally {
        setLoading(false);
      }
    };

    fetchStationDetail();
  }, []);

  const services = [
    {
      icon: "charging_station",
      title: "Engine Diagnostics",
      desc: "Advanced computer scanning and mechanical diagnosis for all modern powerplants.",
    },
    {
      icon: "settings_input_component",
      title: "Brake Repair",
      desc: "Full rotor resurfacing and performance pad installation for ultimate stopping power.",
    },
    {
      icon: "oil_barrel",
      title: "Oil & Fluids",
      desc: "Synthetic oil changes and specialized fluid flushes for transmission and cooling systems.",
    },
    {
      icon: "electrical_services",
      title: "Electrical Systems",
      desc: "Precision troubleshooting for complex wiring, battery, and alternator issues.",
    },
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f9fb]">
        <p className="text-lg font-semibold text-gray-600">Loading station details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f9fb]">
        <p className="text-lg font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-gray-900">
      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="relative overflow-hidden rounded-3xl shadow-lg">
          <img
            src={station?.Photo || "https://via.placeholder.com/1200x500"}
            alt=""
            className="h-[500px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

          <div className="absolute bottom-0 left-0 flex w-full flex-col justify-between gap-6 p-8 md:flex-row md:items-end">
            <div>
              <h2 className="mt-4 text-5xl font-bold text-white">
                {station?.name}
              </h2>

              <div className="mt-4 flex items-center gap-2 text-yellow-400">
                <span className="ml-2 text-lg font-semibold text-white">
                  {station?.rating}
                </span>
                <span className="text-gray-300">
                  ({station?.mechanics} mechanics)
                </span>
              </div>
            </div>

            <button
              onClick={onnextpage}
              className="rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:scale-105"
            >
              Book an Appointment
            </button>
          </div>
        </section>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">
            <section className="rounded-3xl border bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-blue-900">
                About {station?.name}
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                {station?.description}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Owner: {station?.ownername} | Experience: {station?.experienceYear} years
              </p>
            </section>

            <section>
              <h2 className="mb-8 text-3xl font-bold text-blue-900">
                Customer Testimonials
              </h2>

              <div className="space-y-5">
                <div className="rounded-3xl border-blue-900 bg-white p-6">
                  <p className="mb-4 text-yellow-500">★★★★★</p>

                  <p className="italic text-gray-700">
                    "Found them through this app and couldn't be happier. They
                    diagnosed a tricky electrical issue on my BMW that two other
                    shops missed."
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-900">
                      JD
                    </div>
                    <span className="font-semibold">James D.</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div className="sticky rounded-3xl border bg-white p-8">
              <h2 className="text-2xl font-bold text-blue-900">
                Location & Contact
              </h2>

              <div className="mt-6 space-y-4 text-gray-700">
                <p>📍 {station?.landmark}, {station?.City}, {station?.State} - {station?.Pincode}</p>
                <p>📞 {station?.phone}</p>
                <p>✉️ {station?.email}</p>
              </div>

              <hr className="my-8" />

              <h2 className="text-2xl font-bold text-blue-900">
                Operating Hours
              </h2>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span>Monday-Saturday</span>
                  <span className="font-semibold">9:00 AM - 8:00 PM</span>
                </div>

                <div className="flex items-center justify-between text-red-500">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>

              <button className="mt-8 w-full rounded-2xl bg-blue-900 py-4 font-semibold text-white transition hover:bg-blue-800">
                Book Service Now
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ViewProfile;