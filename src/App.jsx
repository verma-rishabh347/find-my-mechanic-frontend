import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Home/Homepage'
import Footer from './Components/Footer/Footer'
import FindAMechanicPage from './Pages/Find-A-Mechaninc/FindAMechanicPage'
import SignUp from './Components/Authantication/mainPage/SignUp'
import SignIn from './Components/Authantication/mainPage/SignIn'
import AuthanticationPage from './Pages/Authantication/AuthanticationPage'
import AboutUsPage from './Pages/About-Us/AboutUsPage'
import ContactUsPage from './Pages/Contact-Us/ContactUsPage'
import TermsServicesPage from './Pages/TermsAndServices/TermsServicesPage'
import PrivacyPilocyPage from './Pages/PrivacyPolicy/PrivacyPilocyPage'
import ForgotPassword from './Components/Authantication/common/ForgotPassword'
import VerifyEmail from './Components/Authantication/common/VerifyEmail'
import CreatePassword from './Components/Authantication/common/CreatePassword'
import ResetSuccess from './Components/Authantication/common/ResetSuccess' 
import SetupUserProfile from './Components/Authantication/user/SetupUserProfile'
import ScrollToTop from './resuable/ScrollToTop'
import UserProfilePage from './Pages/Profile/userprofile/UserProfilePage'
import PersonalInformation from './Components/Authantication/user/PersonalInformation'
import MyVechile from './Components/Authantication/user/MyVechile'
import SeviceHistory from './Components/Authantication/user/SeviceHistory'
import WebsiteSettings from './Components/Authantication/user/WebsiteSettings'
import ViewProfile from './Components/Find-A-Mechanics/ServiceCenterProfile/ViewProfile'
import BookServices from './Components/Find-A-Mechanics/ServiceCenterProfile/BookServices'
import BookingPage from './Pages/Find-A-Mechaninc/bookingpage/BookingPage'
import BecomeAPartner from './Components/Authantication/owner/BecomeAPartner'
import BusinessProfilePage from './Pages/Business/BusinessProfilePage'

import UserAddress from './Components/Authantication/user/UserAddress'
import UserAddressCreate from './Components/Authantication/user/UserAddressCreate'
import ShopDetailsForm from './Components/Authantication/owner/ShopDetailsForm'
import ShopAddressForm from './Components/Authantication/owner/ShopAddressForm'
import AskVehicleType from './Components/Authantication/owner/AskVehicleType'
import BikeServicesList from './Components/Authantication/owner/BikeServicesList'
import CarServicesList from './Components/Authantication/owner/CarServicesList'
import OwnerProfile from './Components/BusinessProfile/OwnerProfile'
import ServiceStationProfile from './Components/BusinessProfile/ServiceStationProfile'
import DashBoard from './Components/BusinessProfile/DashBoard'
import MechanicProfiles from './Components/BusinessProfile/MechanicProfiles'
import Bookings from './Components/BusinessProfile/Bookings'
import Reviews from './Components/BusinessProfile/Reviews'
import Services from './Components/BusinessProfile/Services'
import StationSettings from './Components/BusinessProfile/SatationSettings'
import ProtectedRoute from './ProtectedRoute'
import BookigConfirm from './Components/Find-A-Mechanics/ServiceCenterProfile/BookServices/BookigConfirm'
import ChangePassword from './Components/Authantication/user/ChangePassword'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>




       
        
      <Route path="/authantication" element={<AuthanticationPage />}   >
      <Route path="signup" element={<SignUp/>}   />
        <Route path="verifyemail" element={<VerifyEmail/>}   />
        <Route path="signin" element={<SignIn/>}   />
        <Route path="passwordreset" element={<ForgotPassword/>}   />
        <Route path="createpassword" element={<CreatePassword/>}   />
        <Route path="resetsuccess" element={<ResetSuccess/>}   />
        <Route path="setupuserprofile" element={<SetupUserProfile/>}   />


      </Route>


 

                 


      <Route  element={<ProtectedRoute/>} >



        <Route path='changepassword' element={<ChangePassword/>}   />




              <Route path="/" element={<Homepage />}   />
            <Route path="*" element={<Navigate to="/" replace />} />
            
            <Route path="/find-mechanic" element={<FindAMechanicPage />}   />

             <Route path='bookingpage'  element={<BookingPage/>}/>
             <Route path='bookingconfirm' element={<BookigConfirm/>}  />
            <Route path='viewProfile'  element={<ViewProfile/>}/>
            <Route path='becomeapartner' element={<BecomeAPartner/>} />
            <Route path='shopdetailsform' element={<ShopDetailsForm/>}   />
            <Route path='shopaddressform' element={<ShopAddressForm/>}   />
            <Route path='askvehicletype' element={<AskVehicleType/>}   />
            <Route path='bikeserviceslist' element={<BikeServicesList/>}   />
            <Route path='carserviceslist' element={<CarServicesList/>}   />






       <Route path='profilepage' element={<UserProfilePage/>}   >
        <Route index element={<Navigate to="personalinformation" replace />}/>
        <Route path='personalinformation'  element={<PersonalInformation/>}   />
        <Route path='myvechile' element={<MyVechile/>}   />
        <Route path="useraddress" element={<UserAddress/>} />
        <Route path="useraddresscreate" element={<UserAddressCreate/>} />
        <Route path='servicehistory' element={<SeviceHistory/>}   />
        <Route path='websitesettings' element={<WebsiteSettings/>}   />
      </Route>
      




      <Route path="/about" element={<AboutUsPage />}   />
      <Route path='/contactus' element={<ContactUsPage />} />
      <Route path='/termsandservices' element={<TermsServicesPage />} />
     


      
      <Route path='bookservices'  element={<BookServices/>}/>
      <Route path='privacypolicy' element={<PrivacyPilocyPage />} />






            <Route path='businessprofilepage'  element={<BusinessProfilePage/>}>
        <Route index element={<Navigate to="dashboard" replace />}/>
        <Route  path='dashboard'  element={<DashBoard/>}  />
        <Route  path='ownerprofile'  element={<OwnerProfile/>}  />
        <Route  path='servicestationprofile'  element={<ServiceStationProfile/>}  />
        <Route  path='mechanicprofiles'  element={<MechanicProfiles/>}  />
        <Route  path='bookings'  element={<Bookings/>}  />
        <Route  path='reviews'  element={<Reviews/>}  />
        <Route  path='services'  element={<Services/>}  />
        <Route  path='stationsettings'  element={<StationSettings/>}  />
      </Route>




      
      </Route>
     





    















      
     


      

  





      

      
      


       

    </Routes>


    
  
    </BrowserRouter>
    
    
     
    </>
  )
}

export default App
