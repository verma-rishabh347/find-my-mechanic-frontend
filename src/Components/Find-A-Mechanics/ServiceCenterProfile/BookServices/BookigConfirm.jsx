
import { CheckCircle2, CalendarDays, Clock, Car } from "lucide-react";
import { Link } from "react-router-dom";

function BookigConfirm() {
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
            <div className="flex items-center gap-3">
              <Car className="text-[#0b2d89]" />
              <div>
                <p className="text-sm text-slate-500">Vehicle</p>
                <p className="font-medium">Tesla Model 3</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="text-[#0b2d89]" />
              <div>
                <p className="text-sm text-slate-500">Date</p>
                <p className="font-medium">15 June 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-[#0b2d89]" />
              <div>
                <p className="text-sm text-slate-500">Time</p>
                <p className="font-medium">10:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-medium text-amber-800">
            Status: Pending Confirmation
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