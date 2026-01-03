export default function BookingFormSkeleton() {
  return (
    <div className="rounded-[15px] border border-[#E5E5E5] p-6 flex flex-col gap-6">
      {/* Title skeleton */}
      <div className="h-7 bg-gray-200 rounded w-40 animate-pulse"></div>

      {/* Price display skeleton */}
      <div className="flex gap-3 h-9">
        <div className="h-9 bg-gray-200 rounded w-32 animate-pulse"></div>
        <div className="h-9 bg-gray-200 rounded w-24 animate-pulse"></div>
      </div>

      {/* Night counter skeleton */}
      <div className="flex flex-col gap-2">
        <div className="h-5 bg-gray-200 rounded w-48 animate-pulse"></div>
        <div className="flex items-center justify-between gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="flex items-center gap-1">
            <div className="h-6 bg-gray-200 rounded w-8 animate-pulse"></div>
            <div className="h-5 bg-gray-200 rounded w-16 animate-pulse"></div>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>

      {/* Date picker skeleton */}
      <div className="flex flex-col gap-2">
        <div className="h-5 bg-gray-200 rounded w-28 animate-pulse"></div>
        <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
      </div>

      {/* Submit button skeleton */}
      <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
    </div>
  );
}
