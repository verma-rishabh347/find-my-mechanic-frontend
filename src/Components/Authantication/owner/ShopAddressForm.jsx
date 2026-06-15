import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ShopAddressForm() {
    const navigate = useNavigate();
    const onnextpage =()=>
    {
        navigate("/askvehicletype")
        
    }
  return (
    <div className="w-full px-8 py-6">
      
      {/* Header */}
      <div className="ml-32">
        <button onClick={()=>navigate("/shopdetailsform")} className="flex items-center gap-2 text-blue-900 font-medium mb-4">
        <FiArrowLeft />
        Back to Addresses
      </button>

      <h1 className="text-6xl font-bold text-slate-900">
        Your Station Address
      </h1>

      <p className="mt-3 text-xl text-slate-600">
        Securely save your location for faster service booking.
      </p>
      </div>

      {/* Form Card */}
      <div className="mt-10 w-full max-w-6xl m-auto bg-white rounded-3xl p-10 border border-gray-200 shadow-sm">
        
        
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
        <div className="grid grid-cols-3 gap-8 mt-7">
          

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

        
        <div className="grid grid-cols-2 gap-8 mt-7">
          

          
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200"></div>

    

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-5 mt-12">
          <button onClick={onnextpage} className="h-14 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition">
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
