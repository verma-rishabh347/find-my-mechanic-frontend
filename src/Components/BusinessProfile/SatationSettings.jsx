

import { FiMapPin } from "react-icons/fi";
import Notification2 from "../Authantication/user/Notificationpart/Notification2";
import Security from "../Authantication/user/Security/Security";

const StationSettings = () => {
  return (
    <div className="space-y-8 ml-15 mt-10">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Website Settings
        </h2>

        <p className="text-gray-500 text-lg">
          Customize your experience and manage security preferences.
        </p>
      </div>
      <Notification2 />
      <Security />
     
    </div>
  );
};

export default StationSettings;