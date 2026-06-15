import BookServices from "../../../Components/Find-A-Mechanics/ServiceCenterProfile/BookServices";
import BookingTiming from "../../../Components/Find-A-Mechanics/ServiceCenterProfile/BookingTiming";
import BookingSummary from "../../../Components/Find-A-Mechanics/ServiceCenterProfile/BookServices/BookingSummery";

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
  <div className="mx-auto max-w-7xl px-6 py-10">
    
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-[#0b2d89]">
        Book Service
      </h1>
    </div>

    <div className="grid gap-6 lg:grid-cols-12">
      <div className="space-y-6 lg:col-span-8">
        <BookServices />
        <BookingTiming />
      </div>

      <div className="lg:col-span-4">
        <BookingSummary />
      </div>
    </div>
  </div>
</div>
  );
};

export default BookingPage;