import { Link } from 'react-router-dom'

function Navbar() {
    var options = [{name: "Home",links:"/"},{name:"Find a Mechanic",links:"/find-mechanic"}, {name: "About Us",links:"/about"}, {name: "Contact",links:"/contactus"}]
    
  return (
    <><div className='text-black flex items-center justify-between z-50 sticky top-0 text-xl p-4 bg-gray-300 '>


        <Link to="/" ><img  className='h-12 rounded-2xl ml-10' src="mainlogowhite.png" alt="" /></Link>
        <div className=' flex gap-10 w-auto'>{options.map((option, index) => (
            <Link key={index}   to={option.links} className=" hover:text-blue-800 mx-2">
                {option.name}
            </Link>
        ))}</div>
       <div>
  
    <div className='flex'>
    <div className="mr-10 border bg-blue-900 text-white px-4 py-1.5 rounded-2xl">
      <Link to="/authantication/signin">
        Sign In
      </Link>
    </div>
    <div className="mr-10 border bg-blue-900 text-white px-4 py-1.5 rounded-2xl">
      <Link to="/businessprofilepage">
        Buisness Profile
      </Link>
    </div>



    <div className="mr-10 border bg-blue-900 text-white px-4 py-1.5 rounded-2xl">
      <Link to="/profilepage">
        Profile
      </Link>
    </div>

    </div>


</div>
  

    </div>
    </>
  )
}

export default Navbar
