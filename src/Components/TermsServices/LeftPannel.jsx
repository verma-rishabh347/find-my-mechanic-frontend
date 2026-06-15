import {
  HiOutlineDocumentText,
  HiOutlineCash,
  HiOutlineCalendar,
  HiOutlineAdjustments,
  HiOutlineLockClosed
} from "react-icons/hi";

const LeftPannel = () => {
    const systems = [
        { name: "User Agreement", icon:  <HiOutlineDocumentText /> },
        { name: "Booking & Payments", icon: <HiOutlineCash />   },
        { name: "Cancellation Policy", icon: <HiOutlineCalendar />  },
        { name: "Liability ", icon: <HiOutlineAdjustments /> },
        { name: "Privacy", icon: <HiOutlineLockClosed /> }
      ];
  return (
    <div className='border rounded-2xl w-96 mt-10  h-96'>
        <h2 className='text-blue-600 font-bold p-4'>CONTENTS</h2>
        {systems.map((system,index)=><div key={index} className='flex items-center mt-3 pl-3 italic space-x-2'><span>{system.icon}</span><span>{system.name}</span></div>)}

        <hr className='mt-10'/>

        <div className='bg-blue-700 text-white mt-3 ml-2 p-1 mr-2 rounded-xl'>
            <h3>Need help?</h3>
            <p>Contact our support team for legal inquiries.</p>
        </div>

    </div>
  )
}

export default LeftPannel