
const PrivacyPilocyPage = () => {
    const systems = [{head:"Data Safety",body:"Your vehicle data is encrypted and never sold to third-party advertisers."},{head:"Control",body:"You have full control over your service history and can delete your account at any time."},{head:"Transparency",body:"We clearly disclose what we track: just enough to find you the best mechanic."}]
    const info=[{head:"Account Info",body:"Name, email address, and phone number for booking confirmations."},{head:"Vehicle Details",body:"Make, model, year, and VIN to ensure mechanics have the right parts ready."},{head:"Location",body:' Used only when searching for "mechanics near me" to provide local results.'}]
    const YourData=[{head:"Service Optimization",body:"We analyze service requests to improve our matching algorithm and find the best specialists for your car."},{head:"Secure Communication",body:"Connecting you with mechanics via our secure platform ensures your personal phone number remains private."}]
    const yourrights=[{head:"Access & Portability",body:"Request a copy of all data we store about your vehicle and service history at any time."},{head:"The Right to be Forgotten",body:"Request the permanent deletion of your account and all associated personal identifiers."},{head:"Notification Preferences",body:"Opt-out of service reminders or marketing updates through your profile settings."}]
    return (
    <div className='m-auto  w-[75%]'>

        <div className='text-blue-900 text-5xl font-bold pt-10  '>Privacy Policy</div>
        <p className='pt-3'>Last updated: October 24, 2024</p>

        <div className='mt-8 bg-blue-900 text-white rounded-2xl'>
            <h2 className='text-start text-2xl p-10'>Privacy at a Glance</h2>
            <div className='flex'>
            {systems.map((system,index)=><div key={index} className='p-4 mt-4'><h3 className='text-xl text-amber-600 pl-3  font-bold'> {system.head}</h3><p className='pl-3'>{system.body}</p></div>)}
            </div>
        </div>



        <div className='border mt-10 pl-10 pb-4  rounded-2xl'>
            <h2 className='text-start mt-4 text-3xl text-blue-800 font-bold'>Information We Collect</h2>
            <p className='italic mt-4 mb-3 tracking-wider '>To provide you with high-quality automotive service matching, we collect the following types of information:</p>
            {
                systems.map((system,index)=><div key={index} ><span className='font-bold' > {info[index].head}: </span><span className='italic tracking-wider ' > {info[index].body}</span></div>)
            }

        </div>


        <div className='border mt-10 pl-10 pr-10  pb-4  rounded-2xl'>
            <h2 className='text-start mt-4 text-3xl text-blue-800 font-bold'>How We Use Your Data</h2>
            <p className='italic mt-4 mb-3 tracking-wider '>We treat your data like a precision engine—only using it for its intended purpose:</p>

            <div className='flex gap-4'>
            {YourData.map((data,index)=>(<div className='border bg-slate-50 rounded-2xl' key={index}><h3 className='font-bold mt-2 p-2'>{data.head}</h3><p className='mt-1 pl-2 mb-2 tracking-wider'>{data.body}</p></div>))}
        </div>

        </div>

        





        <div className='border mt-10 pl-10 pr-10  pb-4  rounded-2xl'>
            <h2 className='text-start mt-4 text-3xl text-blue-800 font-bold'>Your Rights & Choices</h2>
            <p className='italic mt-4 mb-3 tracking-wider'>You have total control over how your information is handled within the Find My Mechanic ecosystem.</p>
            {yourrights.map((data,index)=>(<div className='mb-1.5' key={index}><h3 className='font-bold '>{data.head}</h3><p className='italic'>{data.body}</p></div>))}
        </div>

        <div>
            <div>
            
        </div>

        <div className='flex border mt-10 pl-10 pr-10  pb-4  rounded-2xl justify-between '>
            <div><h1 className='text-3xl mt-2.5 text-blue-900'>Have questions?</h1>
            <p className='italic'>Our privacy team is here to help you understand your data.</p></div>
            <div className='mt-2.5'><button className='border bg-blue-900 text-white pt-5 pb-5 pl-3 pr-3 rounded-2xl'>Contact Privacy Team</button></div>
        </div>
        </div>



    </div>
  )
}

export default PrivacyPilocyPage