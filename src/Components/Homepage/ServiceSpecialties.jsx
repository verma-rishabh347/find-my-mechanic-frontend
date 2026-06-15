import { useNavigate } from "react-router-dom"

function ServiceSpecialties() {
    let options = [{name:"Engine Diagnostics",img:"https://lh3.googleusercontent.com/aida-public/AB6AXuCrP1z66Axj12hq8eJMTpfKbrTPC_54As1VW8b9jeJkpWf_fon-7MOPNvikcQqSyJpPX6b4dIfZJRS93hwXRrgiF52VPX8Iw1k9JawtlhbI5hIzYF1u_SIvRslLKv2MBIL-c3KHwppGGkshxNFTIpBNMFCOjaxS08NGTRwMWbWbSHFS0aW75SqGLwwH_L9b05j7a6CfAWtWx4IkO_GyRDni1P7ccwD_fGuUU9ky_YEck4vr2Z5xhEMTkcDm2HBIIsxzb9DFEmF0Jz5U"},{name:"Brake Service",img:"https://lh3.googleusercontent.com/aida-public/AB6AXuD_-QSD_bTMnuQdXropMhcwL_QTC-DFuH4dHSQ5cPh3Qy1DBLI9sx3Bzt_jpE6yXtmdjk_EJ3fPuNVFpXw9bAffKtma0GqUuqpGY-43GDrCqB1Le_eDWFFeu9IA5ClMRgQQnv1lX-1TyeHRdAU5bmBIoYUbE3OCv8WPpoA-OMhcDt04iGcNCW4ckOMtDLh-S9RNk04RkG4WGFViCUEtKHzbMMDZHtw9C5clfqK-r2Q8YOCD3pJFvE1NYUeNpyZkbJ_6elc3mK7JL67Q"},{name:"Oil & Filter",img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAzSmZNYosJ9BOfD_ZBe4abMQ7-mCDl7jTnICL-enaQt-MN_zkEjJ1ofco66muQUAJWeZRCg76DFGGCBZGZTnBmOddxZqotDu49gUPNqoYWdWt0iojJmHYvDiulKNwFddnw_iREEENTWn5pn_eEb-dXXeD1oXVIwGv_nUXaRpXeTY--KsbZ9xdNQI7go8PeAV93EmsUk1g4ID0nRDpNRimB3pcjBSsl1YYDpJa9WrllnnaakziGAK79a-kq8KxddOyFdeg3nsDnuMPa"},{name:"Tire Specialist",img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAmHcXOgpayLldJpZAxfCGd9r5xPnngVPq5TFtgIvf9Bmnh6x7Hqi8BA-69w2DLhJypQoqArqAPCRFZgcJrUFwTaTT8Nd6OohoilPgpblAosnN6iW9xcvlAvFiACYKM95DwVJrFD-AfEx3YB73WvUKrYJlflQkEDkrXk2bkjyF_PVQB0GrpeZRtU81rzeTjPHjYFADSGK6FYINV2L3f08Pe6ffU-NIV3xITtEZGY8ZymQUosB25nesrGjMTKu9eTQcuCQQwehSyDFaM"}]
    const navigate = useNavigate();
    const onservicepage = () =>

        {
            navigate("/find-mechanic")

        }
  
    return(
    <div className='bg-blue-50 mt-14'>
    <div className='flex justify-between pl-20 pr-20'  >
        <div><h1 className='text-4xl pt-8 text-blue-800'>Service Specialties</h1>
            <p>Whatever your car needs, we have the expert for it.</p>
        </div>
        
    </div>
    <div className='flex justify-evenly pt-8 pb-10 '>
        {options.map((option)=>(<div key={option.name} className=' bg-white rounded rounded-4xl ' ><img onClick={onservicepage} src={option.img} className='h-56 rounded rounded-t-2xl w-56' alt={option.name} /><h3 className='pt-3 text-blue-900 text-2xl text-center mb-3'>{option.name}</h3></div>))}


    </div>
    
    </div>
  )
}

export default ServiceSpecialties
