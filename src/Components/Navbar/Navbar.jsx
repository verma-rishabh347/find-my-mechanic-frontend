import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const options = [
    { name: "Home", links: "/" },
    { name: "Find a Mechanic", links: "/find-mechanic" },
    { name: "About Us", links: "/about" },
    { name: "Contact", links: "/contactus" }
  ];

  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const decoded = jwtDecode(token);

      console.log(decoded);

      setRole(decoded.role);

      localStorage.setItem("role", decoded.role);
    } catch (error) {
      console.log("Invalid token");
    }
  },[role]);

  return (
    <div className="text-black flex items-center justify-between z-50 sticky top-0 text-xl p-4 bg-gray-300">

      <Link to="/">
        <img
          className="h-12 rounded-2xl ml-10"
          src="mainlogowhite.png"
          alt=""
        />
      </Link>

      <div className="flex gap-10 w-auto">
        {options.map((option, index) => (
          <Link
            key={index}
            to={option.links}
            className="hover:text-blue-800 mx-2"
          >
            {option.name}
          </Link>
        ))}
      </div>

      <div className="flex">
        {role === "CenterOwner" ? (
          <div className="mr-10 border bg-blue-900 text-white px-4 py-1.5 rounded-2xl">
            <Link to="/businessprofilepage">
              Business Profile
            </Link>
          </div>
        ) : (
          <div className="mr-10 border bg-blue-900 text-white px-4 py-1.5 rounded-2xl">
            <Link to="/profilepage">
              Profile
            </Link>
          </div>
        )}
      </div>

    </div>
  );
}

export default Navbar;