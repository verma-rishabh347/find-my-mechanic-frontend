import { FiHome, FiEdit2, FiTrash2 } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function UserAddressComponent() {
  return (
    <div className="w-[420px]  min-h-[320px] rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
          <FiHome className="text-blue-900 text-2xl" />
        </div>

        <span className="px-4 py-1 text-xs font-semibold text-white bg-blue-900 rounded-full">
          Default
        </span>
      </div>

      {/* Address Info */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-900">
          Address No:
        </h3>

        <p className="mt-4 text-gray-600">
          123 Mechanics Way, Suite 400
        </p>

        <p className="text-gray-600">
          Detroit, MI 48201
        </p>

        
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-200"></div>

      {/* Actions */}
      <div className="flex items-center justify-center gap-16">
        <button className="flex items-center gap-2 text-gray-700 hover:text-black font-medium">
          <FiEdit2 size={18} />
          Edit
        </button>

        <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium">
          <FiTrash2 size={18} />
          Remove
        </button>
      </div>
    </div>
  );
}




export function UserAddressEmpty() {
    const navigate = useNavigate();
   
  return (
    <div onClick={() => navigate("/profilepage/useraddresscreate")} className="w-[420px]  rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center p-8 hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300 cursor-pointer">
      
      {/* Plus Icon */}
      <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center">
        <FiPlus className="text-3xl text-blue-900" />
      </div>

      {/* Text */}
      <button  className="mt-6 text-xl font-semibold text-gray-800">
        Add Address
      </button>

      <p className="mt-3 text-center text-gray-500 max-w-[260px]">
        Save another location for parts delivery or mobile mechanics.
      </p>
    </div>
  );
}
