import UserAddressComponent, { UserAddressEmpty } from '../../../resuable/UserAddressComponent'

const UserAddress = () => {
  return (
    <div className='ml-15 mt-7 mr-20'>
           <div>
        <h2 className='text-4xl font-bold'> Saved Addresses</h2>
        <p>Manage your locations for faster service bookings and on-site repairs.</p>
    </div>

        <div className='grid  mt-10 gap-10 grid-cols-2'>
            <UserAddressComponent/>
            <UserAddressEmpty/>
        </div>
    </div>
  )
}

export default UserAddress