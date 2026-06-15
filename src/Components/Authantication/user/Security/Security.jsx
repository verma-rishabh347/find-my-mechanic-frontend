import { FiLock } from "react-icons/fi";

const Security = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm">
      
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Security
      </h2>

      <div className="space-y-5">
        <div className="border border-gray-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-5">
          
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <FiLock className="text-[#0b2d89] text-xl" />
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Change Password
              </h4>

              <p className="text-gray-500 mt-1">
                Keep your account secure with a unique, strong password.
              </p>
            </div>
          </div>

          <button className="h-11 px-5 rounded-xl border border-[#0b2d89] text-[#0b2d89] font-medium hover:bg-[#0b2d89] hover:text-white transition">
            Update Password
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default Security;
