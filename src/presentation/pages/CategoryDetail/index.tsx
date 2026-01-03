import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CategoryDetail from "@/presentation/components/features/category-detail";
import { fetchCategoryProductsJson } from "@/infrastructure/api/fetchCategoryProducts";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const QUERY_STALE_TIME = 5 * 60 * 1000;
const QUERY_GC_TIME = 10 * 60 * 1000;

export default function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["category-products", slug],
    queryFn: () => fetchCategoryProductsJson({ slug: slug || "" }),
    staleTime: QUERY_STALE_TIME,
    gcTime: QUERY_GC_TIME,
    enabled: !!slug,
  });

  if (error) {
    return (
      <div className="px-32 py-[69px]">
        <p className="text-red-500">Error loading category. Please try again later.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="px-32 py-[69px]">
        <div className="animate-pulse">
          <div className="aspect-[21/9] bg-gray-200 rounded-2xl mb-8"></div>
          <div className="bg-gray-200 rounded-xl p-6 mb-6 h-40"></div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/3] bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!data?.data) {
    return (
      <div className="px-32 py-[69px]">
        <p className="text-gray-500">Category not found.</p>
      </div>
    );
  }

  return (
    <div className="px-32 py-[69px]">
      <CategoryDetail
        category={data.data.category}
        products={data.data.products}
        aggregations={data.data.aggregations}
        pagination={data.data.pagination}
      />
    </div>
  );
}
