import { useEffect, useState } from 'react';
import Heading from '../../Components/Find-A-Mechanics/Heading'
import ObjectShow from '../../Components/Find-A-Mechanics/ObjectShow'
import api from '../../data/axios/Axios'
import { useSearchParams } from 'react-router-dom';


function FindAMechanicPage() {


  const [dta,setdta] = useState([]);

  const handlegetapi = async () =>
  {
   try{
     const res = await api.get("/FindMechanics/GetAllStationDetail");
     setdta(res.data.data);
       console.log(res.data.data);

   }
   catch(err)
   {
    console.log(err);

   }

  }

  useEffect(()=>{handlegetapi()},[]);
  return (
    <>
      <Heading />
      <div className='pl-15 pr-15 pt-10 flex flex-3 mb-13'>
        {dta.map((data, index) => (
  <div key={index}>
    <ObjectShow dta={data} />
  </div>
))}
        
   
      
      
      </div>
    </>
  )
}

export default FindAMechanicPage
