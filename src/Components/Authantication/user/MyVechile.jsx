import CarCard, { EmptyCard } from '../../../resuable/CarCard'

const MyVechile = () => {
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
        <CarCard />
        <EmptyCard />
      </div>
      

    </div>
  )
}

export default MyVechile