import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import api from "../../../data/axios/Axios";
import { useState } from "react";

export default function ShopAddressForm() {
    const navigate = useNavigate();
    const [landmark, setLandmark] = useState("");
const [pinCode, setPinCode] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
    
    const handleApi = async () => {
  try {
    const res = await api.post("/OwnerSetup/StationAddress", {
      landmark,
      pinCode,
      city,
      state,
    });

    console.log(res.data);

    if (res.data.succeeded) {
      navigate("/askvehicletype");
    }
  } catch (error) {
    console.log(error);
  }
};
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
  value={landmark}
  onChange={(e) => setLandmark(e.target.value)}
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
  value={pinCode}
  onChange={(e) => setPinCode(e.target.value)}
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
  value={city}
  onChange={(e) => setCity(e.target.value)}
  placeholder="Detroit"
  className="w-full h-14 px-5 border border-gray-300 rounded-xl outline-none focus:border-blue-900"
/>
          </div>

          <div>
            <label className="block mb-3 font-semibold text-gray-700">
              State / Province
            </label>

           <select
  value={state}
  onChange={(e) => setState(e.target.value)}
  className="w-full h-14 px-5 border border-gray-300 rounded-xl outline-none focus:border-blue-900"
>
  <option value="">Select state</option>
  <option value="Haryana">Haryana</option>
  <option value="Punjab">Punjab</option>
  <option value="Delhi">Delhi</option>
  <option value="Rajasthan">Rajasthan</option>
</select>
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-8 mt-7">
          

          
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200"></div>

    

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-5 mt-12">
         <button
  onClick={handleApi}
  className="h-14 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition"
>
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
