import { FiCamera } from "react-icons/fi";

const PersonalInformation = () => {
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
              src=""
              alt=""
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

        <button className="h-12 px-5 rounded-xl bg-[#0b2d89] text-white font-medium flex items-center gap-2 hover:opacity-90 transition">
          <FiCamera />
          Change Photo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter full name"
            className="w-full h-14 rounded-xl border  px-4 outline-none focus:ring-2 focus:ring-[#0b2d89]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>

          <input
            disabled
            type="email"
            placeholder="Enter email address"
            className="w-full h-14 rounded-xl border  px-4 outline-none focus:ring-2 focus:ring-[#0b2d89]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>

          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full h-14 rounded-xl border  px-4 outline-none focus:ring-2 focus:ring-[#0b2d89]"
          />
        </div>

        <div className="flex">
                  <div>
                  <label className="block mb-2 font-medium">
                    Year
                  </label>

                  <input type="date" placeholder="2024"  className="w-full border rounded-xl h-14 px-4 outline-none"/>
                  </div>
                  
                  <div className="ml-6">
                    <label className="block mb-2 font-medium">
                      Gender
                    </label>

                    <div className="flex  gap-3">
                      <button className="w-full border rounded-xl h-14 px-4 outline-none pl-5 pr-5">
                        Male
                      </button>

                      <button className="w-full border rounded-xl h-14 px-4 outline-none pl-5 pr-5">
                        Female
                      </button>

                      <button className="w-full border rounded-xl h-14 px-4 outline-none pl-5 pr-5">
                        Others
                      </button>

                    </div>
                  </div>
            
            </div>

       
         
      </div>

      <div className="flex justify-end gap-5 mt-8">
        <button className="h-14 px-8 rounded-2xl bg-slate-500  text-white font-semibold hover:opacity-90 transition">
          Edit
        </button>
        <button className="h-14 px-8 rounded-2xl bg-[#0b2d89] text-white font-semibold hover:opacity-90 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;