


import { useNavigate } from "react-router-dom";

const ViewProfile = () => {
    const nav = useNavigate();
    const onnextpage = ()=>
    {
        nav("/bookingpage");
    }
  const services = [
    {
      icon: "charging_station",
      title: "Engine Diagnostics",
      desc: "Advanced computer scanning and mechanical diagnosis for all modern powerplants.",
    },
    {
      icon: "settings_input_component",
      title: "Brake Repair",
      desc: "Full rotor resurfacing and performance pad installation for ultimate stopping power.",
    },
    {
      icon: "oil_barrel",
      title: "Oil & Fluids",
      desc: "Synthetic oil changes and specialized fluid flushes for transmission and cooling systems.",
    },
    {
      icon: "electrical_services",
      title: "Electrical Systems",
      desc: "Precision troubleshooting for complex wiring, battery, and alternator issues.",
    },
  ];
  const days = [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ];

  const team = [
    {
      name: "Marcus Thorne",
      role: "Lead Master Technician",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBH7gi_nqXJJgO0O_3cpevSY_v7q5-MasVxEBVCOCToOWPxt6S5L_C1eSMjZ9uERGNP-HYbeu2kMtv9U4jRUfdv-un-HtmyA8ESdJJkbKfYYppT1hkVpeipQekgKiwVgFErzZUCMgbWlUv-A--tVKuhy8PBM5Vn0vSq2YghQL1KlIgex-vjdbYR8lXIf-OOFxF_Sioo4KVrzW0g3u0_YwZtRcLMaEx96cXpTaBTfusiMf6XdHh-_bhy3xS0Wit4SQnioyPcSQbdSL6L",
    },
    {
      name: "Elena Rodriguez",
      role: "European Specialist",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBZs5q4iwfoQljRkyVtaC_Gp9ty8uwgrsoC_nyZZoWC7Z69IanW9h9jbF8NgtPKx0djwsNyCQ_njfwTtYeT35rvcwbsLaqE60evXk0F3AvgRZZAeePun7F6-3q0KsyylxFbk3e09bKGjq4wkGPtkDdenCUQMWIOuBAoIgUCf7UUhEsxfLSSNQ9UwSVZkESuxOFI8-YxaXcA1aOhsTY16ontE69aMRyQKi2hK6BKK_LNjENx-b_GmBURoBmBT5AfTXa5RPikpSXiA124",
    },
  ];

  const gallery = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBbsSeJUZSMi-xAxE_UI8wUiU2_MnzgDQMXSaJIlbfT9qx-AJsq46-X_UvE4rM0jJoqY0hjsDzRXGwY7Pl1-6TIq095HbWfzx5QX9yGR6ARrWLZ85PzluxJa6Kkp8erUtTf6G_K43UMxDU-4am3i9yXDzF17XLo5MNFEK21FqwTnsBFeHkSKHhJlwJ37694mexthe4DTZuT7zBMsAovP5LrIGtjFhc8EKmysei-5QWkE1F4RLb0rchK72jFFsDGz7r1q1Nvlta6UbW4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCgnSJir2yzfPrNBp3h3e8honp8597LMRvOvSKxboDo41j1b7_vj4jU5Pjj524pdw7JDsahLYX7ST6dgGD9cInLRjmJMCpa4xs6WRLactcuR05o13XJk1hDGX18yxQa2AmuQLhGejZLwlhE_uKLUaC9Rl9YGfcSlK6moeB-1ycup9XRh6UQWJ-Y8uDAWL5HlYTLARlpgHqV62JuJIlquHiuD37Wy8triC7MCtS32BniaejSvJD9qiaAvTgboExRiugxvFOURcEhYiFg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC-CeH7SK13u4GRYXfVoExmfEGP8fskqEsP4mdkzfbUIPu8sTUtwBgafKUhKzPVeMVFdkUYKavJno6M28ntwyI35rmN5Y4Nd41tUPcp8rWo9luaIDll3mXU3dciZmMvY-EMhqo9i1ULhs-V5mJKwroGWPVAWWzlFsqsOj3ArV8vwmdwFSlVn-kpqrZNfWahgImCuYemSeWaLbEWLUkKpJxq4JK6hvQJXSC8TqAEPj0LFSjBP9FUxAAWRJLEh5WLwPVQm3HVrTqmTOkF",
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-gray-900">
      

      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="relative overflow-hidden rounded-3xl shadow-lg">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxoYw5NjEDlwwZy6Ptjq-KGeYRqBPoWs2DoF_yieCe4elFSBj0_8rXyTvHrMymAB-JUn_O74odDzN0PleEQCXDLEW8N7x4dipm2Y3gfd3EtrWPqZjE-T9C7cpxnkEJAo0h1u4G68pDVbrwf6nRNgGFhe9OMJstJ70h1tGigHGHcFUVra4NzwaX_1PFPuEQpYjw_6S1dpS6zH6EWdXpncGklAuqrMXe4A5oigesWh1CcwVyTCK366SQkP1ebaan5urFDtHfd8AzGVV3"
            alt=""
            className="h-[500px] w-full object-cover"
          />

          <div className="absolute  bg-gradient-to-t from-black/80 to-black/20" />

          <div className="absolute bottom-0 left-0 flex w-full flex-col justify-between gap-6 p-8 md:flex-row md:items-end">
            <div>
              

              <h2 className="mt-4 text-5xl font-bold text-white">
                 Swift Mechanics
              </h2>

              <div className="mt-4 flex items-center gap-2 text-yellow-400">
                
                <span className="ml-2 text-lg font-semibold text-white">
                  4.9
                </span>
                <span className="text-gray-300">(500+ reviews)</span>
              </div>
            </div>

            <button onClick={onnextpage} className="rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:scale-105">
              Book an Appointment
            </button>
          </div>
        </section>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">
            <section className="rounded-3xl border bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-blue-900">
                About Swift Mechanics
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                With over 20 years of dedicated service,  Swift Mechanics
                has established itself as the premier destination for discerning
                vehicle owners. Specializing in both intricate European
                engineering and robust domestic vehicles, our master technicians
                bring a level of technical expertise that ensures your car
                performs as well as the day it left the showroom.
              </p>
            </section>

            <section>
              <h2 className="mb-8 text-3xl font-bold text-blue-900">
                Services Offered
              </h2>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {services.map((service) => (
                  <article
                    key={service.title}
                    className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-900">
                      🔧
                    </div>
                    <h3 className="mt-2 text-xl items-center justify-center  font-bold text-gray-900">
                      {service.title}
                    </h3>

                    </div>
                    
                   
                  </article>
                ))}
              </div>
            </section>

            
           

            <section>
              <h2 className="mb-8 text-3xl font-bold text-blue-900">
                Customer Testimonials
              </h2>

              <div className="space-y-5">
                <div className="rounded-3xl  border-blue-900 bg-white p-6 ">
                  <p className="mb-4 text-yellow-500">★★★★★</p>

                  <p className="italic text-gray-700">
                    "Found them through this app and couldn't be happier. They
                    diagnosed a tricky electrical issue on my BMW that two other
                    shops missed."
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-900">
                      JD
                    </div>

                    <span className="font-semibold">James D.</span>
                  </div>
                </div>

                
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div className="sticky  rounded-3xl border bg-white p-8 ">
              <h2 className="text-2xl font-bold text-blue-900">
                Location & Contact
              </h2>

              
                 <iframe
  className="mt-5 h-52 w-full rounded-2xl border"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13940.215760924808!2d75.70919765942942!3d29.13359939941505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912334a008f49d3%3A0x86e368d9f064e503!2ssector%2015%2C%20Housing%20Board%20Colony%2C%20Sector%2015A%2C%20Hisar%2C%20Haryana%20125001!5e0!3m2!1sen!2sin!4v1779081504036!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  title="map"
/>




              <div className="mt-6 space-y-4 text-gray-700">
                <p>📍 1234 Mechanics Way, Auto District, CA 94103</p>
                <p>📞 (555) 012-3456</p>
              </div>

              <hr className="my-8" />

              <h2 className="text-2xl font-bold text-blue-900">
                Operating Hours
              </h2>

              <div className="mt-5 space-y-3">
                

                <div className="flex items-center justify-between">
                  <span>Monday-Saturday</span>
                  <span className="font-semibold">9:00 AM - 8:00 PM</span>
                </div>

                <div className="flex items-center justify-between text-red-500">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>

              <button className="mt-8 w-full rounded-2xl bg-blue-900 py-4 font-semibold text-white transition hover:bg-blue-800">
                Book Service Now
              </button>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
};

export default ViewProfile;
