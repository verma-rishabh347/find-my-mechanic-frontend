import LeftPannelServiceStation from '../../Components/BusinessProfile/LeftPannelServiceStation'
import { Outlet } from 'react-router-dom'

const BusinessProfilePage = () => {
  return (
    <>
    <div className='flex'>
      <LeftPannelServiceStation/>
      <Outlet/>
    </div>
    
    </>
  )
}

export default BusinessProfilePage