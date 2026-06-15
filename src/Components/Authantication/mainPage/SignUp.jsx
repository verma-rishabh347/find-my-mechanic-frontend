import { Settings, ShieldCheck, CalendarCheck, Wallet } from "lucide-react";
import SignUpRightPart from './SignUpRightPart';

function SignUp() {

  const options = [{img:<ShieldCheck />,head:"VERIFIED MECHANICS",body:"Every professional on our platform undergoes a rigorous vetting process."},{img:<CalendarCheck />,head:"EASY ONLINE BOOKING",body:"Schedule services in seconds with real-time availability tracking"},{img: <Wallet />,head:"TRANSPARENT PRICING",body:"No hidden costs. Get instant quotes before you confirm your booking."}]
  
  return (
    <div className='flex'>
    <div className='bg-[url("https://png.pngtree.com/thumb_back/fh260/background/20211115/pngtree-plain-abstract-blue-background-hd-with-wave-image_916069.png")] bg-center p-10  bg-cover w-[60%]'>
       <div className='flex mt-10'><Settings />
       <h1 className='text-3xl '>  Find My Mechanic</h1>
       </div>
       
       <h2 className=' mt-5 tracking-wider text-5xl'>Your car's health, <br /> <span className='text-blue-800'>in professional hands.</span></h2>
       <p className='mt-5 tracking-wider text-blue-800 '>Join thousands of car owners who trust our network <br /> for reliable, transparent, and high-quality vehicle <br />maintenance.</p>


              <div className='mt-20'>

                    {options.map((option, index) => (
                      <div className='flex mt-8 border rounded-2xl p-4  bg-blue-100' key={index}>
                        <div>{option.img}</div>
                        <div><h3>{option.head}</h3>
                        <p>{option.body}</p></div>
                      </div>
                    ))}
              </div>

      <hr  className='text-white mt-10'/>
      <div className='mt-5 text-center text-white'>© 2024 Find My Mechanic. Quality service you can trust.</div>
    </div>
    

<SignUpRightPart />

                    
   











    </div>
    
  )
}

export default SignUp
