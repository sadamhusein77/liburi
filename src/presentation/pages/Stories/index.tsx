import { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Stories from "@/presentation/components/features/stories";
import { fetchStoriesJson } from "@/infrastructure/api/fetchStories";
import { useQuery } from "@tanstack/react-query";
import { QUERY_STALE_TIME, QUERY_GC_TIME } from "@/shared/constants/query";

export default function StoriesPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["stories"],
    queryFn: fetchStoriesJson,
    staleTime: QUERY_STALE_TIME,
    gcTime: QUERY_GC_TIME,
  });

  const featured = useMemo(() => data?.data?.featured, [data]);
  const storiesList = useMemo(() => data?.data?.list ?? [], [data]);

  if (error) {
    return (
      <div className="px-32 py-[69px]">
        <p className="text-red-500">Error loading stories. Please try again later.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="px-32 py-[69px]">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="aspect-[16/9] bg-gray-200 rounded-2xl mb-12"></div>
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[16/9] bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-32 py-[69px]">
      {featured || storiesList.length > 0 ? (
        <Stories featured={featured} stories={storiesList} />
      ) : (
        <p className="text-gray-500">No stories available at the moment.</p>
      )}
    </div>
  );
}
