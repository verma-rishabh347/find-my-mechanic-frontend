import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  const [city,setcity]=useState("");
  return (
    <div className=' text-white text-center grayscale-80 h-screen bg-cover bg-center bg-[url("https://w0.peakpx.com/wallpaper/7/996/HD-wallpaper-steampunk-mechanical-gears-and-mobile-background.jpg")]'  >
     <h1 className='text-7xl pt-80'>Expert Car Care, Simplified for You.</h1>
        <p className='text-xl mb-20 mt-32'>Connect with top-rated local mechanics and book your <br /> service with total peace of mind.</p>
        <span className='bg-white  w-96 rounded rounded-3xl  p-4 text-black'><input type="text" value={city} onChange={(e)=>setcity(e.target.value)} className='w-96' placeholder='Enter Your City' /><Link to={`find-mechanic?city=${city}`}>Find Mechanics</Link></span>
        

    </div>
  )
}

export default Hero
