
const SendMessage = () => {
  return (
    <div className=' border p-10  rounded-2xl pb-20'>
        <h2 className='text-2xl text-blue-800'>Send us a message</h2>
        <div className='flex gap-7 mt-10'>
            <div >
            <label htmlFor="">Full Name</label> <br />
            <input className='border w-68 rounded h-11' type="text" placeholder='  Rishabh Verma' name="" id="" />
            </div>
            <div>
            <label htmlFor="">Email</label> <br />
            <input className='border w-68 rounded h-11' type="text" placeholder='  rishabhverma@gmail.com' />
            </div>
        </div>
        <div className='mt-5'>
            <label htmlFor="">Subject</label> <br />
            <input type="text" className='w-full h-11 border rounded' placeholder='  Subject' />
        </div>
        <div className='mt-6'>
            <label htmlFor="">Message</label> <br />
            <textarea className='border h-40 w-full max-h-46' placeholder='   How we can help you ...' />
        </div>
        <button className='text-white rounded bg-amber-600 pt-3 pb-3 pl-7 pr-7'>Send Message</button>



    </div>
  )
}

export default SendMessage