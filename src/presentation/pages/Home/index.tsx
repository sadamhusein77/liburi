import { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "@/presentation/components/features/landing/banner";
import Popular from "@/presentation/components/features/landing/popular";
import ProductRoot from "@/presentation/components/features/landing/product";
import Testimonial from "@/presentation/components/ui/testtimonial";
import { BannerSkeleton, ProductCardSkeleton, TestimonialSkeleton } from "@/presentation/components/ui/skeleton";
import { fetchBannerItemsJson } from "@/infrastructure/api/fetchBannerItems";
import { fetchPopularProductsJson } from "@/infrastructure/api/fetchPopularProducts";
import { fetchProductCategoriesJson } from "@/infrastructure/api/fetchProductCategories";
import { fetchTestimonialJson } from "@/infrastructure/api/fetchTestimonial";
import { useQuery } from "@tanstack/react-query";
import { ITestimonial } from "@/shared/types/global";

// React Query cache configuration
const QUERY_STALE_TIME = 5 * 60 * 1000; // 5 minutes
const QUERY_GC_TIME = 10 * 60 * 1000; // 10 minutes

// Skeleton components for lazy loaded sections
const PopularSkeleton = () => (
  <div className="flex flex-col w-full mt-[70px]">
    <span className="text-title-24 mb-5">Popular</span>
    <div className="grid grid-cols-[30%_70%] gap-x-[30px]">
      <ProductCardSkeleton variant="1" />
      <div className="grid grid-cols-2 grid-rows-2 gap-[30px]">
        <ProductCardSkeleton variant="1" />
        <ProductCardSkeleton variant="1" />
        <ProductCardSkeleton variant="1" />
        <ProductCardSkeleton variant="1" />
      </div>
    </div>
  </div>
);

const CategoriesSkeleton = () => (
  <div className="flex flex-col w-full mt-[70px]">
    <span className="text-title-24 mb-5">Categories</span>
    <div className="flex gap-4">
      <ProductCardSkeleton variant="2" />
      <ProductCardSkeleton variant="2" />
      <ProductCardSkeleton variant="2" />
      <ProductCardSkeleton variant="2" />
    </div>
  </div>
);

export default function Home() {
  // Initialize AOS with optimization
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      throttleDelay: 99, // Optimize scroll performance
      delay: 0,
    });
  }, []);

  // Parallel queries for better performance - no sequential dependencies
  const { data: bannerData, isLoading: loadingBanner, error: errorBanner } = useQuery({
    queryKey: ["banner-items"],
    queryFn: fetchBannerItemsJson,
    staleTime: QUERY_STALE_TIME,
    gcTime: QUERY_GC_TIME,
  });

  const {
    data: popularData,
    isLoading: loadingPopular,
    error: errorPopular,
  } = useQuery({
    queryKey: ["popular-products"],
    queryFn: fetchPopularProductsJson,
    staleTime: QUERY_STALE_TIME,
    gcTime: QUERY_GC_TIME,
  });

  const {
    data: categoriesData,
    isLoading: loadingCategories,
    error: errorCategories,
  } = useQuery({
    queryKey: ["product-categories"],
    queryFn: fetchProductCategoriesJson,
    staleTime: QUERY_STALE_TIME,
    gcTime: QUERY_GC_TIME,
  });

  const {
    data: testimonialData,
    isLoading: loadingTestimonial,
    error: errorTestimonial,
  } = useQuery({
    queryKey: ["testimonial"],
    queryFn: fetchTestimonialJson,
    staleTime: QUERY_STALE_TIME,
    gcTime: QUERY_GC_TIME,
  });

  // Memoize derived data to prevent unnecessary recalculations
  const itemList = useMemo(() => bannerData?.data?.itemList ?? [], [bannerData]);
  const productPopular = useMemo(() => popularData?.data?.productPopular ?? [], [popularData]);
  const product = useMemo(() => categoriesData?.data?.product ?? [], [categoriesData]);
  const testimonialList = useMemo(() => testimonialData?.data?.testimonial ?? [], [testimonialData]);
  const dataTestimonial: ITestimonial | undefined = useMemo(
    () => testimonialList[0],
    [testimonialList]
  );

  const hasError = errorBanner || errorPopular || errorCategories || errorTestimonial;
  if (hasError) {
    return <p className="px-32 py-[69px] text-red-500">Error loading data!</p>;
  }

  return (
    <div className="px-32 py-[69px]">
      {/* Banner Section - Critical, above the fold */}
      {loadingBanner ? <BannerSkeleton /> : <Banner itemList={itemList} />}

      {/* Popular Section - Critical content */}
      {loadingPopular ? (
        <PopularSkeleton />
      ) : (
        <Popular>
          <Popular.Product productPopular={productPopular} />
        </Popular>
      )}

      {/* Product Categories Section */}
      {loadingCategories ? (
        <CategoriesSkeleton />
      ) : (
        <ProductRoot data={product} />
      )}

      {/* Testimonial Section */}
      {loadingTestimonial ? (
        <TestimonialSkeleton />
      ) : dataTestimonial ? (
        <Testimonial>
          <Testimonial.Image imgUrl={dataTestimonial.imgUrl} />
          <Testimonial.Content>
            <Testimonial.Content.Ratings rate={dataTestimonial.rate} />
            <Testimonial.Content.CTA
              name={dataTestimonial.name}
              carrier={dataTestimonial.carrier}
              comment={dataTestimonial.comment}
            />
          </Testimonial.Content>
        </Testimonial>
      ) : null}
    </div>
  );
}
