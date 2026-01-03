import { IBooking, IBookingFormData, IBookingContext } from '@/shared/types/global';

export const fetchBookingSubmit = async (
  bookingData: IBookingFormData,
  context: IBookingContext
): Promise<{ success: boolean; message: string; data: IBooking }> => {
  // Simulate API delay for realistic user experience
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Mock booking submission for static hosting (Vercel)
  // In production, this would be a real API call to a backend service
  return {
    success: true,
    message: 'Booking created successfully',
    data: {
      id: `BKG-${Math.random().toString(36).substring(2, 11).toUpperCase()}`,
      ...bookingData,
      ...context,
    },
  };
};
