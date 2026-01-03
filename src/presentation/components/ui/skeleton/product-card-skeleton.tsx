import { cn } from "@/lib/utils";

interface ProductCardSkeletonProps {
  variant?: "1" | "2";
  className?: string;
}

export default function ProductCardSkeleton({ variant = "1", className }: ProductCardSkeletonProps) {
  return (
    <div className={cn("cursor-pointer relative w-full h-full group", className)}>
      {/* Tag skeleton for variant 1 */}
      {variant === "1" && (
        <div className="bg-gray-200 text-gray-200 text-base flex justify-center items-center gap-1 px-3 py-2 w-[180px] absolute top-0 right-0 rounded-tr-xl rounded-bl-xl z-20 animate-pulse">
          <span className="font-medium">Loading</span>
        </div>
      )}
      {/* Image skeleton */}
      <div className="bg-gray-200 rounded-xl animate-pulse w-full min-h-[200px]"></div>
      {/* Text skeleton */}
      <div className="text-base flex flex-col mt-2 px-2">
        {variant === "1" ? (
          <div className="text-white">
            <div className="h-5 bg-gray-400/50 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-400/50 rounded w-1/2 mt-1 animate-pulse"></div>
          </div>
        ) : (
          <div>
            <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mt-1 animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
}
