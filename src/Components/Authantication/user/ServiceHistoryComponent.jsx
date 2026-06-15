
const ServiceHistoryComponent = () => {
  const data = [
    "12 May 2026",
    "Tesla Model 3",
    "ABC-1234",
    "Tire Rotation & Alignment",
    "Precision EV Care",
    "₹4,500",
    "Done"
  ]

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
              Service Performed
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
              Mechanic/Shop
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
              Cost
            </th>
            <th ClassName="px-6 py-4 text-sm font-semibold text-gray-700">
                Result
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t border-gray-200 hover:bg-gray-50 transition">
            {data.map((datas, index) => (
              <td
                key={index}
                className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap"
              >
                {datas}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ServiceHistoryComponent