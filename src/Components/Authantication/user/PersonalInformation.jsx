import { useEffect, useReducer, useState } from "react";
import { FiCamera } from "react-icons/fi";
import api from "../../../data/axios/Axios";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  dob: "",
  gender: 0,
  profileImage: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SET_PROFILE":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

const PersonalInformation = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [edit,setedit]=useState(true);
  const onedit = async (caller) =>
  {
    if(caller==="edit")
    {
      setedit(false);

    }
    else if(caller==="save")
    {
      try
      {

      
      const res =await api.put("UserInformation", {

  name: state.name,

  phone: state.phoneNumber,

  dateOfBirth: state.dob,

  gender: state.gender,

});
       if (res.data?.isSuccesed) {

  setedit(true);

}

  } catch (error) {

    console.error(error);

  }
    }
    

  }
  useEffect(()=>
{
  const fetchuserdata = async () =>
  {
    try {
      const response = await api.get("UserInformation");
      console.log(response.data);
       dispatch({

        type: "SET_PROFILE",

        payload: {

          name: response.data.data.name,

          email: response.data.data.email,

          phoneNumber: response.data.data.phone,

          dob: response.data.data.dateOfBirth ? response.data.data.dateOfBirth.split("T")[0]: "",

          gender: response.data.data.gender,

          profileImage: response.data.data.profileImage,

        },

      });

    }
    catch (error) {
  console.log(error.response);
  console.log(error.response?.data);
  console.error(error);
}
  }
  fetchuserdata();

},[]);
  

  
  

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Personal Information
        </h2>

        <p className="text-gray-500 text-lg">
          Update your personal details and contact information.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border border-gray-200 rounded-2xl p-6 bg-gray-50 mb-8">
        <div className="flex items-center gap-5">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow">
            <img
              src={state.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              Profile Picture
            </h3>

            <p className="text-gray-500 max-w-md">
              Upload a high-resolution photo. JPEG, PNG, or GIF,
              max 5MB.
            </p>
          </div>
        </div>

        <button
          type="button"
          disabled={edit}
          
          className="h-12 px-5 rounded-xl bg-[#0b2d89] text-white font-medium flex items-center gap-2 hover:opacity-90 transition"
        >
          <FiCamera />
          Change Photo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>

          <input
            type="text"
            value={state.name}
            disabled={edit}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
            placeholder="Enter full name"
            className="w-full h-14 rounded-xl border px-4 outline-none focus:ring-2 focus:ring-[#0b2d89]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>

          <input
          
            type="email"
            value={state.email}
            disabled
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
            placeholder="Enter email address"
            className="w-full h-14 rounded-xl border px-4 outline-none bg-gray-100"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>

          <input
            type="text"
            value={state.phoneNumber}
            disabled={edit}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "phoneNumber",
                value: e.target.value,
              })
            }
            placeholder="Enter phone number"
            className="w-full h-14 rounded-xl border px-4 outline-none focus:ring-2 focus:ring-[#0b2d89]"
          />
        </div>

        {/* DOB + Gender */}
        <div className="flex gap-6">
          <div>
            <label className="block mb-2 font-medium">
              Date Of Birth
            </label>

            <input
              type="date"
              value={state.dob}
              disabled={edit}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "dob",
                  value: e.target.value,
                })
              }
              className="w-full border rounded-xl h-14 px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Gender
            </label>

            <div className="flex gap-3">
              {["Male", "Female", "Others"].map((gender,index) => (
                <button
                  key={gender}
                  disabled={edit}
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      field: "gender",
                      value: index,
                    })
                  }
                  className={`border rounded-xl h-14 px-5 transition ${
                    state.gender === index
                      ? "bg-[#0b2d89] text-white border-[#0b2d89]"
                      : ""
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-5 mt-8">
        <button
          type="button"
          onClick={()=>onedit("edit")}
          className="h-14 px-8 rounded-2xl bg-slate-500 text-white font-semibold hover:opacity-90 transition"
        >
          Edit
        </button>

        <button
          type="button"
          onClick={()=>onedit("save")}
     
          className="h-14 px-8 rounded-2xl bg-[#0b2d89] text-white font-semibold hover:opacity-90 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;