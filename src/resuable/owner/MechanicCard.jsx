import {
  FiPhone,
  FiMail,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

const MechanicCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-6 hover:shadow-lg transition-all duration-300">
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex gap-5">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43"
            alt="mechanic"
            className="w-40 h-40 rounded-2xl object-cover shadow-md"
          />

          <div>
            <span className="px-4 py-2 rounded-full  bg-green-100 text-green-700 font-semibold text-sm">
          ● Active
            </span>

            <h2 className="text-2xl font-bold mt-5 text-gray-900">
              Marcus Thorne
            </h2>

            <p className="text-gray-500 text-lg mt-1">
              Senior Engine Specialist
            </p>
          </div>
        </div>

        
      </div>

      {/* Contact Info */}
      <div className="mt-8 space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50">
          <FiPhone className="text-gray-500 text-lg" />
          <span className="text-gray-700">
            +1 555-012-3456
          </span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50">
          <FiMail className="text-gray-500 text-lg" />
          <span className="text-gray-700">
            m.thorne@precisionauto.com
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-blue-50 rounded-2xl p-5">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Experience
          </p>

          <h3 className="text-3xl font-bold text-[#0b2d89] mt-1">
            12
          </h3>

          <span className="text-gray-600">
            Years
          </span>
        </div>

        <div className="bg-green-50 rounded-2xl p-5">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Jobs Done
          </p>

          <h3 className="text-3xl font-bold text-green-700 mt-1">
            1,420+
          </h3>

          <span className="text-gray-600">
            Completed
          </span>
        </div>
      </div>

     

      {/* Actions */}
      <div className="flex gap-3 mt-8">
        <button className="flex-1 h-14 rounded-2xl bg-[#0b2d89] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
          <FiEdit2 />
          Edit Mechanic
        </button>

        <button className="w-14 h-14 rounded-2xl border border-red-200 text-red-600 flex items-center justify-center hover:bg-red-50 transition">
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default MechanicCard;