import { FiArrowLeft, FiStar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function UserAddressCreate() {
    const navigate = useNavigate();
  return (
    <div className="w-full px-8 py-6">
      
      {/* Header */}
      <button onClick={()=>navigate("/profilepage/useraddress")} className="flex items-center gap-2 text-blue-900 font-medium mb-4">
        <FiArrowLeft />
        Back to Addresses
      </button>

      <h1 className="text-6xl font-bold text-slate-900">
        Add New Address
      </h1>

      <p className="mt-3 text-xl text-slate-600">
        Securely save your location for faster service booking and parts delivery.
      </p>

      {/* Form Card */}
      <div className="mt-10 w-full max-w-6xl bg-white rounded-3xl p-10 border border-gray-200 shadow-sm">
        
        
        {/* Street Address */}
        <div className="mt-7">
          <label className="block mb-3 font-semibold text-gray-700">
            Full Street Address
          </label>

          <input
            type="text"
            placeholder="123 Mechanic Ave"
            className="w-full h-14 px-5 border border-gray-300 rounded-xl outline-none focus:border-blue-900"
          />
        </div>

        {/* City + State */}
        <div className="grid grid-cols-2 gap-8 mt-7">
          <div>
            <label className="block mb-3 font-semibold text-gray-700">
              City
            </label>

            <input
              type="text"
              placeholder="Detroit"
              className="w-full h-14 px-5 border border-gray-300 rounded-xl outline-none focus:border-blue-900"
            />
          </div>

          <div>
            <label className="block mb-3 font-semibold text-gray-700">
              State / Province
            </label>

            <select className="w-full h-14 px-5 border border-gray-300 rounded-xl outline-none focus:border-blue-900">
              <option>Select state</option>
              <option>Haryana</option>
              <option>Punjab</option>
              <option>Delhi</option>
              <option>Rajasthan</option>
            </select>
          </div>
        </div>

        {/* Zip + Phone */}
        <div className="grid grid-cols-2 gap-8 mt-7">
          <div>
            <label className="block mb-3 font-semibold text-gray-700">
              ZIP / Postal Code
            </label>

            <input
              type="text"
              placeholder="48201"
              className="w-full h-14 px-5 border border-gray-300 rounded-xl outline-none focus:border-blue-900"
            />
          </div>

          
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200"></div>

        {/* Default Address */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <FiStar className="text-blue-900 text-2xl mt-1" />

            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Set as Default Address
              </h3>

              <p className="text-gray-500">
                Use this as the primary location for all services.
              </p>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />

            <div className="w-16 h-9 bg-gray-300 rounded-full peer peer-checked:bg-blue-900 after:content-[''] after:absolute after:left-1 after:top-1 after:w-7 after:h-7 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-7"></div>
          </label>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-5 mt-12">
          <button className="h-14 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition">
            Save Address
          </button>

          <button className="h-14 rounded-xl border border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}