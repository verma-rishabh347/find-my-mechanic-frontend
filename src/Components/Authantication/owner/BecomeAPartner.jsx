import HeroSection from '../becomeApartner/HeroSection'
import { TrendingUp, LayoutGrid, Wallet, Quote } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
  // setupservicecenterprofile

const BecomeAPartner = () => {
  const nav = useNavigate();
  const onnextpage = () =>
  {
    nav("/shopdetailsform")
    // nav("/setupservicecenterprofile")

    

  
  }
   const Whypartner = [
    {
      icon: <TrendingUp size={28} />,
      head: "Steady Customer Flow",
      body: "Reach thousands of local car owners actively looking for services in your area every single day."
    },
    {
      icon: <LayoutGrid size={28} />,
      head: "Easy Management",
      body: "A streamlined dashboard to manage appointments, staff availability, and your service menus with ease."
    },
    {
      icon: <Wallet size={28} />,
      head: "Reliable Payments",
      body: "Secure and fast payments directly to your account with transparent service fees and zero hidden costs."
    }
  ]

  return (
    <div className="bg-[#f5f7fb] min-h-screen">
      <HeroSection />

      <div className="py-20 px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0b2c78]">
            Why Partner With Us?
          </h2>

          <div className="w-24 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {Whypartner.map((data, index) => (
            <div
              key={index}
              className="bg-white w-[360px] rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#edf3ff] flex items-center justify-center text-[#0b2c78] mb-6">
                {data.icon}
              </div>

              <h2 className="text-3xl font-bold text-[#0b2c78] mb-4">
                {data.head}
              </h2>

              <p className="text-gray-600 text-lg leading-8">
                {data.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-lg grid md:grid-cols-2">
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=1200&auto=format&fit=crop"
              alt="Mechanic"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#072a82] text-white p-12 flex flex-col justify-center">
            <Quote className="text-orange-400 mb-6" size={40} />

            <h2 className="text-4xl font-bold leading-[55px] mb-8">
              "Find My Mechanic transformed my small workshop into a busy hub.
              My bookings increased by 40% in just three months without any
              marketing spend on my part."
            </h2>

            <div>
              <h3 className="text-orange-400 font-semibold text-lg">
                Rajesh Kumar
              </h3>

              <p className="text-gray-200 text-lg">
                Owner, Precision Auto Works
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#eef1f5] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#0b2c78] mb-6">
            Ready to grow your workshop?
          </h2>

          <p className="text-gray-600 text-2xl leading-10 mb-12">
            Join the future of automotive service and reach customers you never
            could before.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={onnextpage} className="bg-orange-400 hover:bg-orange-500 text-white px-12 py-4 rounded-xl text-xl font-semibold duration-300 shadow-md">
              Get Started
            </button>

            <button className="border-2 border-[#0b2c78] text-[#0b2c78] hover:bg-[#0b2c78] hover:text-white px-12 py-4 rounded-xl text-xl font-semibold duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BecomeAPartner