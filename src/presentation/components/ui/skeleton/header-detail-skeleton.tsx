export default function HeaderDetailSkeleton() {
  return (
    <div className="grid grid-cols-3">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2">
        <div className="h-5 bg-gray-200 rounded w-16 animate-pulse"></div>
        <div className="h-5 bg-gray-200 rounded w-4 animate-pulse"></div>
        <div className="h-5 bg-gray-200 rounded w-32 animate-pulse"></div>
      </div>

      {/* Title skeleton */}
      <div className="flex flex-col gap-1 items-center">
        <div className="h-10 bg-gray-200 rounded w-48 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded w-36 animate-pulse"></div>
      </div>
    </div>
  );
}
