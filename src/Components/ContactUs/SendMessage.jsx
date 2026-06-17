import { useState } from "react"
import api from "../../data/axios/Axios"

const SendMessage = () => {

    const [subject,setsubject] = useState("");
    const [message,setmessage] = useState("");

    const handleapi= async () =>
    {
        if (!subject.trim() || !message.trim()) {
  alert("Please fill all fields");
  return;
}
        try
        {
            const res = await api.post("/AppReview",{subject:subject,message:message});
            console.log(res.data.data);
             setsubject("");

    setmessage("");
        }
        catch(err)
        {
            console.log(err);
        }
    }
  return (
    <div className=' border p-10  rounded-2xl pb-20'>
        <h2 className='text-2xl text-blue-800'>Send us a message</h2>
        <div className='flex gap-7 mt-10'>
           
        </div>
        <div className='mt-5'>
            <label htmlFor="">Subject</label> <br />
            <input value={subject} onChange={(e)=>setsubject(e.target.value)} type="text" className='w-[540px] h-11 border rounded' placeholder='  Subject' />
        </div>
        <div className='mt-6'>
            <label htmlFor="">Message</label> <br />
            <textarea value={message} onChange={(e)=>setmessage(e.target.value)} className='border h-40 w-full max-h-46' placeholder='   How we can help you ...' />
        </div>
        <button onClick={handleapi} className='text-white rounded bg-amber-600 pt-3 pb-3 pl-7 pr-7'>Send Message</button>



    </div>
  )
}

export default SendMessage