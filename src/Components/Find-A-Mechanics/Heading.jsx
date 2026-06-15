import { FiSearch, FiChevronDown } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";

function Heading() {

  const [params] = useSearchParams();

  const city = params.get("city");


  return (
    <div className="mx-auto w-full rounded-3xl bg-[#f8f8f9] p-6 shadow-sm border border-gray-200">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex flex-1 items-center rounded-full border border-gray-300 bg-white px-5 py-4 shadow-sm">
          <FiSearch className="text-2xl text-gray-500" />

          <input
            type="text"
            defaultValue={city}
            placeholder="Search by city..."
            className="ml-3 w-full bg-transparent text-lg outline-none placeholder:text-gray-500"
          />
        </div>
        <button className="rounded-full bg-[#0b2d83] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#09246a]">
          Search Now
        </button>
      </div>


      
      
      
    </div>
  );
}

export default Heading;