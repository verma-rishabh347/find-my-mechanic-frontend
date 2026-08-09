import { useEffect, useReducer, useState } from "react";
import { FiCamera, FiLoader } from "react-icons/fi";
import api from "../../../data/axios/Axios";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  dob: "",
  gender: 0,
  profileImage: "",
};

const GENDERS = ["Male", "Female", "Others"];
const DEFAULT_AVATAR =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23e5e7eb'/><circle cx='50' cy='38' r='18' fill='%239ca3af'/><ellipse cx='50' cy='85' rx='30' ry='22' fill='%239ca3af'/></svg>";

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };

    case "SET_PROFILE":
      return { ...state, ...action.payload };

    default:
      return state;
  }
}

const PersonalInformation = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [snapshot, setSnapshot] = useState(initialState); // last saved values, used to support "Cancel"
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await api.get("UserInformation");
        const data = response.data?.data ?? {};
        const payload = {
          name: data.name ?? "",
          email: data.email ?? "",
          phoneNumber: data.phone ?? "",
          dob: data.dateOfBirth ? data.dateOfBirth.split("T")[0] : "",
          gender: data.gender ?? 0,
          profileImage: data.profileImage ?? "",
        };
        dispatch({ type: "SET_PROFILE", payload });
        setSnapshot(payload);
      } catch (err) {
        console.error(err);
        setError("Could not load your profile. Please refresh and try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setError("");
    setIsEditing(true);
  };

  const handleCancel = () => {
    dispatch({ type: "SET_PROFILE", payload: snapshot });
    setError("");
    setIsEditing(false);
  };

  const handleSave = async () => {
    if (!state.name.trim()) {
      setError("Name cannot be empty.");
      return;
    }

    setIsSaving(true);
    setError("");
    try {
      const res = await api.put("UserInformation", {
        name: state.name,
        phone: state.phoneNumber,
        dateOfBirth: state.dob,
        gender: state.gender,
      });

      if (res.data?.isSuccesed) {
        setSnapshot(state);
        setIsEditing(false);
      } else {
        setError(res.data?.message || "Could not save changes. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while saving. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const disabled = !isEditing || isSaving;

  if (isLoading) {
    return (
      <div className="w-full bg-white rounded-3xl border border-gray-200 p-8 shadow-sm flex items-center justify-center min-h-[300px]">
        <FiLoader className="animate-spin text-3xl text-[#0b2d89]" />
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Personal Information
        </h2>
        <p className="text-gray-500 text-lg">
          Update your personal details and contact information.
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          {error}
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border border-gray-200 rounded-2xl p-6 bg-gray-50 mb-8">
        <div className="flex items-center gap-5">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow">
            <img
              src={state.profileImage || DEFAULT_AVATAR}
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = DEFAULT_AVATAR;
              }}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              Profile Picture
            </h3>
            <p className="text-gray-500 max-w-md">
              Upload a high-resolution photo. JPEG, PNG, or GIF, max 5MB.
            </p>
          </div>
        </div>

        <button
          type="button"
          disabled={disabled}
          className="h-12 px-5 rounded-xl bg-[#0b2d89] text-white font-medium flex items-center gap-2 hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiCamera />
          Change Photo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={state.name}
            disabled={disabled}
            onChange={(e) =>
              dispatch({ type: "UPDATE_FIELD", field: "name", value: e.target.value })
            }
            placeholder="Enter full name"
            className="w-full h-14 rounded-xl border px-4 outline-none focus:ring-2 focus:ring-[#0b2d89] disabled:bg-gray-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={state.email}
            disabled
            readOnly
            placeholder="Enter email address"
            className="w-full h-14 rounded-xl border px-4 outline-none bg-gray-100"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={state.phoneNumber}
            disabled={disabled}
            onChange={(e) =>
              dispatch({ type: "UPDATE_FIELD", field: "phoneNumber", value: e.target.value })
            }
            placeholder="Enter phone number"
            className="w-full h-14 rounded-xl border px-4 outline-none focus:ring-2 focus:ring-[#0b2d89] disabled:bg-gray-100"
          />
        </div>

        {/* DOB + Gender */}
        <div className="flex gap-6">
          <div>
            <label className="block mb-2 font-medium">Date Of Birth</label>
            <input
              type="date"
              value={state.dob}
              disabled={disabled}
              onChange={(e) =>
                dispatch({ type: "UPDATE_FIELD", field: "dob", value: e.target.value })
              }
              className="w-full border rounded-xl h-14 px-4 outline-none disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Gender</label>
            <div className="flex gap-3">
              {GENDERS.map((gender, index) => (
                <button
                  key={gender}
                  disabled={disabled}
                  type="button"
                  onClick={() =>
                    dispatch({ type: "UPDATE_FIELD", field: "gender", value: index })
                  }
                  className={`border rounded-xl h-14 px-5 transition disabled:opacity-50 disabled:cursor-not-allowed ${
                    state.gender === index
                      ? "bg-[#0b2d89] text-white border-[#0b2d89]"
                      : ""
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-5 mt-8">
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={handleCancel}
              disabled={isSaving}
              className="h-14 px-8 rounded-2xl bg-slate-500 text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="h-14 px-8 rounded-2xl bg-[#0b2d89] text-white font-semibold hover:opacity-90 transition disabled:opacity-50 flex items-center gap-2"
            >
              {isSaving && <FiLoader className="animate-spin" />}
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={handleEdit}
            className="h-14 px-8 rounded-2xl bg-[#0b2d89] text-white font-semibold hover:opacity-90 transition"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonalInformation;