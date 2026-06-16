import { NavLink, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiTruck,
  FiClock,
  FiSettings,
  FiMapPin,
} from "react-icons/fi";

const UserProfileLeftPannel = () => {
  const navlinks = useNavigate();
  const handlethechange = ()=>
  {
    localStorage.clear("token");
    navlinks("/authantication/signin");
    
  }
 
  const ele = [
    {
      id: 1,
      name: "Personal Information",
      to: "personalinformation",
      icon: <FiUser />,
    }
    ,
    {
      id: 2,
      name: "Address",
      to: "useraddress",
      icon: <FiMapPin />,
    },
    {
      id: 3,
      name: "My Vehicle",
      to: "myvechile",
      icon: <FiTruck />,
    },
    {
      id: 4,
      name: "Service History",
      to: "servicehistory",
      icon: <FiClock />,
    },
    {
      id: 5,
      name: "Website Settings",
      to: "websitesettings",
      icon: <FiSettings />,
    },
  ];

  return (
    <div className="w-full max-w-[320px] bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Account Settings
        </h2>

        <p className="text-gray-500 leading-7">
          Manage your profile and preferences
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {ele.map((e) => {
          return (
            <NavLink
              key={e.id}
              to={e.to}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#0b2d89] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              
              <span className="text-xl">
                {e.icon}
              </span>

              <span>{e.name}</span>
            </NavLink>
          );
        })}
      </div>

      <hr />

      <button  className="bg-red-800 text-white border rounded-2xl w-full h-13 text-2xl mt-3" onClick={handlethechange}  >Log Out</button>
    </div>
  );
};

export default UserProfileLeftPannel;
