

import { useNavigate } from "react-router-dom";

const CarServicesList = () => {
  const carServices = [
    {
      name: "General Service",
      price: 80,
      duration: 120,
      active: true,
    },
    {
      name: "Engine Oil Change",
      price: 50,
      duration: 45,
      active: true,
    },
    {
      name: "Brake Service",
      price: 70,
      duration: 60,
      active: true,
    },
    {
      name: "Battery Replacement",
      price: 150,
      duration: 30,
      active: true,
    },
    {
      name: "AC Service",
      price: 120,
      duration: 90,
      active: true,
    },
    {
      name: "Wheel Alignment",
      price: 40,
      duration: 30,
      active: true,
    },
    {
      name: "Wheel Balancing",
      price: 35,
      duration: 30,
      active: true,
    },
    {
      name: "Tyre Replacement",
      price: 250,
      duration: 60,
      active: false,
    },
    {
      name: "Clutch Repair",
      price: 300,
      duration: 240,
      active: true,
    },
    {
      name: "Suspension Repair",
      price: 220,
      duration: 180,
      active: false,
    },
    {
      name: "Engine Diagnostics",
      price: 90,
      duration: 45,
      active: true,
    },
    {
      name: "Car Wash",
      price: 20,
      duration: 30,
      active: true,
    },
    {
      name: "Interior Cleaning",
      price: 45,
      duration: 60,
      active: true,
    },
    {
      name: "Dent & Paint",
      price: 500,
      duration: 480,
      active: false,
    },
    {
      name: "Ceramic Coating",
      price: 800,
      duration: 360,
      active: false,
    },
  ];

  const navigate = useNavigate();

  const onnextpage = () =>
  {
    navigate("/businessprofilepage")

  }

  return (
    <>

    <div >
        <button  className="text-3xl border bg-blue-900 rounded-xl pl-5 pr-5 pt-1 pb-1 mt-10 ml-10 mr-15  text-white"   >List Of Car Services:</button>
        
      </div>
    <div className="bg-white border mt-5 ml-10 mr-15 rounded-2xl overflow-hidden">

      
      
 
      <div className="grid grid-cols-4 bg-gray-50 border-b font-semibold text-gray-700">
        <div className="p-4">Service Name</div>
        <div className="p-4">Price ($)</div>
        <div className="p-4">Duration (Mins)</div>
        <div className="p-4">Active</div>
      </div>

      {/* Rows */}
      {carServices.map((service, index) => (
        <div
          key={index}
          className="grid grid-cols-4 items-center border-b last:border-b-0"
        >
          <div className="p-4 font-medium">
            {service.name}
          </div>

          <div className="p-4">
            <input
              type="number"
              defaultValue={service.price}
              className="w-28 h-11 px-3 border rounded-xl"
            />
          </div>

          <div className="p-4">
            <input
              type="number"
              defaultValue={service.duration}
              className="w-32 h-11 px-3 border rounded-xl"
            />
          </div>

          <div className="p-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={service.active}
                className="sr-only peer"
              />

              <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-blue-900 after:content-[''] after:absolute after:left-1 after:top-1 after:w-6 after:h-6 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-6" />
            </label>
          </div>
        </div>
      ))}
      
    </div>

    <div className="flex justify-end ">
        <button onClick={onnextpage} className="bg-blue-700 text-end justify-end  text-white pl-7 pt-3 pb-3 mr-15 mt-5 mb-5 rounded-2xl pr-7 text-2xl">Publish Profile</button>
      </div>

    </>
  );
};

export default CarServicesList;