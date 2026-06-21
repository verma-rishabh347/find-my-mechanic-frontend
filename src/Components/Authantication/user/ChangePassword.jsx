import { Eye, ArrowRight, LockKeyhole } from "lucide-react";
import api from "../../../data/axios/Axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
    const navigate =useNavigate();
    const [oldpassword ,setoldpassword] = useState("");
    const [newpassword ,setnewpassword] = useState("");
    const [verifypassword ,setverifypassword] = useState("");
    const handleverify = async () => {
  if (!oldpassword.trim()) {
    alert("Please enter current password");
    return;
  }

  if (!newpassword.trim()) {
    alert("Please enter new password");
    return;
  }

  if (newpassword.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  const hasNumberOrSymbol =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/.test(newpassword);



  if (!hasNumberOrSymbol) {
    alert("Password must contain a number or symbol");
    return;
  }

  if (!verifypassword.trim()) {
    alert("Please confirm your password");
    return;
  }

  if (newpassword !== verifypassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    // API Call
    const response = await api.post("Auth/ChangePassword", {oldpassword:oldpassword,newPassword:newpassword});

    alert("Password updated successfully");
    console.log(response.data);
    if(response.data.isSuccesed==true)
    {
        navigate("profilepage/websitesettings")
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};
   
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-3xl p-10">
        {/* Header */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-blue-900 flex items-center justify-center">
            <LockKeyhole className="text-white" size={36} />
          </div>

          <h1 className="mt-6 text-4xl font-bold text-gray-900">
            Update Password
          </h1>

          <p className="mt-3 text-center text-gray-500 max-w-md">
            Ensure your account stays secure by using a strong,
            unique password.
          </p>
        </div>

        {/* Form */}
        <div className="mt-10 space-y-6">
          <PasswordField
            label="Current Password"
            value={oldpassword}
            onchange={(e)=>setoldpassword(e.target.value)}
            placeholder="Enter your current password"
          />

          <div>
            <PasswordField
              label="New Password"
              value={newpassword}
            onchange={(e)=>setnewpassword(e.target.value)}
              placeholder="Min. 8 characters"
            />

            
          </div>

          <PasswordField
            label="Confirm New Password"
            value={verifypassword}
            onchange={(e)=>setverifypassword(e.target.value)}

            placeholder="Repeat your new password"
          />

          {/* Requirements */}
          <div className="rounded-xl bg-gray-100 p-5">
            <h3 className="font-semibold text-gray-800">
              Password Requirements:
            </h3>

            <div className="mt-3 space-y-3">
              <Requirement text="At least 8 characters" />
              <Requirement text="Includes a number or symbol" />
            </div>
          </div>

          {/* Button */}
          <button onClick={handleverify} className="w-full h-14 bg-blue-900 text-white rounded-xl font-medium text-lg flex items-center justify-center gap-2 hover:bg-blue-950 transition">
            Update Password
            <ArrowRight size={20} />
          </button>

          <button className="w-full text-gray-700 font-medium">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
function PasswordField({
  label,
  placeholder,
  value,
  onchange,
}) {
  return (
    <div>
      <label className="block mb-2 text-lg font-semibold text-gray-900">
        {label}
      </label>

      <div className="relative">
        <input
          type="password"
          value={value}
          onChange={onchange}
          placeholder={placeholder}
          className="w-full h-14 px-5 pr-12 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Eye
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
        />
      </div>
    </div>
  );
}

function Requirement({ text }) {
  return (
    <div className="flex items-center gap-3 text-gray-700">
      <div className="w-5 h-5 rounded-full border-2 border-gray-500" />
      <span>{text}</span>
    </div>
  );
}