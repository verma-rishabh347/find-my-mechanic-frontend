import { MapPin, Mail, Phone, Clock } from "lucide-react";

const ContactDetails = () => {
    const details = [{img:<MapPin />,name:"Office Address",desc:"Sector 15,Kamiri Road ,Hisar"},{img:<Phone />,name:"PHONE",desc:"+91 7206345679"},{img:<Mail />,name:"EMAIL",desc:"rishabhverma241204@gmail.com"},{img:<Clock />,name:"Operating Hours",desc:"Mon - Fri: 8:00 AM - 6:00 PM EST . Sat: 9:00 AM - 2:00 PM EST"}]
  return (
    <div className='rounded-2xl w-[35%] border bg-blue-100'>
        <h1 className='text-4xl p-10'>Contact Information</h1>
        <div  >
        {details.map((item)=>(<div key={item.name} className='flex w-[80%] ml-10 rounded-2xl p-4 gap-3 bg-slate-300  mb-11 border '><div className='pt-3'   >{item.img }</div><div><h3 className='text-blue-600'>{item.name}</h3>  <p>{item.desc}</p></div></div>))}
        </div>




    </div>
  )
}

export default ContactDetails
