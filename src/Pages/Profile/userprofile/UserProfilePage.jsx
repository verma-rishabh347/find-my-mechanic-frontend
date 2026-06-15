import UserProfileLeftPannel from '../../../Components/Authantication/user/UserProfileLeftPannel'
import { Outlet } from 'react-router-dom'

function UserProfilePage() {
  return (
    <div className='flex'>
    <UserProfileLeftPannel/>
    <Outlet/>
    
    </div>
  )
}

export default UserProfilePage
