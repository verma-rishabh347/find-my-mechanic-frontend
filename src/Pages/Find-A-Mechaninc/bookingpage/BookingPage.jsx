import BookServices from "../../../Components/Find-A-Mechanics/ServiceCenterProfile/BookServices";
import BookingTiming from "../../../Components/Find-A-Mechanics/ServiceCenterProfile/BookingTiming";
import BookingSummary from "../../../Components/Find-A-Mechanics/ServiceCenterProfile/BookServices/BookingSummery";
import { useParams } from "react-router-dom";

const BookingPage = () => {

    const { id } = useParams();
  return (
    <div className="min-h-screen bg-slate-50">
  <div className="mx-auto  px-6 py-10">
  
   
      <div className="lg:col-span-4">
        <BookingSummary id={id} />
      </div>
  </div>
</div>
  );
};

export default BookingPage;