import { useEffect, useState } from 'react';
import CarCard, { EmptyCard } from '../../../resuable/CarCard'
import api from '../../../data/axios/Axios';


const MyVechile = () => {
  const [vehicles, setVehicles] = useState([]);
  const handleApi = async () => {
    try
    {
      const res = await api.get("/UserVehicle");

  setVehicles(res.data.data);

    }
    catch(err)
    {
      console.log(err);
    }

  

};

useEffect(() => {

  handleApi();

}, []);
const handleDelete = async (id) => {
  try{

    const res = await api.delete(`/UserVehicle/${id}`);

  await handleApi();

  }
  catch(err)
  {
    console.log(err);
  }

  

};

const handleEdit = async (vehicle) => {
try
{

  var response = await api.put("/UserVehicle", vehicle);

  await handleApi();
}
catch(err)
{
  console.log(err);
}

};

const handleCreate = async (vehicle) => {

  try
  {
    await api.post("/UserVehicle", vehicle);

  await handleApi();
  }
  catch(err)
  {
    console.log(err);
  }

};

  return (
    <div className='p-6 space-y-6'>
      <div>
        <h1 className='text-3xl font-bold text-gray-800'>
          My Vehicles
        </h1>

        <p className='text-gray-500 mt-1'>
          Manage your registered vehicles and their service schedules.
        </p>
      </div>
      <div className='flex flex-wrap gap-5'>
        {vehicles.map((vehicle)=>(
          <CarCard key={vehicle.id}

      vehicle={vehicle}
      
      onEdit={handleEdit}
      onDelete={() => handleDelete(vehicle.id)}

        />)

        )}
        
        <EmptyCard  onCreate={handleCreate}
      
   />
      </div>
      

    </div>
  )
}

export default MyVechile