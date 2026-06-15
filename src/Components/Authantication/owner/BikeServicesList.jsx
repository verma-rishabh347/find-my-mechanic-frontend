import { useNavigate } from "react-router-dom";

const BikeServicesList = () => {
  const bikeServices = [
    {
      name: "General Service",
      price: 40,
      duration: 60,
      active: true,
    },
    {
      name: "Engine Oil Change",
      price: 25,
      duration: 30,
      active: false,
    },
    {
      name: "Brake Service",
      price: 35,
      duration: 45,
      active: false,
    },
    {
      name: "Battery Replacement",
      price: 80,
      duration: 40,
      active: false,
    },
    {
      name: "Tyre Replacement",
      price: 120,
      duration: 90,
      active: false,
    },
    {
      name: "Puncture Repair",
      price: 15,
      duration: 20,
      active: false,
    },
    {
      name: "Chain Cleaning & Lubrication",
      price: 20,
      duration: 25,
      active: false,
    },
    {
      name: "Suspension Service",
      price: 100,
      duration: 120,
      active: false,
    },
    {
      name: "Electrical Repair",
      price: 60,
      duration: 60,
      active: false,
    },
    {
      name: "Bike Washing & Detailing",
      price: 30,
      duration: 45,
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
    <div className="text-xl border  rounded-xl pl-5 pr-5 pt-1 pb-1 mt-10 ml-10 mr-15  "  >
      
      {/* Header */}
      <div className="grid grid-cols-4 bg-gray-50 border-b font-semibold text-gray-700">
        <div className="p-4">Service Name</div>
        <div className="p-4">Price ($)</div>
        <div className="p-4">Duration (Mins)</div>
        <div className="p-4">Active</div>
      </div>

      {/* Rows */}
      {bikeServices.map((service, index) => (
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

export default BikeServicesList;