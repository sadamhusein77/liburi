import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function UnderDevelopment() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Under Development - Liburi";
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] px-32 py-[69px]">
      <div
        className="flex flex-col items-center text-center max-w-[600px]"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {/* Icon / Illustration */}
        <div className="mb-8 flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-liburi-primary/10 to-liburi-primary/5">
          <svg
            className="w-16 h-16 text-liburi-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Main Heading */}
        <h1 className="text-[48px] font-semibold text-gray-900 mb-4">
          Under Development
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-400 font-light mb-8 leading-relaxed">
          We are working hard to bring you an amazing experience. This page is currently
          under construction and will be available soon. Stay tuned for updates!
        </p>

        {/* CTA Button */}
        <button
          onClick={handleGoHome}
          className="px-8 py-3 bg-liburi-primary text-white rounded-lg hover:bg-liburi-primary/90 transition-all duration-300 ease-out font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          aria-label="Go back to home page"
        >
          Back to Home
        </button>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-gray-200 w-full">
          <p className="text-sm text-gray-400 font-light">
            Need help? Contact us at{" "}
            <a
              href="mailto:support@staycation.id"
              className="text-liburi-primary hover:underline"
            >
              support@staycation.id
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
