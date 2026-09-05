import {
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiEdit2,
  FiSave,
  FiX,
  FiBriefcase,
  FiHash,
  FiUpload,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import api from "../../data/axios/Axios";

const initialStation = {
  cover:
    "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1974&auto=format&fit=crop",
  logo: null,
  name: "Precision Auto Care Elite",
  tagline: "European & Domestic Specialists since 2004",
  shopId: "ATS-WKS-9022",
  owner: "Marcus Thorne",
  phone: "+1 (555) 012-3456",
  email: "support@precisionauto.com",
  street: "1234 Mechanics Way",
  city: "Detroit",
  state: "Michigan",
  zip: "48201",
  gst: "22AAAAA0000A1Z5",
  experience: 20,
  mechanics: 8,
  bays: 6,
  active: true,
  ratings: 4.9,
  jobsDone: 8420,
};

function Field({ label, value, onChange, type = "text", disabled }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full h-12 rounded-xl border border-gray-300 px-4 outline-none focus:border-[#0b2d89] focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100 disabled:text-gray-500"
      />
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4">
      <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#0b2d89] shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          {label}
        </p>
        <p className="text-base font-semibold text-gray-900 mt-0.5 break-words">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function ServiceStationProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [station, setStation] = useState(initialStation);
  const [draft, setDraft] = useState(
    JSON.parse(JSON.stringify(initialStation))
  );

  const [newService, setNewService] = useState("");

  const startEdit = () => {
    setDraft(JSON.parse(JSON.stringify(station)));
    setIsEditing(true);
  };

  const handleApiIncome = async () => {
    try {
      const res = await api.get("/StationProfile/GetStationDetail");
      const apiData = res.data?.data;

      if (apiData) {
        setStation((prev) => {
          const updated = {
            ...prev,
            owner:apiData.ownername || prev.owner,
            name: apiData.name || prev.name,
            tagline: apiData.description || prev.tagline,
            phone: apiData.phone || prev.phone,
            email: apiData.email || prev.email,
            logo: apiData.photo || prev.logo,
            city: apiData.city || prev.city,
            state: apiData.state || prev.state,
            street: apiData.landmark || prev.street,
            zip: apiData.pincode || prev.zip,
            gst: apiData.gstNumber || prev.gst,
            experience: apiData.experienceYear ?? prev.experience,
          };
          // draft ko bhi sync kar do taaki edit mode me latest data dikhe
          setDraft(JSON.parse(JSON.stringify(updated)));
          return updated;
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleApiIncome();
  }, []);

  const cancelEdit = () => {
    setDraft(JSON.parse(JSON.stringify(station)));
    setIsEditing(false);
  };

  const saveEdit = () => {
    setStation(draft);
    setIsEditing(false);
    // yahan chaho to save API call bhi laga sakte ho (PUT/POST)
  };

  const update = (key) => (val) => setDraft({ ...draft, [key]: val });

  const updateTiming = (index, key, val) => {
    const next = [...draft.timings];
    next[index] = { ...next[index], [key]: val };
    setDraft({ ...draft, timings: next });
  };

  const addService = () => {
    const trimmed = newService.trim();
    if (!trimmed) return;
    if (draft.services.includes(trimmed)) {
      setNewService("");
      return;
    }
    setDraft({ ...draft, services: [...draft.services, trimmed] });
    setNewService("");
  };

  const removeService = (s) => {
    setDraft({ ...draft, services: draft.services.filter((x) => x !== s) });
  };

  const display = isEditing ? draft : station;

  return (
    <div className="w-full px-6 py-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Shop Info</h1>
          <p className="text-gray-500 mt-1 text-lg">
            Manage your service station's public profile and details.
          </p>
        </div>

        {!isEditing ? (
          <button
            onClick={startEdit}
            className="h-12 px-6 rounded-xl bg-[#0b2d89] text-white font-semibold flex items-center gap-2 hover:opacity-90 transition self-start sm:self-auto"
          >
            <FiEdit2 />
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-3 self-start sm:self-auto">
            <button
              onClick={cancelEdit}
              className="h-12 px-6 rounded-xl border border-gray-300 text-gray-700 font-semibold flex items-center gap-2 hover:bg-gray-100 transition"
            >
              <FiX />
              Cancel
            </button>
            <button
              onClick={saveEdit}
              className="h-12 px-6 rounded-xl bg-[#0b2d89] text-white font-semibold flex items-center gap-2 hover:opacity-90 transition"
            >
              <FiSave />
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* Cover + Identity Card */}
      <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="relative h-56 bg-gray-200">
          <img
            src={display.cover}
            alt="cover"
            className="w-full h-full object-cover"
          />
          {isEditing && (
            <button className="absolute top-4 right-4 h-10 px-4 rounded-xl bg-white/90 backdrop-blur text-gray-800 font-medium flex items-center gap-2 hover:bg-white transition shadow">
              <FiUpload size={16} />
              Change Cover
            </button>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-5">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  {isEditing ? (
                    <input
                      type="text"
                      value={draft.name}
                      onChange={(e) => update("name")(e.target.value)}
                      className="text-3xl font-bold text-gray-900 border-b-2 border-gray-300 focus:border-[#0b2d89] outline-none bg-transparent"
                    />
                  ) : (
                    <h2 className="text-3xl font-bold text-gray-900">
                      {display.name}
                    </h2>
                  )}
                </div>

                {isEditing ? (
                  <input
                    type="text"
                    value={draft.tagline}
                    onChange={(e) => update("tagline")(e.target.value)}
                    className="mt-2 text-gray-500 text-lg border-b border-gray-200 focus:border-[#0b2d89] outline-none bg-transparent w-full"
                  />
                ) : (
                  <p className="text-gray-500 text-lg mt-1">
                    {display.tagline}
                  </p>
                )}

                <p className="text-gray-400 text-sm mt-2 flex items-center gap-2">
                  <FiHash size={12} /> Shop ID: {display.shopId}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => isEditing && update("active")(!draft.active)}
                  className={`w-14 h-8 rounded-full relative transition ${
                    display.active ? "bg-[#0b2d89]" : "bg-gray-300"
                  } ${isEditing ? "cursor-pointer" : "cursor-not-allowed"}`}
                  disabled={!isEditing}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition ${
                      display.active ? "right-1" : "left-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="rounded-2xl bg-slate-200 p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide flex items-center gap-1">
                Rating
              </p>
              <h3 className="text-2xl font-bold text-[#0b2d89] mt-1">
                {display.ratings}
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-200 p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Jobs Done
              </p>
              <h3 className="text-2xl font-bold text-green-700 mt-1">
                {display.jobsDone.toLocaleString()}+
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-200 p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide flex items-center gap-1">
                <FiBriefcase size={12} /> Mechanics
              </p>
              <h3 className="text-2xl font-bold text-green-800 mt-1">
                {display.mechanics}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Contact + Address */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-5">
            Contact Information
          </h3>

          {!isEditing ? (
            <div className="space-y-3">
              <InfoRow
                icon={<FiUser size={18} />}
                label="Owner"
                value={display.owner}
              />
              <InfoRow
                icon={<FiPhone size={18} />}
                label="Phone"
                value={display.phone}
              />
              <InfoRow
                icon={<FiMail size={18} />}
                label="Email"
                value={display.email}
              />
            </div>
          ) : (
            <div className="space-y-4">
              <Field
                label="Owner Name"
                value={draft.owner}
                onChange={update("owner")}
              />
              <Field
                label="Phone"
                value={draft.phone}
                onChange={update("phone")}
                type="tel"
              />
              <Field
                label="Email"
                value={draft.email}
                onChange={update("email")}
                type="email"
              />
            </div>
          )}
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-5">
            Address & Legal
          </h3>

          {!isEditing ? (
            <div className="space-y-3">
              <InfoRow
                icon={<FiMapPin size={18} />}
                label="Address"
                value={`${display.street}, ${display.city}, ${display.state} ${display.zip}`}
              />
              <InfoRow
                icon={<FiHash size={18} />}
                label="GST Number"
                value={display.gst}
              />
              <InfoRow
                icon={<FiBriefcase size={18} />}
                label="Experience"
                value={`${display.experience} years`}
              />
            </div>
          ) : (
            <div className="space-y-4">
              <Field
                label="Street Address"
                value={draft.street}
                onChange={update("street")}
              />
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="City"
                  value={draft.city}
                  onChange={update("city")}
                />
                <Field
                  label="State"
                  value={draft.state}
                  onChange={update("state")}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="ZIP / Postal Code"
                  value={draft.zip}
                  onChange={update("zip")}
                />
                <Field
                  label="GST Number"
                  value={draft.gst}
                  onChange={update("gst")}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Field
                  label="Experience (years)"
                  value={draft.experience}
                  onChange={(v) => update("experience")(Number(v) || 0)}
                  type="number"
                />
                <Field
                  label="Mechanics"
                  value={draft.mechanics}
                  onChange={(v) => update("mechanics")(Number(v) || 0)}
                  type="number"
                />
                <Field
                  label="Service Bays"
                  value={draft.bays}
                  onChange={(v) => update("bays")(Number(v) || 0)}
                  type="number"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}