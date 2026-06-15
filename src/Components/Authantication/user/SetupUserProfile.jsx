import {
  HiOutlineTruck,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { useReducer } from "react";

const initialState = {
  companyName: "",
  model: "",
  vehicleNumber: "",
  year: "",
  vehicleType: "",
  streetAddress: "",
  city: "",
  state: "",
  zip: "",

  errors: {
    companyName: "",
    model: "",
    vehicleNumber: "",
    year: "",
    vehicleType: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
  },
};
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: "",
        },
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: {
          ...initialState.errors,
          ...action.payload,
        },
      };

    case "CLEAR_ERRORS":
      return {
        ...state,
        errors: initialState.errors,
      };

    default:
      return state;
  }
}
const SetupUserProfile = () => {
  

const [state, dispatch] = useReducer(reducer, initialState);
const handleSubmit = () => {
  const errors = {};

  if (!state.companyName.trim()) {
    errors.companyName = "Company name is required";
  }

  if (!state.model.trim()) {
    errors.model = "Model is required";
  }

  if (!state.vehicleNumber.trim()) {
    errors.vehicleNumber = "Vehicle number is required";
  }

  if (!state.year) {
    errors.year = "Year is required";
  } else if (
    Number(state.year) < 1950 ||
    Number(state.year) > new Date().getFullYear() + 1
  ) {
    errors.year = "Enter a valid year";
  }

  if (!state.vehicleType) {
    errors.vehicleType = "Select vehicle type";
  }

  if (!state.streetAddress.trim()) {
    errors.streetAddress = "Street address is required";
  }

  if (!state.city.trim()) {
    errors.city = "City is required";
  }

  if (!state.state.trim()) {
    errors.state = "State is required";
  }

  if (!state.zip.trim()) {
    errors.zip = "ZIP code is required";
  }

  if (Object.keys(errors).length > 0) {
    dispatch({
      type: "SET_ERRORS",
      payload: errors,
    });
    return;
  }

  dispatch({ type: "CLEAR_ERRORS" });

  console.log(state);

  localStorage.setItem(
    "userProfile",
    JSON.stringify({
      companyName: state.companyName,
      model: state.model,
      vehicleNumber: state.vehicleNumber,
      year: state.year,
      vehicleType: state.vehicleType,
      streetAddress: state.streetAddress,
      city: state.city,
      state: state.state,
      zip: state.zip,
    })
  );
};
  return (
    <div className="bg-[#f5f6fa] min-h-screen py-10 px-4">
      <div className="ml-15 mr-20 mx-auto">
        <div className="mb-10">
          <h1 className="text-6xl font-bold text-[#0a2a7a] mb-3">
            Let's set up your profile
          </h1>
          <p className="text-gray-600 text-xl">
            Tell us about your vehicle and location so we can provide the
            best local service matches.
          </p>
        </div>
        <div className="bg-white border rounded-2xl p-8 mb-8 shadow-sm">

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <HiOutlineTruck className="text-2xl text-[#0a2a7a]" />
            </div>

            <h2 className="text-4xl font-bold text-gray-800">
              Primary Vehicle Details
            </h2>
          </div>
          <div className="grid grid-cols-2  gap-6">

                              <div>
                                <label className="block mb-2  font-medium">
                                  Company Name
                                </label>

                                <input type="text"
  value={state.companyName}
  onChange={(e) =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "companyName",
      value: e.target.value,
    })
  }
  className={`w-full rounded-xl  h-14 px-4 outline-none border ${
    state.errors.companyName
      ? "border-red-500"
      : "border-black-300"
  }`}
/>

<p className="text-red-500 text-sm mt-1">
  {state.errors.companyName}
</p>
                              </div>

                            <div>
                              <label className="block mb-2 font-medium">
                                Model
                              </label>

                              <input
  type="text"
  value={state.model}
  onChange={(e) =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "model",
      value: e.target.value,
    })
  }
  className="w-full border rounded-xl h-14 px-4 outline-none"
/>

<p className="text-red-500 text-sm">
  {state.errors.model}
</p>
                            </div>


                            <div>
                                <label className="block mb-2 font-medium">
                                  Vehicle Number
                                </label>

                                  <input
  type="text"
  value={state.vehicleNumber}
  onChange={(e) =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "vehicleNumber",
      value: e.target.value,
    })
  }
  className="w-full border rounded-xl h-14 px-4 outline-none"
/>

<p className="text-red-500 text-sm">
  {state.errors.vehicleNumber}
</p>
                              </div>






            <div className="flex">
                  <div>
                  <label className="block mb-2 font-medium">
                    Year
                  </label>

                 <input
  type="number"
  value={state.year}
  onChange={(e) =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "year",
      value: e.target.value,
    })
  }
  className="w-full border rounded-xl h-14 px-4 outline-none"
/>

<p className="text-red-500 text-sm">
  {state.errors.year}
</p>
                  </div>
                  
                  <div className="ml-6">
                    <label className="block mb-2 font-medium">
                      Vechile Type
                    </label>

                    <button
  type="button"
  onClick={() =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "vehicleType",
      value: "Car",
    })
  }
  className={`border rounded-xl h-14 px-5 ${
    state.vehicleType === "Car"
      ? "bg-blue-900 text-white"
      : ""
  }`}
>
  Car
</button>

<button
  type="button"
  onClick={() =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "vehicleType",
      value: "Bike",
    })
  }
  className={`border rounded-xl h-14 px-5 ${
    state.vehicleType === "Bike"
      ? "bg-blue-900 text-white"
      : ""
  }`}
>
  Bike
</button>

<p className="text-red-500 text-sm">
  {state.errors.vehicleType}
</p>

                    </div>
                  </div>
            
            </div>
          </div>
        </div>
        <div className="bg-white border ml-15 mr-20 rounded-2xl p-8 shadow-sm">

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <HiOutlineLocationMarker className="text-2xl text-[#0a2a7a]" />
            </div>

            <h2 className="text-4xl font-bold text-gray-800">
              Your Address
            </h2>
          </div>

          <div className="space-y-6">

            <div>
              <label className="block mb-2 font-medium">
                Street Address
              </label>

             <input
  type="text"
  value={state.streetAddress}
  onChange={(e) =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "streetAddress",
      value: e.target.value,
    })
  }
  className="w-full border rounded-xl h-14 px-4 outline-none"
/>

<p className="text-red-500 text-sm">
  {state.errors.streetAddress}
</p>
            </div>

          
            <div className="grid grid-cols-3 gap-5">

              <div>
                <label className="block mb-2 font-medium">
                  City
                </label>

                <input
                className="w-full border rounded-xl h-14 px-4 outline-none"
  type="text"
  value={state.city}
  onChange={(e) =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "city",
      value: e.target.value,
    })
  }
/>

<p className="text-red-500 text-sm">
  {state.errors.city}
</p>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  State
                </label>

                <input
                className="w-full border rounded-xl h-14 px-4 outline-none"
  type="text"
  value={state.state}
  onChange={(e) =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "state",
      value: e.target.value,
    })
  }
/>

<p className="text-red-500 text-sm">
  {state.errors.state}
</p>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  ZIP
                </label>

               <input
               className="w-full border rounded-xl h-14 px-4 outline-none"
  type="text"
  value={state.zip}
  onChange={(e) =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "zip",
      value: e.target.value,
    })
  }
  
/>

<p className="text-red-500 text-sm">
  {state.errors.zip}
</p>
              </div>
            </div>
            <img
              src="https://img.freepik.com/free-vector/gps-navigation-map-with-pin-location_1017-42784.jpg"
              alt=""
              className="w-full h-72 object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="flex justify-end  mt-10">
        <div className="flex justify-end w-40px ">
          <button
  onClick={handleSubmit}
  className="bg-blue-600  text-white font-semibold h-14 mr-20 justify-end px-10 rounded-xl flex-1"
>
  Finish Setup
</button>
          </div>

         
        </div>

      </div>
 
  );
};

export default SetupUserProfile;