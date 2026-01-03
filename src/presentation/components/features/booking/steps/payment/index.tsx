import { useState } from 'react';
import { IBookingContext, IBookingFormData } from '@/shared/types/global';
import { useMutation } from '@tanstack/react-query';
import { fetchBookingSubmit } from '@/infrastructure/api/fetchBooking';
import { Loader2 } from 'lucide-react';

interface PaymentStepProps {
  onNext: (paymentMethod: IBookingFormData['paymentMethod']) => void;
  onBack: () => void;
  paymentMethod: IBookingFormData['paymentMethod'];
  bookingContext: IBookingContext;
  bookingFormData: IBookingFormData;
}

type PaymentMethod = IBookingFormData['paymentMethod'];

const PAYMENT_METHODS: {
  id: PaymentMethod;
  name: string;
  description: string;
  icon: string;
}[] = [
  {
    id: 'credit-card',
    name: 'Credit Card',
    description: 'Pay securely with your credit or debit card',
    icon: '💳',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Fast and secure payment with PayPal',
    icon: '🅿️',
  },
  {
    id: 'bank-transfer',
    name: 'Bank Transfer',
    description: 'Transfer payment directly from your bank account',
    icon: '🏦',
  },
];

export default function PaymentStep({
  onNext,
  onBack,
  paymentMethod: initialPaymentMethod,
  bookingContext,
  bookingFormData,
}: PaymentStepProps) {
  const [selectedMethod, setSelectedMethod] =
    useState<PaymentMethod>(initialPaymentMethod);

  const { mutate: submitBooking, isPending } = useMutation({
    mutationFn: () =>
      fetchBookingSubmit(
        { ...bookingFormData, paymentMethod: selectedMethod },
        bookingContext
      ),
    onSuccess: () => {
      onNext(selectedMethod);
    },
    onError: () => {
      alert('Failed to process payment. Please try again.');
    },
  });

  const handleSubmit = () => {
    submitBooking();
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Payment Information
      </h2>

      {/* Payment Methods */}
      <div className="space-y-4">
        {PAYMENT_METHODS.map((method) => (
          <button
            key={method.id}
            type="button"
            onClick={() => setSelectedMethod(method.id)}
            className={`w-full p-5 rounded-xl border-2 transition-all text-left flex items-center gap-4 ${
              selectedMethod === method.id
                ? 'border-[#3252DF] bg-blue-50'
                : 'border-[#E5E5E5] hover:border-gray-300'
            }`}
          >
            <span className="text-3xl">{method.icon}</span>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">
                {method.name}
              </h3>
              <p className="text-sm text-gray-500">{method.description}</p>
            </div>
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedMethod === method.id
                  ? 'border-[#3252DF] bg-[#3252DF]'
                  : 'border-gray-300'
              }`}
            >
              {selectedMethod === method.id && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <button
          type="button"
          onClick={onBack}
          disabled={isPending}
          className="flex-1 py-4 rounded-lg font-medium border-2 border-[#E5E5E5] text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isPending}
          className="flex-1 py-4 rounded-lg text-white font-medium transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{ backgroundColor: '#3252DF' }}
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Complete Booking
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Security Note */}
      <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1ABC9C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <div>
            <p className="text-sm font-medium text-green-800">
              Secure Payment
            </p>
            <p className="text-xs text-green-700 mt-1">
              Your payment information is secure and encrypted. We do not store
              your card details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
