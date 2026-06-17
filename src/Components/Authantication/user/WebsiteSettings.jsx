
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
      
    </div>
  );
};

export default WebsiteSettings;