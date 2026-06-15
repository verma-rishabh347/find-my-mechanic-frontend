import { useState } from "react";

const Notification2 = () => {
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);
  const [push, setPush] = useState(true);

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm">
      
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Notifications
      </h2>

      <div className="space-y-6">
        <div className="flex items-center justify-between gap-5">
          
          <div>
            <label className="text-lg font-semibold text-gray-800">
              Email Notifications
            </label>

            <p className="text-gray-500 mt-1">
              Receive service reminders and invoice updates via email.
            </p>
          </div>

          <button
            onClick={() => setEmail(!email)}
            className={`w-14 h-8 rounded-full relative transition ${
              email ? "bg-[#0b2d89]" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full absolute top-1 transition ${
                email ? "right-1" : "left-1"
              }`}
            ></div>
          </button>
        </div>
        <div className="flex items-center justify-between gap-5">
          
          <div>
            <label className="text-lg font-semibold text-gray-800">
              SMS Notifications
            </label>

            <p className="text-gray-500 mt-1">
              Get instant text alerts when your vehicle is ready for
              pickup.
            </p>
          </div>

          <button
            onClick={() => setSms(!sms)}
            className={`w-14 h-8 rounded-full relative transition ${
              sms ? "bg-[#0b2d89]" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full absolute top-1 transition ${
                sms ? "right-1" : "left-1"
              }`}
            ></div>
          </button>
        </div>
        <div className="flex items-center justify-between gap-5">
          
          <div>
            <label className="text-lg font-semibold text-gray-800">
              Push Notifications
            </label>

            <p className="text-gray-500 mt-1">
              Browser and mobile alerts for active booking status.
            </p>
          </div>

          <button
            onClick={() => setPush(!push)}
            className={`w-14 h-8 rounded-full relative transition ${
              push ? "bg-[#0b2d89]" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full absolute top-1 transition ${
                push ? "right-1" : "left-1"
              }`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification2;
