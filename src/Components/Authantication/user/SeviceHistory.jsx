import ServiceHistoryComponent from './ServiceHistoryComponent'

const SeviceHistory = () => {
  return (
    <div className='w-full m-10'>
<div className="bg-white p-6 rounded-2xl   border justify-between border-gray-200 flex   w-full]  gap-4">
  

  <div>
    <h1 className="text-2xl font-bold text-gray-800">
      Service History
    </h1>

    <span className="text-gray-500 text-sm">
      Review and manage your vehicle's maintenance records.
    </span>
  </div>

  
</div>

      <ServiceHistoryComponent/>




    </div>
  )
}

export default SeviceHistory