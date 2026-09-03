import { useEffect, useState } from "react";
import api from "../../../data/axios/Axios";

const ServiceHistoryComponent = () => {

  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    try {
      const response = await api.get("/UserBooking");

      setBookings(response.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
              Date
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
              Vehicle
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
              Vehicle Number
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
              Mechanic/Shop
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
              Cost
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
              Result
            </th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking,index) => (
            <tr 
              key={index}
              className="border-t border-gray-200 hover:bg-gray-50 transition"
            >
              <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                {booking.bookingDate}
              </td>

              <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                {booking.vehicleId}
              </td>

              <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                {/* Abhi API me vehicleNumber nahi aa raha */}
                {booking.vehicleId}
              </td>

              <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                {booking.serviceStationId}
              </td>

              <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                ₹{booking.totalAmount}
              </td>

              <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                {booking.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceHistoryComponent;