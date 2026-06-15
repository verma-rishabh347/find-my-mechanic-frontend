
const MindsBehind = () => {
    const options = [{img:"rishabh.jpeg",name:"Rishabh Verma",role:"Chief Executive Officer"},{img:"vikas.jpeg",name:"Vikas Jangra",role:"Head of Operations"},{img:"abhi.png",name:"Abhishek Verma",role:"CTO & Founder"},{img:"chagal.jpg",name:"Sahil Kamboj",role:"Head of Community"}]
  return (
    <div className='bg-gray-200 '>
        <div className='text-4xl  text-blue-700 pt-8 text-center'>The Minds Behind the Engine</div>
        <div className='flex mt-10 pb-8 justify-evenly'>
            {options.map((option,index)=>(<div key={index} className=' text-center items-center'><img src={option.img} className='h-62 rounded-full' alt="" /><h3 className='text-2xl  text-blue-600 pt-4'>{option.name}</h3><p>{option.role}</p></div>))}
        </div>


    </div>
  )
}

export default MindsBehind