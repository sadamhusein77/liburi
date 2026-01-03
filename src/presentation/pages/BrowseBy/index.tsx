import { useEffect, useMemo, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BrowseBy from "@/presentation/components/features/browse-by";
import { fetchBrowseByCategoriesJson } from "@/infrastructure/api/fetchBrowseByCategories";
import { useQuery } from "@tanstack/react-query";

const QUERY_STALE_TIME = 5 * 60 * 1000;
const QUERY_GC_TIME = 10 * 60 * 1000;

export default function BrowseByPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["browse-by-categories"],
    queryFn: fetchBrowseByCategoriesJson,
    staleTime: QUERY_STALE_TIME,
    gcTime: QUERY_GC_TIME,
  });

  const categories = useMemo(() => data?.data?.categories ?? [], [data]);
  const filters = useMemo(() => data?.data?.filters ?? [], [data]);

  const handleFilterChange = useCallback((filterType: string) => {
    setActiveFilters((prev) => {
      if (filterType === "All") {
        return [];
      }
      return prev.includes(filterType)
        ? prev.filter((f) => f !== filterType)
        : [...prev, filterType];
    });
  }, []);

  const filteredCategories = useMemo(() => {
    if (activeFilters.length === 0) return categories;
    return categories.filter((cat: { type?: string }) =>
      activeFilters.some((filter) => cat.type === filter)
    );
  }, [categories, activeFilters]);

  if (error) {
    return (
      <div className="px-32 py-[69px]">
        <p className="text-red-500">Error loading categories. Please try again later.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="px-32 py-[69px]">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="flex gap-3 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 bg-gray-200 rounded-full w-32"></div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/3] bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-32 py-[69px]">
      <BrowseBy
        categories={filteredCategories}
        filters={filters}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}
