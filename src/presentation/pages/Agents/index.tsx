import { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Agents from "@/presentation/components/features/agents";
import { fetchAgentsJson } from "@/infrastructure/api/fetchAgents";
import { useQuery } from "@tanstack/react-query";

const QUERY_STALE_TIME = 5 * 60 * 1000;
const QUERY_GC_TIME = 10 * 60 * 1000;

export default function AgentsPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["agents"],
    queryFn: fetchAgentsJson,
    staleTime: QUERY_STALE_TIME,
    gcTime: QUERY_GC_TIME,
  });

  const agents = useMemo(() => data?.data?.agents ?? [], [data]);
  const filters = useMemo(() => data?.data?.filters, [data]);
  const specialties = useMemo(() => filters?.specialties ?? [], [filters]);

  if (error) {
    return (
      <div className="px-32 py-[69px]">
        <p className="text-red-500">Error loading agents. Please try again later.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="px-32 py-[69px]">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-5 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="h-12 bg-gray-200 rounded-xl mb-6"></div>
          <div className="flex gap-3 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 bg-gray-200 rounded-full w-28"></div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-80 bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-32 py-[69px]">
      <Agents agents={agents} specialties={specialties} />
    </div>
  );
}
