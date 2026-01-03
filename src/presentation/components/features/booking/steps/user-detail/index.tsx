import { useState, FormEvent } from 'react';
import { IBookingFormData } from '@/shared/types/global';

interface UserDetailStepProps {
  onNext: (data: Omit<IBookingFormData, 'paymentMethod'>) => void;
  defaultValues?: Partial<IBookingFormData>;
}

export default function UserDetailStep({
  onNext,
  defaultValues,
}: UserDetailStepProps) {
  const [userName, setUserName] = useState(defaultValues?.userName || '');
  const [email, setEmail] = useState(defaultValues?.email || '');
  const [phone, setPhone] = useState(defaultValues?.phone || '');
  const [specialRequests, setSpecialRequests] = useState(
    defaultValues?.specialRequests || ''
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!userName || !email || !phone) {
      alert('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    onNext({
      userName,
      email,
      phone,
      specialRequests,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Personal Information
      </h2>

      {/* Form Fields */}
      <div className="space-y-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="userName" className="text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3252DF] focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3252DF] focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3252DF] focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="specialRequests" className="text-sm font-medium text-gray-700">
            Special Requests (Optional)
          </label>
          <textarea
            id="specialRequests"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="Any special requests or notes..."
            rows={4}
            className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3252DF] focus:border-transparent transition-all resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 rounded-lg text-white font-medium transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
        style={{ backgroundColor: '#3252DF' }}
      >
        Continue to Payment
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
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </form>
  );
}
