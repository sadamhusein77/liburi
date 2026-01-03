export default function DetailDescriptionSkeleton() {
  return (
    <div className="flex flex-col">
      {/* Title skeleton */}
      <div className="h-7 bg-gray-200 rounded w-48 mb-2.5 animate-pulse"></div>

      {/* Description text skeleton */}
      <div className="flex flex-col gap-1 mb-[30px]">
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-11/12 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
      </div>

      {/* Facilities grid skeleton (4 columns) */}
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col gap-2 items-center">
            {/* Icon skeleton */}
            <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
            {/* Name skeleton */}
            <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
            {/* Count skeleton */}
            <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
