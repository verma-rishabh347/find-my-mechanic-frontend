import { Link } from "react-router-dom";
const BetterAutoCare = () => {
  return (
    <div className='mt-10 pb-20 bg-gray-200'>

    <div className='bg-blue-800 mt-6 text-white text-center  py-16'>
        <h1 className='text-4xl mt-1'>Ready to experience better auto care?</h1>
        <p className='mt-4 '>Join thousands of happy drivers who trust Find My Mechanic for their <br />vehicle maintenance and repairs.</p>
        <Link to="/find-mechanic"> <button   className='bg-amber-600 pl-7 pr-7 pt-2 pb-2 rounded-4xl mt-10'>Find A Mechanic Today</button>
</Link>
       
    </div>




    </div>
  )
}

export default BetterAutoCare