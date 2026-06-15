
import { FaStar } from "react-icons/fa";

const ReviewCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
      
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="customer"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="font-semibold text-xl text-gray-900">
                James Wilson
              </h3>

              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0b2d89] text-xs font-semibold">
                VERIFIED
              </span>
            </div>

            <div className="flex items-center gap-4 mt-1">
              <div className="flex gap-1 text-orange-400">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} size={14} />
                ))}
              </div>

              <span className="text-gray-500">
                Oct 24, 2023
              </span>
            </div>
          </div>
        </div>

        
      </div>

      

      {/* Review */}
      <p className="mt-5 text-gray-700 leading-8 text-lg">
        James and his team were excellent. The engine repair
        was done faster than expected and the price was very
        fair. They even provided a detailed report of what was
        fixed with photos of the parts. Best service in town
        for my BMW.
      </p>

      <hr className="my-6 border-gray-200" />

      {/* Footer */}
      <div className="flex items-center justify-between flex-wrap gap-4">
       

        
      </div>
    </div>
  );
};

export default ReviewCard;
