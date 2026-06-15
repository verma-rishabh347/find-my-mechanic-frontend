import { FiSearch } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

function HowItWork() {
     var options = [ {name:"Discover",details:"Browse certified local mechanics based on reviews, proximity, and specialization.",img:<FiSearch />},{name:"Book",details:"Choose a convenient time slot and book your appointment directly through our platform.",img:<FaRegCalendarAlt />},{name:"Service",details:"Get professional repair work done and drive away with confidence and a service guarantee.",img:<FiSettings />}]
  return (
   
   <>
    <h2 className='text-blue-800 text-4xl text-center pt-10'>How It Works</h2>
    <p className='text-center text-xl'>Quality service in three simple steps.</p>
    <div className='flex justify-evenly gap-32  ml-20 mr-20 mt-10'>
        {options.map((option,index)=>(<div key={index} className='text-center flex flex-col border rounded-4xl  p-4'><div className='text-5xl mt-5 m-auto mb-4'>{option.img}</div><h3 className='text-2xl'>{option.name}</h3><p className='p-5 text-xs '>{option.details}</p></div>))}

    </div>
    </>
  )
}

export default HowItWork