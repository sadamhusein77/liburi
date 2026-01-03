import { cn } from "@/lib/utils";

export default function BannerSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-between gap-8", className)}>
      {/* Content skeleton */}
      <div className="max-w-md flex flex-col gap-4 h-full">
        <div className="flex-1 flex flex-col gap-[30px]">
          {/* Title skeleton */}
          <div className="space-y-3">
            <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded w-1/2 animate-pulse"></div>
          </div>
          {/* Description skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
          </div>
          {/* Button skeleton */}
          <div className="h-12 bg-gray-200 rounded w-40 animate-pulse"></div>
        </div>
        {/* Item list skeleton */}
        <div className="flex gap-6 mt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
      {/* Image skeleton */}
      <div className="w-full h-full max-w-[559px] bg-gray-200 rounded-xl animate-pulse min-h-[400px]"></div>
    </div>
  );
}
