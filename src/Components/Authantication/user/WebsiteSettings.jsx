
import Security from "./Security/Security";
import { FiMapPin } from "react-icons/fi";

const WebsiteSettings = () => {
  return (
    <div className="space-y-8 mt-10 ml-10">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Website Settings
        </h2>

        <p className="text-gray-500 text-lg">
          Customize your experience and manage security preferences.
        </p>
      </div>

      <Security />
      <div className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm">
        
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          
          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
              <FiMapPin className="text-2xl text-[#0b2d89]" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Service Region
              </h2>

              <p className="text-gray-500 leading-7 max-w-2xl">
                Your settings are currently optimized for San Francisco,
                CA. This affects local mechanic availability and pricing
                currency.
              </p>
            </div>
          </div>

          <button className="h-12 px-6 rounded-xl bg-[#0b2d89] text-white font-medium hover:opacity-90 transition">
            Change Region
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteSettings;