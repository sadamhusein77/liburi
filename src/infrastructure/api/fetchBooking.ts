import axios from 'axios';
import { IBooking, IBookingFormData, IBookingContext } from '@/shared/types/global';

export const fetchBookingSubmit = async (
  bookingData: IBookingFormData,
  context: IBookingContext
): Promise<{ success: boolean; message: string; data: IBooking }> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  await axios.post('/booking.json', {
    ...bookingData,
    ...context,
  });

  return {
    success: true,
    message: 'Booking created successfully',
    data: {
      id: `BKG-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      ...bookingData,
      ...context,
    },
  };
};
