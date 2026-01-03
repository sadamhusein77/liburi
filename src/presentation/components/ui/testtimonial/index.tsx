import { memo } from "react";
import { ImgFamilyGroup } from "@/assets/images";
import { Button } from "@/components/ui/button";
import RatingStars from "@/presentation/components/ui/rating/indes";
import { Link } from "react-router";

const TestimonialRoot = memo(({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full gap-x-20 mt-[70px]">
      {children}
    </div>
  );
});
TestimonialRoot.displayName = "TestimonialRoot";

interface ImageProps {
  imgUrl: string;
}

const Image = memo(({ imgUrl }: ImageProps) => {
  return (
    <div
      className="relative w-[367px] h-[502px]"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="w-full h-full rounded-2xl outline-2 outline-solid outline-gray-200 z-10 absolute top-0 left-0" />
      <img
        src={imgUrl ?? ImgFamilyGroup}
        alt="img-testimonial"
        loading="lazy"
        width="367"
        height="502"
        className="h-auto w-auto z-20 absolute -bottom-10 -right-6"
      />
    </div>
  );
});
Image.displayName = "Image";

const Content = memo(({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className="flex-1 h-full flex flex-col"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="400"
    >
      <span className="text-2xl font-medium mb-10 pt-24">Happy Family</span>
      {children}
    </div>
  );
});
Content.displayName = "Content";

interface ITestimonialCTA {
  comment: string;
  name: string;
  carrier: string;
}

const CTA = memo(({ carrier, comment, name }: ITestimonialCTA) => {
  return (
    <div className="flex flex-col mt-2">
      <span className="text-[32px]">{comment ?? "Lorem ipsum dolor sit amet."}</span>
      <span className="text-lg font-light">
        {name ?? "Name"} {carrier ?? "Carrier"}
      </span>
      <Link to="/stories">
        <Button className="mt-[50px] w-fit hover:cursor-pointer" size="lg">
          Read Their Story
        </Button>
      </Link>
    </div>
  );
});
CTA.displayName = "CTA";

const Ratings = memo(({ rate }: { rate: number }) => {
  return <RatingStars rating={rate ?? 5} />;
});
Ratings.displayName = "Ratings";

// Build component with subcomponents using Object.assign
const ContentWithSub = Object.assign(Content, {
  Ratings,
  CTA,
});

const Testimonial = Object.assign(TestimonialRoot, {
  Image,
  Content: ContentWithSub,
});

export default Testimonial;