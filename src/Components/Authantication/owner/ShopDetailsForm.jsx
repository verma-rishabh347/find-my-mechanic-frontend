import {
  FiInfo,
  FiBriefcase,
  FiImage,
  FiClock,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ShopDetailsForm() {
    const navigate = useNavigate();

    const onnextpage = () =>
    {
        navigate("/shopaddressform")

    }
  return (
    <div className="w-full p-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-blue-900">
          Shop Details
        </h1>

        <p className="mt-3 text-lg text-slate-600 max-w-3xl">
          Establish trust by providing accurate details about your workshop.
          This information will be visible to potential customers looking for
          reliable mechanics.
        </p>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-3 gap-6 mt-10">

        {/* Basic Information */}
        <div className="col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <FiInfo className="text-blue-900 text-2xl" />
            <h2 className="text-3xl font-bold text-blue-900">
              Basic Information
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="font-medium">
                Shop Name
              </label>

              <input
                type="text"
                placeholder="e.g. Precision Motors"
                className="w-full h-12 mt-2 px-4 border rounded-xl"
              />
            </div>

            <div>
              <label className="font-medium">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="e.g. 1234567890"
                className="w-full h-12 mt-2 px-4 border rounded-xl"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="font-medium">
              Description
            </label>

            <textarea
              rows={5}
              placeholder="Briefly describe your services and specialization..."
              className="w-full mt-2 p-4 border rounded-xl resize-none"
            />
          </div>
        </div>

        {/* Financials */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <FiBriefcase className="text-blue-900 text-2xl" />
            <h2 className="text-3xl font-bold text-blue-900">
              Financials
            </h2>
          </div>

          <div>
            <label className="font-medium">
              GST Number
            </label>

            <input
              type="text"
              placeholder="22AAAAA0000A1Z5"
              className="w-full h-12 mt-2 px-4 border rounded-xl"
            />
          </div>

          <div className="mt-6">
            <label className="font-medium">
              Bank Account Number
            </label>

            <input
              type="text"
              placeholder="e.g. 9876543210123"
              className="w-full h-12 mt-2 px-4 border rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-3 gap-6 mt-6">

        {/* Experience */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <FiBriefcase className="text-blue-900 text-2xl" />
            <h2 className="text-3xl font-bold text-blue-900">
              Experience
            </h2>
          </div>

          <div>
            <label className="font-medium">
              Years of Experience
            </label>

            <input
              type="number"
              placeholder="e.g. 15"
              className="w-full h-12 mt-2 px-4 border rounded-xl"
            />
          </div>

          <div className="mt-6">
            <label className="font-medium">
              Total Mechanics
            </label>

            <input
              type="number"
              placeholder="e.g. 5"
              className="w-full h-12 mt-2 px-4 border rounded-xl"
            />
          </div>
        </div>

        {/* Workshop Visuals */}
        <div className="col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <FiImage className="text-blue-900 text-2xl" />
            <h2 className="text-3xl font-bold text-blue-900">
              Workshop Visuals
            </h2>
          </div>

          <div className="h-64 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center">
            <button className="px-6 py-3 bg-blue-900 text-white rounded-xl">
              Replace Shop Front Photo
            </button>

            <p className="mt-4 text-slate-500">
              Drop your file or click to browse
            </p>
          </div>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <FiClock className="text-blue-900 text-2xl" />
          <h2 className="text-3xl font-bold text-blue-900">
            Operating Hours
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="font-medium">
              General Opening Time
            </label>

            <input
              type="time"
              className="w-full h-12 mt-2 px-4 border rounded-xl"
            />
          </div>

          <div>
            <label className="font-medium">
              General Closing Time
            </label>

            <input
              type="time"
              className="w-full h-12 mt-2 px-4 border rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-4 mt-8">
        

        <button onClick={onnextpage} className="px-8 py-3 bg-blue-900 text-white rounded-xl">
          Continue →
        </button>
      </div>
    </div>
  );
}