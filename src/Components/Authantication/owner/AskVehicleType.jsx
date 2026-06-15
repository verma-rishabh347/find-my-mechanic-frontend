

import { FiTruck } from "react-icons/fi";
import { FaMotorcycle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AskVehicleType() {
  const nav = useNavigate();
  const onnextpage = (prop)=>
  {
    if(prop=="bike")
    {
      nav("/bikeserviceslist")
    }
    else if(prop =="car")
    {
      nav("/carserviceslist")
    }

  }
  return (
    <div className="flex gap-8 mt-60 mb-40 justify-center">
      
      {/* Car Services */}
      <button onClick={()=>onnextpage("car")} className="w-[340px] h-[300px] border-2 border-slate-200 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-900 hover:shadow-md transition-all duration-300">
        
        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center">
          <FiTruck className="text-4xl text-blue-900" />
        </div>

        <h2 className="mt-6 text-5xl font-bold text-slate-900">
          Car Services
        </h2>

        <p className="mt-4 text-center text-slate-600 text-lg px-8">
          Full maintenance, engine repair, and bodywork for passenger vehicles.
        </p>
      </button>

      {/* Bike Services */}
      <button  onClick={()=>onnextpage("bike")}  className="w-[340px] h-[300px] border-2 border-slate-200 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-900 hover:shadow-md transition-all duration-300">
        
        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center">
          <FaMotorcycle className="text-4xl text-blue-900" />
        </div>

        <h2 className="mt-6 text-5xl font-bold text-slate-900">
          Bike Services
        </h2>

        <p className="mt-4 text-center text-slate-600 text-lg px-8">
          Specialized care for motorcycles, scooters, and performance bikes.
        </p>
      </button>

    </div>
  );
}