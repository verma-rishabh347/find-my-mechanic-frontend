import { useEffect, useState } from "react"

const CarCard = ({vehicle,onEdit,onDelete}) => {


  const [brand,setbrand] =useState("");
  const [model,setmodel]=useState("");
  const [manufactureYear,setmanufactureYear]=useState("");
  const [type,settype]=useState("");
  const [photo,setphoto]=useState("");
  const [vehiclenumber,setvehiclenumber]=useState("");
  const [edit,setedit]=useState(true);
  
  useEffect(() => {

    if (vehicle) {

      setbrand(vehicle.brand);

      setmodel(vehicle.model);

      setmanufactureYear(vehicle.manufactureYear);

      settype(vehicle.vehicleType);

      setvehiclenumber(vehicle.vehicleNumber);

    }

  }, [vehicle]);
  return (
    <div className='w-[420px] bg-white border ml-10 border-gray-200 rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300'>

      {/* Image */}
      <div className='w-full h-48 bg-gray-100 rounded-2xl overflow-hidden'>
        <img
          src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop'
          alt='car'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Car Info */}
      <div className="grid mt-3 grid-cols-2 gap-4">

    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Brand
      </label>
      <input
        type="text"
        value={brand}
        disabled={edit}
        onChange={(e)=>setbrand(e.target.value)}
        placeholder="Toyota"
        className="w-full h-11 px-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
    </div>

    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Model
      </label>
      <input
        type="text"
        value={model}
        disabled={edit}
        onChange={(e)=>setmodel(e.target.value)}
        placeholder="Camry"
        className="w-full h-11 px-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
    </div>

    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Year
      </label>
      <input
        type="number"
        placeholder="2024"
        value={manufactureYear}
        disabled={edit}
        onChange={(e)=>setmanufactureYear(e.target.value)}
        className="w-full h-11 px-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
    </div>

    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Type
      </label>

      <div className="flex gap-2">
        <select
  value={type}
  disabled={edit}
  onChange={(e) => settype(Number(e.target.value))}
  className="flex-1 h-11 rounded-xl border border-blue-600"
>
  <option value={1}>Bike</option>
  <option value={2}>Car</option>
</select>
      </div>
    </div>

    <div className="col-span-2">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Vehicle Number
      </label>

      <input
      value={vehiclenumber}
        disabled={edit}
        onChange={(e)=>setvehiclenumber(e.target.value)}
        type="text"
        placeholder="UP32 AB 1234"
        className="w-full h-11 px-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
    </div>

  </div>


      {/* Buttons */}
      <div className='flex gap-3 mt-5'>
        <button onClick={onDelete} className='flex-1 py-2 rounded-xl border border-gray-300 font-medium hover:bg-gray-100 transition'>
          Remove
        </button>

        <button onClick={async () => {
  if (!edit) {
    await onEdit({
      id: vehicle.id,
      brand,
      model,
      manufactureYear,
      vehicleType: type,
      vehicleNumber: vehiclenumber
    });
  }

  setedit(!edit);
}}
className='flex-1 py-2 rounded-xl bg-black text-white font-medium hover:opacity-90 transition'>
          { edit ? "Edit Details" : "Save"   }
        </button>
      </div>

    </div>
  )
}

export default CarCard










export const EmptyCard = ({onCreate}) => {

  const [brand,setbrand] =useState("");
  const [model,setmodel]=useState("");
  const [manufactureYear,setmanufactureYear]=useState("");
  const [type,settype]=useState(2);
  const [photo,setphoto]=useState("");
  const [vehiclenumber,setvehiclenumber]=useState("");






  return (
    <div className="w-[420px] bg-white border border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300">

  {/* Image */}
<div className='w-full h-48 relative bg-gray-100 text-center m-auto rounded-2xl overflow-hidden'>
  <div className='w-40 h-40 rounded-full bg-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
    ADD <br /> VEHICLE
  </div>
</div>
  {/* Car Info */}
      <div className="grid mt-3 grid-cols-2 gap-4">

    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Brand
      </label>
      <input
        type="text"
        value={brand}
        onChange={(e)=>setbrand(e.target.value)}
        placeholder="Toyota"
        className="w-full h-11 px-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
    </div>

    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Model
      </label>
      <input
        type="text"
        value={model}
        onChange={(e)=>setmodel(e.target.value)}
        placeholder="Camry"
        className="w-full h-11 px-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
    </div>

    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Year
      </label>
      <input
        type="number"
        placeholder="2024"
        value={manufactureYear}
        onChange={(e)=>setmanufactureYear(e.target.value)}
        className="w-full h-11 px-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
    </div>

    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Type
      </label>

      <div className="flex gap-2">
        <select
  value={type}
  onChange={(e) => settype(Number(e.target.value))}
  className="flex-1 h-11 rounded-xl border border-blue-600"
>
  <option value={1}>Bike</option>
  <option value={2}>Car</option>
</select>
      </div>
    </div>

    <div className="col-span-2">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Vehicle Number
      </label>

      <input
      value={vehiclenumber}
        onChange={(e)=>setvehiclenumber(e.target.value)}
        type="text"
        placeholder="UP32 AB 1234"
        className="w-full h-11 px-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
    </div>

  </div>


  {/* Buttons */}
  <div className="flex gap-3 mt-6">
    <button
      type="button"
      onClick={() => {
  setbrand("");
  setmodel("");
  setmanufactureYear("");
  settype(2);
  setvehiclenumber("");
}}
      className="flex-1 h-12 rounded-xl border border-gray-300 font-medium hover:bg-gray-100 transition"
    >
      Reset
    </button>

     <button onClick={async () => {
  
    await onCreate({
      brand,
      model,
      manufactureYear,
      vehicleType: type,
      vehicleNumber: vehiclenumber
    });
    setbrand("");
setmodel("");
setmanufactureYear("");
settype(2);
setvehiclenumber("");

}}
className='flex-1 py-2 rounded-xl bg-black text-white font-medium hover:opacity-90 transition'>
          Save
        </button>
  </div>

</div>
  )
}