export default function BannerDetailSkeleton() {
  return (
    <div className="flex gap-x-2 mt-[50px]">
      {/* Main image skeleton (left) */}
      <div className="w-auto h-auto bg-gray-200 rounded-lg animate-pulse min-w-[600px] min-h-[400px]"></div>

      {/* Secondary images skeleton (right column) */}
      <div className="flex flex-col justify-between gap-2">
        <div className="w-auto h-auto bg-gray-200 rounded-lg animate-pulse min-w-[200px] min-h-[195px]"></div>
        <div className="w-auto h-auto bg-gray-200 rounded-lg animate-pulse min-w-[200px] min-h-[195px]"></div>
      </div>
    </div>
  );
}
