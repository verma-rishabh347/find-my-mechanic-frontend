import {
  HiOutlineDocumentText,
  HiOutlineCash,
  HiOutlineCalendar,
  HiOutlineAdjustments,
  HiOutlineLockClosed
} from "react-icons/hi";

const RightDetails = () => {
    const systems = [
            { name: "User Agreement", icon:  <HiOutlineDocumentText /> , detail:"To use Find My Mechanic, you must be at least 18 years of age and possess the legal authority to enter into this agreement. By creating an account, you represent that:",lines:["All registration information you submit is truthful and accurate.","You will maintain the accuracy of such information.","Your use of the services does not violate any applicable law or regulation.","You are responsible for maintaining the confidentiality of your account credentials."] },
            { name: "Booking & Payments", icon: <HiOutlineCash /> , detail:"All service quotes provided through the platform are estimates based on user-provided information. Final costs may vary depending on the actual condition of the vehicle upon physical inspection.",lines:["Payment is processed securely through our authorized payment gateways.","Mechanics are paid only after the service is marked as complete and verified by the user.","A service fee of 5% is applied to all transactions to maintain the platform's trust and safety systems."]   },
            { name: "Cancellation Policy", icon: <HiOutlineCalendar /> , detail:"Users may cancel a booking without penalty up to 24 hours before the scheduled service time. Cancellations made within 24 hours of the appointment may be subject to a cancellation fee of $20 or 50% of the estimated service cost, whichever is less.",lines:["To cancel a booking, users must log into their account, navigate to the 'My Bookings' section, and select the 'Cancel' option for the relevant appointment.","Refunds for eligible cancellations will be processed within 5-7 business days through the original payment method."] },
            { name: "Liability ", icon: <HiOutlineAdjustments />,detail:"Find My Mechanic acts as a marketplace connecting car owners with independent mechanics. While we vet all service providers, the following limits apply:",lines:["We are not responsible for the quality of work performed by independent contractors.","Any damage claims must be settled directly with the service provider's insurance.","Our maximum liability for platform errors is limited to the service fee paid for the specific transaction."] },
            { name: "Privacy", icon: <HiOutlineLockClosed />, detail:"Your privacy is paramount. We handle your data according to our comprehensive Privacy Policy, which is incorporated into these terms by reference. Key points include:",lines:["We only share necessary vehicle and contact info with your chosen mechanic.","Payment details are encrypted and never stored on our local servers.","You have the right to request data deletion at any time through your profile settings."]}
          ];
  return (
    <div className='border mt-10 rounded-2xl'>
        <div><h1 className='text-5xl font-bold p-10 text-blue-800'>Terms of Service</h1>
     
        <p className='italic tracking-wider pt-7 pl-10  pr-20 '>Welcome to Find My Mechanic. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. These terms govern your relationship with our services, mechanics, and other users.</p>
        </div>

        {systems.map((system,index) => (<div key={index} className='my-4 ml-10 bg-slate-100 rounded-2xl mr-14  p-4 mt-10 border'><h2 className='text-blue-900 p-2 flex text-2xl'>{index+1}. <span className='pt-1'>{system.icon}</span> {system.name}</h2><p className='pl-3 mb-3'>{system.detail}</p><ul>{system.lines.map((line,i)=>(<li className='pl-4' key={i}>{line}</li>))}</ul></div>
        ))}

        <hr className='ml-10  text-blue-700 mr-10' />
        <div className='flex'><p className=' italic tracking-wider ml-15 pt-10 pb-10 mr-15 '>By clicking "I Agree" during account setup, or by continuing to use our services, you acknowledge that you have read and understood these Terms of Service.</p>
        <button className='mr-15 border p-4 pl-9 pr-9 h-20 mt-5 rounded-2xl text-white bg-blue-900'>Accept Terms</button></div>
        


    </div>
  )
}

export default RightDetails