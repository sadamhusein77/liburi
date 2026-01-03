import { useState } from "react";
import { useNavigate } from "react-router";
import DatePicker from "@/presentation/components/ui/datepicker";

interface IBookingForm {
  price?: number;
  productName?: string;
  productImage?: string;
}

interface IBookingData {
  nights: number;
  checkInDate: Date;
}

interface IBookingFormProps extends IBookingForm {
  onSubmit?: (data: IBookingData) => void;
}

export default function BookingForm({
  price = 0,
  productName,
  productImage,
  onSubmit
}: IBookingFormProps) {
  const navigate = useNavigate();
  const [nights, setNights] = useState<number>(1);
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);

  const handleDecrease = () => {
    setNights((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setNights((prev) => prev + 1);
  };

  const handleSubmit = () => {
    if (!checkInDate) {
      alert("Please select a check-in date");
      return;
    }

    const bookingData: IBookingData = {
      nights,
      checkInDate,
    };

    if (onSubmit) {
      onSubmit(bookingData);
    }

    navigate("/booking", {
      state: {
        nights,
        checkInDate,
        totalPrice: price * nights,
        pricePerNight: price,
        productName,
        productImage,
      },
    });
  };

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <div
      className="rounded-[15px] border border-[#E5E5E5] p-6 flex flex-col gap-6"
    >
      <h2 className="text-[20px] font-medium">Start Booking</h2>

      <div className="flex gap-3 text-[36px]">
        <span className="text-[#1ABC9C] font-semibold">
          {formattedPrice}
        </span>
        <span className="text-slate-400 font-extralight">
          per night
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-700 font-medium">
          How long you will stay?
        </label>
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleDecrease}
            className="w-10 h-10 rounded-lg border border-[#E5E5E5] flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={nights <= 1}
            aria-label="Decrease nights"
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
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>

          <div className="flex items-center gap-1">
            <span className="text-lg font-medium">{nights}</span>
            <span className="text-sm text-gray-500">
              {nights === 1 ? "night" : "nights"}
            </span>
          </div>

          <button
            type="button"
            onClick={handleIncrease}
            className="w-10 h-10 rounded-lg border border-[#E5E5E5] flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Increase nights"
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      <DatePicker
        date={checkInDate}
        onSelect={setCheckInDate}
        placeholder="Select check-in date"
        minDate={new Date()}
      />

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full py-3.5 rounded-lg text-white font-medium transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#3252DF" }}
      >
        Continue to Book
      </button>
    </div>
  );
}
