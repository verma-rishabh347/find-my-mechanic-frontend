
import { CheckCircle2, CalendarDays, Clock, Car } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import api from "../../../../data/axios/Axios";
import { useEffect, useState } from "react";

function BookigConfirm() {

  const { id } = useParams();
  const [dta,setdta] =useState();

  const handlegetapi = async () =>
  {
    try{
      const res = await api.get(`/FindMechanics/ConfirmBooking`,   {params: { id }});
      setdta(res.data.data);
      console.log(res.data.data);


    }catch(err)
    {
      console.log(err);
    }
  }
  useEffect(()=>
  (handlegetapi),[]);
return (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-lg">

      <div className="text-center">
        <CheckCircle2
          size={80}
          className="mx-auto text-green-600"
        />

        <h1 className="mt-6 text-3xl font-bold text-slate-900">
          Booking Request Sent
        </h1>

        <p className="mt-3 text-slate-600">
          Your booking request has been submitted successfully.
          The service station will review your request and
          confirm the appointment shortly.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 p-6">
        <h2 className="mb-4 text-lg font-semibold">
          Booking Details
        </h2>

        <div className="space-y-4">

          {/* Vehicle */}
          <div className="flex items-center gap-3">
            <Car className="text-[#0b2d89]" />

            <div>
              <p className="text-sm text-slate-500">
                Vehicle
              </p>

              <p className="font-medium">
                {dta?.vehicleName}
              </p>
            </div>
          </div>


          {/* Date */}
          <div className="flex items-center gap-3">
            <CalendarDays className="text-[#0b2d89]" />

            <div>
              <p className="text-sm text-slate-500">
                Date
              </p>

              <p className="font-medium">
                {dta?.preferredServiceDate
                  ? new Date(dta.preferredServiceDate).toLocaleDateString(
                      "en-IN",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }
                    )
                  : ""}
              </p>
            </div>
          </div>


          {/* Time */}
          <div className="flex items-center gap-3">
            <Clock className="text-[#0b2d89]" />

            <div>
              <p className="text-sm text-slate-500">
                Time
              </p>

              <p className="font-medium">
                {dta?.preferredServiceDate
                  ? new Date(dta.preferredServiceDate).toLocaleTimeString(
                      "en-IN",
                      {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      }
                    )
                  : ""}
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* Status */}
      <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-4">

        <p className="font-medium text-amber-800">
          Status:{" "}
          {dta?.status === 0
            ? "Pending Confirmation"
            : dta?.status}
        </p>

        <p className="mt-1 text-sm text-amber-700">
          The service station has received your request and
          will approve or decline it shortly.
        </p>

      </div>


      <div className="mt-8 flex flex-col gap-3 sm:flex-row">

        <Link
          to="/profilepage/servicehistory"
          className="flex-1 rounded-xl bg-[#0b2d89] py-3 text-center font-medium text-white"
        >
          View My Bookings
        </Link>

        <Link
          to="/"
          className="flex-1 rounded-xl border border-slate-300 py-3 text-center font-medium"
        >
          Back to Home
        </Link>

      </div>

    </div>
  </div>
);
}

export default BookigConfirm;