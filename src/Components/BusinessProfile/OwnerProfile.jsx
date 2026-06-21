import { useEffect, useState } from "react";
import api from "../../data/axios/Axios";
import {
  FiCamera,
  FiEdit2,
  FiHome,
  FiInfo,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSave,
  FiUser,
  FiX,
} from "react-icons/fi";

const initialOwner = {
  fullName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "Male",
  profilePhoto: "",
  addressLine1: "",
  city: "",
  state: "",
  postalCode: "",
  country: "India",
};

function Field({ label, value, onChange, disabled, type = "text", placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none transition focus:border-[#0b2d89] focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 disabled:text-slate-600"
      />
    </div>
  );
}

const OwnerProfile = () => {

const [draft, setDraft] = useState(initialOwner);

const [owner, setOwner] = useState(initialOwner);

const [loading, setLoading] = useState(false);





const handleapi = async () => {

  try {

    const res = await api.get("/StationProfile/GetOwnerProfile");

    const data = res.data.data;

    setOwner({

  fullName: data.name,

  email: data.email,

  phone: data.phone,

  dateOfBirth: data.dateOfBirth?.split("T")[0],

  gender:

    data.gender === 0

      ? "Male"

      : data.gender === 1

      ? "Female"

      : "Other",

  profilePhoto: data.profilePhoto,

  addressLine1: data.landmark ?? "",

  city: data.city,

  state: data.state,

  postalCode: data.pinCode,
   country: "India",

});
setDraft({

  fullName: data.name,

  email: data.email,

  phone: data.phone,

  dateOfBirth: data.dateOfBirth?.split("T")[0],

  gender:

    data.gender === 0

      ? "Male"

      : data.gender === 1

      ? "Female"

      : "Other",

  profilePhoto: data.profilePhoto,

  addressLine1: data.landmark ?? "",

  city: data.city,

  state: data.state,

  postalCode: data.pinCode,
   country: "India",

});

  } catch (error) {

    console.error(error);

  }

};

useEffect(() => {

  handleapi();

}, []);
  const [isEditing, setIsEditing] = useState(false);

  const displayedOwner = isEditing ? draft : owner;

  const startEditing = () => {
    setDraft(owner);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setDraft(owner);
    setIsEditing(false);
  };
const saveChanges = async () => {
  const genderValue =
  draft.gender === "Male"
    ? 0
    : draft.gender === "Female"
    ? 1
    : 2;
  try {
    setLoading(true);
    const payload = {
      name: draft.fullName,
      phone: draft.phone,
      dateOfBirth: draft.dateOfBirth,
      gender: genderValue,
      landmark: draft.addressLine1,
      city: draft.city,
      state: draft.state,
      pinCode: draft.postalCode,
    };

    await api.put(
      "/StationProfile/UpdateOwnerProfile",
      payload
    );

    await handleapi();

setIsEditing(false);
  } catch (error) {
    console.error(error);
  }
  finally{
    setLoading(false);
  }
};

  const updateField = (field, value) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  return (
    <main className="min-w-0 flex-1 bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px] space-y-6">
        <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b2d89]">
              Account owner
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Owner Profile
            </h1>
            <p className="mt-2 text-slate-500">
              Manage your personal information and residential address.
            </p>
          </div>

          {!isEditing ? (
            <button
              onClick={startEditing}
              className="flex h-12 items-center justify-center gap-2 self-start rounded-xl bg-[#0b2d89] px-5 font-semibold text-white transition hover:bg-blue-900 sm:self-auto"
            >
              <FiEdit2 />
              Edit profile
            </button>
          ) : (
            <div className="flex gap-3 self-start sm:self-auto">
              <button
                onClick={cancelEditing}
                className="flex h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                <FiX />
                Cancel
              </button>
              <button
                onClick={saveChanges}
                className="flex h-12 items-center gap-2 rounded-xl bg-[#0b2d89] px-5 font-semibold text-white transition hover:bg-blue-900"
              >
                <FiSave />
                Save changes
              </button>
            </div>
          )}
        </header>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-slate-50 p-5 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
           
               <img
  className="h-24 w-24 shrink-0 rounded-full border-4 border-white shadow object-cover"
  src={
    displayedOwner.profilePhoto ||
    `https://ui-avatars.com/api/?name=${displayedOwner.fullName}`
  }
  alt={displayedOwner.fullName}
/>
              
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {displayedOwner.fullName}
                </h2>
                <p className="mt-1 text-slate-500">Business owner</p>

              </div>
            </div>

            <button
              disabled={!isEditing}
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiCamera />
              Change photo
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
           
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Personal information
              </h2>
              <p className="text-sm text-slate-500">
                Your private identity and contact details.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field
              label="Full name"
              value={displayedOwner.fullName}
              onChange={(value) => updateField("fullName", value)}
              disabled={!isEditing}
            />
            <Field
              label="Email address"
              type="email"
              value={displayedOwner.email}
              onChange={(value) => updateField("email", value)}
              disabled
            />
            <Field
              label="Phone number"
              type="tel"
              value={displayedOwner.phone}
              onChange={(value) => updateField("phone", value)}
              disabled={!isEditing}
            />
            <Field
              label="Date of birth"
              type="date"
              value={displayedOwner.dateOfBirth}
              onChange={(value) => updateField("dateOfBirth", value)}
              disabled={!isEditing}
            />
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Gender
              </label>
              <div className="grid grid-cols-3 gap-3 sm:max-w-md">
                {["Male", "Female", "Other"].map((gender) => (
                  <button
                    key={gender}
                    type="button"
                    disabled={!isEditing}
                    onClick={() => updateField("gender", gender)}
                    className={`h-11 rounded-xl border text-sm font-semibold transition disabled:cursor-not-allowed ${
                      displayedOwner.gender === gender
                        ? "border-[#0b2d89] bg-blue-50 text-[#0b2d89]"
                        : "border-slate-200 text-slate-500"
                    }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div className="flex items-start gap-3">
              
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Owner residential address
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  This is the owner&apos;s private address, not the service
                  station location.
                </p>
              </div>
            </div>
         
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-600">
            <FiInfo className="mt-0.5 shrink-0 text-[#0b2d89]" />
            <p>
              Customers will see the station address from Shop Info. This
              residential address is used only for owner verification,
              correspondence, and account records.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <Field
                label="Address"
                value={displayedOwner.addressLine1}
                onChange={(value) => updateField("addressLine1", value)}
                disabled={!isEditing}
                placeholder="House number and street"
              />
            </div>
            
            <Field
              label="City"
              value={displayedOwner.city}
              onChange={(value) => updateField("city", value)}
              disabled={!isEditing}
            />
            <Field
              label="State "
              value={displayedOwner.state}
              onChange={(value) => updateField("state", value)}
              disabled={!isEditing}
            />
            <Field
              label="ZIP / Postal code"
              value={displayedOwner.postalCode}
              onChange={(value) => updateField("postalCode", value)}
              disabled={!isEditing}
            />
            <Field
              label="Country"
              value={displayedOwner.country}
              onChange={(value) => updateField("country", value)}
              disabled={!isEditing}
            />
          </div>

        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${owner.email}`}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0b2d89]">
              <FiMail />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Account email
              </p>
              <p className="mt-1 font-semibold text-slate-800">{owner.email}</p>
            </div>
          </a>
          <a
            href={`tel:${owner.phone}`}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <FiPhone />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Contact number
              </p>
              <p className="mt-1 font-semibold text-slate-800">{owner.phone}</p>
            </div>
          </a>
        </section>
      </div>
    </main>
  );
};

export default OwnerProfile;
