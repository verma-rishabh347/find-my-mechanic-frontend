import { useMemo, useState } from "react";
import {
  FiCheckCircle,
  FiCornerUpLeft,
  FiFilter,
  FiFlag,
  FiMessageSquare,
  FiSearch,
  FiStar,
  FiTrendingUp,
  FiX,
} from "react-icons/fi";
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const initialReviews = [
  {
    id: 1,
    customer: "James Wilson",
    initials: "JW",
    rating: 5,
    date: "Jun 12, 2026",
    service: "Engine Diagnostics",
    bookingId: "BK-2039",
    review:
      "The team was excellent. The engine repair was completed faster than expected and the pricing was transparent. I also received a detailed report with photos of the replaced parts.",
    verified: true,
    reply:
      "Thank you, James. We appreciate your trust and are glad the report was helpful.",
    pinned: true,
    reported: false,
  }
];

const ratingFilters = ["All", "5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"];



function SummaryCard({ title, value, detail, icon: Icon, color }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
       
        </div>
      
      </div>
    </article>
  );
}

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [activeRating, setActiveRating] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const averageRating =
    reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;
  const repliedCount = reviews.filter((review) => review.reply).length;
  const fiveStarCount = reviews.filter((review) => review.rating === 5).length;

  const ratingBreakdown = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((review) => review.rating === rating).length,
  }));

  const filteredReviews = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    const selectedRating =
      activeRating === "All" ? null : Number(activeRating.charAt(0));

    return reviews
      .filter((review) => {
        const matchesRating =
          selectedRating === null || review.rating === selectedRating;
        const matchesSearch =
          !query ||
          review.customer.toLowerCase().includes(query) ||
          review.service.toLowerCase().includes(query) ||
          review.review.toLowerCase().includes(query) ||
          review.bookingId.toLowerCase().includes(query);

        return matchesRating && matchesSearch;
      })
      .sort((first, second) => Number(second.pinned) - Number(first.pinned));
  }, [activeRating, reviews, searchTerm]);

  

  

  

  
  return (
    <main className="min-w-0 flex-1 bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px] space-y-6">
        <header>
          <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b2d89]">
            Customer feedback
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Reviews
          </h1>
          <p className="mt-2 text-slate-500">
            Understand customer sentiment and respond to service feedback.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            title="Average Rating"
            value={averageRating.toFixed(1)}
  
          />
          <SummaryCard
            title="Five-Star Reviews"
            value={fiveStarCount}
          
          />
          <SummaryCard
            title="Response Rate"
            value={`${Math.round((repliedCount / reviews.length) * 100)}%`}
            
       
           
          />
          <SummaryCard
            title="Verified Reviews"
            value={reviews.filter((review) => review.verified).length}
         
       
           
          />
        </section>

       

        <section className="space-y-4">
          {filteredReviews.map((review) => (
            <article
              key={review.id}
              className={`rounded-3xl border bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6 ${
                review.pinned ? "border-blue-200" : "border-slate-200"
              }`}
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex items-start gap-4">
                  
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold text-slate-900">
                        {review.customer}
                      </h2>
                     
                      
                      {review.reported && (
                        <span className="rounded-full bg-rose-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-rose-600">
                          Reported
                        </span>
                      )}
                    </div>
                    <div className="mt-2   items-center gap-3">
                      <span className="text-xl bg-blue-700 rounded-xl p-2 text-white ">Rating  : </span><span className="text-xl"> {review.rating} Stars</span> <br />
                      <div className="text-sm mt-2 text-slate-400">{review.date}</div>
                    </div>
                  </div>
                </div>

              
              </div>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-700">
                  “{review.review}”
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                <span>
                  Service:{" "}
                  <strong className="font-semibold text-slate-700">
                    {review.service}
                  </strong>
                </span>
                <span>
                  Booking:{" "}
                  <strong className="font-semibold text-slate-700">
                    {review.bookingId}
                  </strong>
                </span>
              </div>

              

            </article>
          ))}

         
        </section>
      </div>

      
    </main>
  );
};

export default Reviews;
