import { useEffect, useMemo, useState } from "react";
import api from "../../../data/axios/Axios";

const STATUS_CONFIG = {
  0: { label: "Pending", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  1: { label: "Accepted", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  2: { label: "Rejected", classes: "bg-red-50 text-red-700 ring-red-200" },
  3: { label: "In Progress", classes: "bg-indigo-50 text-indigo-700 ring-indigo-200" },
  4: { label: "Completed", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  5: { label: "Cancelled", classes: "bg-gray-100 text-gray-500 ring-gray-200" },
};

function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] ?? {
    label: "Unknown",
    classes: "bg-gray-100 text-gray-500 ring-gray-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${config.classes}`}
    >
      {config.label}
    </span>
  );
}

function formatDate(isoString) {
  if (!isoString) return "—";
  const d = new Date(isoString);
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatCurrency(amount) {
  if (amount === null || amount === undefined) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function TableSkeletonRow() {
  return (
    <tr className="border-t border-gray-200">
      {Array.from({ length: 6 }).map((_, i) => (
        <td key={i} className="px-6 py-4">
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
        </td>
      ))}
    </tr>
  );
}

const ServiceHistoryComponent = () => {
  const [bookings, setBookings] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBookings = async () => {
    try {
      setLoading(true);
      setError(null);

      const [bookingRes, vehicleRes] = await Promise.all([
        api.get("/UserBooking"),
        api.get("/UserVehicle"),
      ]);

      setBookings(bookingRes.data.data || []);
      setVehicles(vehicleRes.data.data || []);
    } catch (err) {
      console.log(err);
      setError("Failed to load service history.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  // vehicleId -> vehicle details ka lookup map
  const vehicleMap = useMemo(() => {
    const map = {};
    vehicles.forEach((v) => {
      map[v.id] = v;
    });
    return map;
  }, [vehicles]);

  // sabse recent booking pehle dikhane ke liye
  const sortedBookings = useMemo(() => {
    return [...bookings].sort(
      (a, b) => new Date(b.bookingDate) - new Date(a.bookingDate)
    );
  }, [bookings]);

  return (
    <div className="w-full">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Service History</h2>
          <p className="text-sm text-gray-500">
            All your past and upcoming service bookings
          </p>
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Service Date
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Vehicle
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Vehicle Number
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Shop
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Cost
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => <TableSkeletonRow key={i} />)
            ) : error ? (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-sm font-medium text-red-500">
                  {error}
                </td>
              </tr>
            ) : sortedBookings.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-sm text-gray-500">
                  No bookings yet. Book a service to see it here.
                </td>
              </tr>
            ) : (
              sortedBookings.map((booking, index) => {
                const vehicle = vehicleMap[booking.vehicleId];

                return (
                  <tr
                    key={index}
                    className="border-t border-gray-200 transition hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {formatDate(booking.preferredServiceDate)}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {vehicle ? `${vehicle.brand} ${vehicle.model}` : `Vehicle #${booking.vehicleId}`}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {vehicle?.vehicleNumber ?? "—"}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {booking.serviceStationName}
                    </td>

                    <td className="px-6 py-4 text-sm font-semibold text-gray-800 whitespace-nowrap">
                      {formatCurrency(booking.totalAmount)}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={booking.status} />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceHistoryComponent;