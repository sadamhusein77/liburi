import { useLocation, useNavigate } from 'react-router';
import { IBookingContext } from '@/shared/types/global';
import BookingStepper from '@/presentation/components/features/booking/stepper';

export default function BookingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as IBookingContext | undefined;

  const handleBookingComplete = () => {
    navigate('/');
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700 mb-4">
            No Booking Information Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-[#3252DF] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:px-32 py-[69px] min-h-screen">
      <BookingStepper
        bookingContext={state}
        onComplete={handleBookingComplete}
        onBack={handleBack}
      />
    </div>
  );
}
