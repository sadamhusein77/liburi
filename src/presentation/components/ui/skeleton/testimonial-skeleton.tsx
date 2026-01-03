export default function TestimonialSkeleton() {
  return (
    <div className="flex w-full h-full gap-x-20 mt-[70px]">
      {/* Image skeleton */}
      <div className="relative w-[367px] h-[502px]">
        <div className="w-full h-full rounded-2xl outline-2 outline-solid outline-gray-200 z-10 absolute top-0 left-0 bg-gray-200 animate-pulse"></div>
        <div className="w-[80%] h-[80%] rounded-xl bg-gray-300 animate-pulse absolute -bottom-10 -right-6"></div>
      </div>
      {/* Content skeleton */}
      <div className="flex-1 h-full flex flex-col">
        <div className="h-6 bg-gray-200 rounded w-40 mb-10 mt-24 animate-pulse"></div>
        {/* Rating skeleton */}
        <div className="flex gap-1 mb-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
        {/* CTA skeleton */}
        <div className="flex flex-col mt-2">
          <div className="space-y-3">
            <div className="h-8 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded w-full animate-pulse"></div>
          </div>
          <div className="h-6 bg-gray-200 rounded w-48 mt-2 animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded w-40 mt-[50px] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
