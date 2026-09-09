import { FiStar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function ObjectShow({dta}) {
  const navi = useNavigate();
  const onnextpage=()=>
  {
    navi(`/viewProfile/${dta.id}`);
  }
  return (
    <div className="w-[380px] rounded-3xl border border-gray-200 bg-[#f8f8f8] p-4 shadow-sm transition hover:shadow-md">
      <img
        src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop"
        alt="Mechanic Shop"
        className="h-[210px] w-full rounded-2xl object-cover"
      />
      <div className="mt-5">

        <div className="flex items-start justify-between">
          
          <h2 className="text-4xl font-bold text-[#0b2d83]">
            {dta.name}
            Swift Mechanics
          </h2>

          <div className="flex items-center gap-1 text-lg font-semibold text-gray-800">
            <FiStar className="fill-[#8B4513] text-[#8B4513]" />
            {dta.rating}
          </div>
        </div>

        <p className="mt-3 text-lg text-gray-600">
          {dta.description}
        </p>
        <p className="mt-3 text-lg text-gray-600">
          {dta.mechanics}
        </p>
        <p className="mt-3 text-lg text-gray-600">
        {dta.landmark}, {dta.pincode}
        </p>

        <div className="my-5 border-t border-gray-300"></div>

        <div className="flex items-center  justify-between">
          
          <button onClick={onnextpage} className="rounded-xl border text-center justify-center  border-[#0b2d83] px-7 py-3 text-lg font-semibold text-[#0b2d83] transition hover:bg-[#0b2d83] hover:text-white">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default ObjectShow;