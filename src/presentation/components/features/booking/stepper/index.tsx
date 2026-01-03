import { useState } from 'react';
import { IBookingContext, IBookingFormData } from '@/shared/types/global';
import { format } from 'date-fns';
import UserDetailStep from '../steps/user-detail';
import PaymentStep from '../steps/payment';
import SuccessStep from '../steps/success';

interface BookingStepperProps {
  bookingContext: IBookingContext;
  onComplete: () => void;
  onBack: () => void;
}

type Step = 1 | 2 | 3;

export default function BookingStepper({
  bookingContext,
  onComplete,
  onBack,
}: BookingStepperProps) {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<IBookingFormData>({
    userName: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'credit-card',
  });

  const handleStep1Next = (data: Omit<IBookingFormData, 'paymentMethod'>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  const handleStep2Next = (paymentMethod: IBookingFormData['paymentMethod']) => {
    setFormData((prev) => ({ ...prev, paymentMethod }));
    setCurrentStep(3);
  };

  const handleBack = () => {
    if (currentStep === 1) {
      onBack();
    } else {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  const getStepNumber = () => {
    switch (currentStep) {
      case 1:
        return '01';
      case 2:
        return '02';
      case 3:
        return '03';
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return 'User Detail';
      case 2:
        return 'Payment Method';
      case 3:
        return 'Booking Confirmed';
    }
  };

  const totalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(bookingContext.totalPrice);

  const formattedDate = bookingContext.checkInDate
    ? format(bookingContext.checkInDate, 'PPP')
    : 'Not selected';

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Stepper Header */}
      {currentStep !== 3 && (
        <div className="mb-10">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#3252DF] transition-colors mb-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </button>

          {/* Centered Step Indicators */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    step <= currentStep
                      ? 'bg-[#3252DF] text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {`0${step}`}
                </div>
                {step < 3 && (
                  <div
                    className={`w-20 h-0.5 mx-2 ${
                      step < currentStep ? 'bg-[#3252DF]' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Title */}
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">
              {getStepTitle()}
            </h1>
            <p className="text-gray-500">
              Step {getStepNumber()} of 03
            </p>
          </div>
        </div>
      )}

      {/* Split Layout: Left Summary, Right Form */}
      {currentStep !== 3 ? (
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8">
          {/* Left: Booking Summary */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E5E5]">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Booking Summary
              </h3>

              {/* Product Image */}
              {bookingContext.productImage && (
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img
                    src={bookingContext.productImage}
                    alt={bookingContext.productName || 'Product'}
                    className="w-full h-40 object-cover"
                  />
                </div>
              )}

              {/* Product Name */}
              {bookingContext.productName && (
                <div className="mb-6">
                  <span className="text-gray-500 text-sm">Property</span>
                  <p className="font-semibold text-gray-800">{bookingContext.productName}</p>
                </div>
              )}

              {/* Booking Details */}
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-500">Check-in Date</span>
                  <span className="font-medium text-gray-800">{formattedDate}</span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-medium text-gray-800">
                    {bookingContext.nights} {bookingContext.nights === 1 ? 'night' : 'nights'}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-500">Price per night</span>
                  <span className="font-medium text-gray-800">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(bookingContext.pricePerNight)}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-800 font-semibold">Total Price</span>
                  <span className="text-xl font-bold text-[#1ABC9C]">{totalPrice}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form Content */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E5E5]">
            {currentStep === 1 && (
              <UserDetailStep
                onNext={handleStep1Next}
                defaultValues={formData}
              />
            )}
            {currentStep === 2 && (
              <PaymentStep
                onNext={handleStep2Next}
                onBack={handleBack}
                paymentMethod={formData.paymentMethod}
                bookingContext={bookingContext}
                bookingFormData={formData}
              />
            )}
          </div>
        </div>
      ) : (
        // Success Page - Full Width
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E5E5]">
          <SuccessStep
            onComplete={onComplete}
            formData={formData}
            bookingContext={bookingContext}
          />
        </div>
      )}
    </div>
  );
}
