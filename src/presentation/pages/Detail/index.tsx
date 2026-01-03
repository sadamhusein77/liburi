import { useMemo } from "react";
import { fetchDetailProductJson } from "@/infrastructure/api/fetchDetailProduct";
import { fetchTreasureProductJson } from "@/infrastructure/api/fetchTreasureProduct";
import { fetchTestimonialJson } from "@/infrastructure/api/fetchTestimonial";
import BannerDetail from "@/presentation/components/features/detail/banner";
import BookingForm from "@/presentation/components/features/detail/booking";
import DetailDescription from "@/presentation/components/features/detail/description";
import HeaderDetail from "@/presentation/components/features/detail/header";
import LayoutProduct from "@/presentation/components/features/landing/product";
import Testimonial from "@/presentation/components/ui/testtimonial";
import {
  TestimonialSkeleton,
  HeaderDetailSkeleton,
  BannerDetailSkeleton,
  DetailDescriptionSkeleton,
  BookingFormSkeleton,
} from "@/presentation/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";
import { ITestimonial } from "@/shared/types/global";

export default function DetailPage() {
  const location = useLocation();

  const { data, isLoading, error } = useQuery({
    queryKey: ["detail-product"],
    queryFn: fetchDetailProductJson,
  });

  const {
    data: treasure,
    isLoading: loadingTreasure,
    error: errorTreasure,
  } = useQuery({
    queryKey: ["treasure-product"],
    queryFn: fetchTreasureProductJson,
    enabled: !!data,
  });

  const { data: testimonialData, isLoading: loadingTestimonial } = useQuery({
    queryKey: ["testimonial"],
    queryFn: fetchTestimonialJson,
  });

  // Memoize data before early returns to avoid hooks order violation
  const testimonialList = useMemo(
    () => testimonialData?.data?.testimonial ?? [],
    [testimonialData]
  );
  const dataTestimonial: ITestimonial | undefined = useMemo(
    () => testimonialList[1],
    [testimonialList]
  );

  const detailData = data?.data;
  const treasureData = treasure?.data;

  // Memoize breadcrumbs before any early returns (must follow hooks rules)
  const breadcrumbs = useMemo(
    () => [
      { url: "/", name: "Home", isActive: false },
      {
        url: location.pathname,
        name: `${detailData?.category ?? ''} Detail`,
        isActive: true,
      },
    ],
    [location.pathname, detailData?.category]
  );

  if (error || errorTreasure) return <p>Error!</p>;

  return (
    <div className="lg:px-32 py-[69px]">
      {/* Header Section */}
      {isLoading ? (
        <HeaderDetailSkeleton />
      ) : detailData ? (
        <HeaderDetail
          dataBreadcrumb={breadcrumbs}
          name={detailData.name}
          location={detailData.location}
        />
      ) : null}

      {/* Banner Section */}
      {isLoading ? (
        <BannerDetailSkeleton />
      ) : detailData ? (
        <BannerDetail images={detailData.images} />
      ) : null}

      {/* Description and Booking Form Section */}
      <div className="grid grid-cols-[60%_auto] mt-[60px] gap-10">
        {/* Description */}
        {isLoading ? (
          <DetailDescriptionSkeleton />
        ) : detailData ? (
          <DetailDescription
            detail={detailData.description.detail}
            title={detailData.description.title}
            facilities={detailData.facilities}
          />
        ) : null}

        {/* Booking Form */}
        <div className="">
          {isLoading ? (
            <BookingFormSkeleton />
          ) : detailData ? (
            <BookingForm
              price={detailData.price}
              productName={detailData.name}
              productImage={detailData.images?.[0]}
            />
          ) : null}
        </div>
      </div>

      {/* Treasure Products Section */}
      {!errorTreasure && !loadingTreasure && treasureData && <LayoutProduct data={treasureData.product} />}

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
