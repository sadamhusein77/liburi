import { format } from 'date-fns';
import { IBookingContext, IBookingFormData } from '@/shared/types/global';
import { ImgSuccess } from '@/assets/images';

interface SuccessStepProps {
  onComplete: () => void;
  formData: IBookingFormData;
  bookingContext: IBookingContext;
}

export default function SuccessStep({
  onComplete,
  formData,
  bookingContext,
}: SuccessStepProps) {
  const bookingId = `BKG-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const confirmationNumber = `CONF-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  const totalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(bookingContext.totalPrice);

  const formattedDate = bookingContext.checkInDate
    ? format(bookingContext.checkInDate, 'PPP')
    : 'Not selected';

  const getPaymentMethodName = () => {
    switch (formData.paymentMethod) {
      case 'credit-card':
        return 'Credit Card';
      case 'paypal':
        return 'PayPal';
      case 'bank-transfer':
        return 'Bank Transfer';
    }
  };

  return (
    <div className="flex flex-col items-center text-center py-8">
      {/* Success Image */}
      <div className="mb-8">
        <img
          src={ImgSuccess}
          alt="Booking Success"
          className="w-32 h-32 mx-auto"
        />
      </div>

      {/* Success Message */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Booking Confirmed!
        </h1>
        <p className="text-gray-500 max-w-md mx-auto">
          Thank you for your booking. We have sent a confirmation email to{' '}
          <span className="font-medium text-gray-700">{formData.email}</span>
        </p>
      </div>

      {/* Booking Details Card */}
      <div className="w-full max-w-lg bg-gray-50 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Booking Details
        </h2>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-500">Booking ID</span>
            <span className="font-mono font-medium text-[#3252DF]">
              {bookingId}
            </span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-500">Confirmation Number</span>
            <span className="font-mono font-medium text-[#3252DF]">
              {confirmationNumber}
            </span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-500">Guest Name</span>
            <span className="font-medium text-gray-800">
              {formData.userName}
            </span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-500">Check-in Date</span>
            <span className="font-medium text-gray-800">{formattedDate}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-500">Duration</span>
            <span className="font-medium text-gray-800">
              {bookingContext.nights}{' '}
              {bookingContext.nights === 1 ? 'night' : 'nights'}
            </span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-500">Payment Method</span>
            <span className="font-medium text-gray-800">
              {getPaymentMethodName()}
            </span>
          </div>

          <div className="flex justify-between items-center py-2">
            <span className="text-gray-500 font-medium">Total Amount</span>
            <span className="text-xl font-bold text-[#1ABC9C]">
              {totalPrice}
            </span>
          </div>
        </div>
      </div>

      {/* Special Requests (if any) */}
      {formData.specialRequests && (
        <div className="w-full max-w-lg bg-yellow-50 rounded-xl p-6 mb-8">
          <h3 className="text-sm font-semibold text-yellow-800 mb-2">
            Special Requests
          </h3>
          <p className="text-sm text-yellow-700">{formData.specialRequests}</p>
        </div>
      )}

      {/* Info Note */}
      <div className="w-full max-w-lg bg-blue-50 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3252DF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <div className="text-left">
            <p className="text-sm font-medium text-blue-800 mb-1">
              What's Next?
            </p>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Check your email for detailed booking confirmation</li>
              <li>• Arrive at the property on your check-in date</li>
              <li>• Contact support if you need to modify your booking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <button
        type="button"
        onClick={onComplete}
        className="px-12 py-4 rounded-lg text-white font-medium transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#3252DF' }}
      >
        Back to Home
      </button>
    </div>
  );
}
