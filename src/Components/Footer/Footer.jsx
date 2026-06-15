import { Link } from 'react-router-dom'

function Footer() {
    let options = [{heading:"Platform",body:[{head:"Find a Mechanic",link:"/find-mechanic"},{head:"Services",link:"/profilepage/servicehistory"},{head:"Bookings",link:"/bookings"}] },{heading:"Company",body:[{head:"About Us",link:"/about"},{head:"Contact Us",link:"/contactus"}] },{heading:"Legal ",body:[{head:"Privacy Policy",link:"/privacypolicy"},{head:"Become A Partner",link:"becomeapartner"},{head:"Terms of Service",link:"/termsandservices"}] }]

  return (
    <>
    <hr className='text-blue-500' />
    <div className='flex space-x-36 justify-evenly pt-10 ml-10 mr-20 '>


    <div  >
        <h3 className='text-2xl text-blue-700'>Find My Mechanic</h3>
        <p className='text-xs'>Professional, transparent, and <br />reliable automotive service at your <br /> fingertips.</p>
    </div>
    {
        options.map((option,index)=>(<div  key={index}>
            <h3 className='pb-2'>{option.heading}</h3>
            
                {option.body.map((item,itemIndex)=>(<><Link className='text-[14px] hover:text-blue-800 space-y-2' to={item.link} key={itemIndex}>{item.head}</Link><br /></>))}
            
        </div>))
    }
    

    </div>
    <hr className='mt-7' />
    <h3 className='text-center mt-5 mb-5'>© 2026 Find My Mechanic. Quality service you can trust.</h3>
    
    </>
  )
}

export default Footer