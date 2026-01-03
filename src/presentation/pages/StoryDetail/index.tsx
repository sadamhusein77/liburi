import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StoryDetail from "@/presentation/components/features/story-detail";
import { fetchStoryDetailJson, fetchRelatedStoriesJson } from "@/infrastructure/api/fetchStoryDetail";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const QUERY_STALE_TIME = 5 * 60 * 1000;
const QUERY_GC_TIME = 10 * 60 * 1000;

export default function StoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const { data: storyData, isLoading: storyLoading, error: storyError } = useQuery({
    queryKey: ["story-detail", slug],
    queryFn: () => fetchStoryDetailJson({ slug: slug || "" }),
    staleTime: QUERY_STALE_TIME,
    gcTime: QUERY_GC_TIME,
    enabled: !!slug,
  });

  const { data: relatedData } = useQuery({
    queryKey: ["related-stories", slug],
    queryFn: () =>
      fetchRelatedStoriesJson({
        category: storyData?.data?.category || "",
        excludeId: storyData?.data?.id || 0,
      }),
    staleTime: QUERY_STALE_TIME,
    gcTime: QUERY_GC_TIME,
    enabled: !!storyData?.data,
  });

  if (storyError) {
    return (
      <div className="px-32 py-[69px]">
        <p className="text-red-500">Error loading story. Please try again later.</p>
      </div>
    );
  }

  if (storyLoading) {
    return (
      <div className="px-32 py-[69px]">
        <div className="animate-pulse">
          <div className="aspect-[21/9] bg-gray-200 rounded-2xl mb-8"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!storyData?.data) {
    return (
      <div className="px-32 py-[69px]">
        <p className="text-gray-500">Story not found.</p>
      </div>
    );
  }

  return (
    <div className="px-32 py-[69px]">
      <StoryDetail story={storyData.data} relatedStories={relatedData?.data || []} />
    </div>
  );
}
