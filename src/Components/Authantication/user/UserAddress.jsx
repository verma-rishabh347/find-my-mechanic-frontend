import { useEffect, useState } from 'react'
import api from '../../../data/axios/Axios'
import UserAddressComponent, { UserAddressEmpty } from '../../../resuable/UserAddressComponent'


const UserAddress = () => {
  const [addresses, setAddresses] = useState([]);

  const handleapi = async () => {
    try {
      const res = await api.get("/UserAddress");
      setAddresses(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (updatedAddress) => {
    try {
      console.log(updatedAddress);
      await api.put("/UserAddress", updatedAddress);
      await handleapi();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await api.delete(`/UserAddress/${id}`);
      await handleapi();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleapi();
  }, []);

  return (
    <div className='ml-15 mt-7 mr-20'>
           <div>
        <h2 className='text-4xl font-bold'> Saved Addresses</h2>
        <p>Manage your locations for faster service bookings and on-site repairs.</p>
    </div>

        <div className='grid  mt-10 gap-10 grid-cols-2'>
          {addresses.map((address,index)=>
          (<UserAddressComponent 
              key={address.id}

    address={address}

     onEdit={handleEdit}

    onDelete={() => handleDelete(address.id)}
      />))}
            
            <UserAddressEmpty/>
        </div>
    </div>
  );
};

export default UserAddress;