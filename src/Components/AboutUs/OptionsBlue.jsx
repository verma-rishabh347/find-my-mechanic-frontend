function OptionsBlue() {
    const options = [ {Heading:"15k+",body:"Verified Mechanics"},{Heading:"50k+",body:"Happy Customers"},{Heading:"100%",body:"Service Guarantee"}]
  return (
    <div className='bg-blue-900 flex justify-evenly text-white'>

       {options.map((option,index)=>(<div className='text-center pt-10 pb-10' key={index}><h2 className='text-5xl'>{option.Heading}</h2><p>{option.body}</p></div>))}

        



    </div>
  )
}

export default OptionsBlue
