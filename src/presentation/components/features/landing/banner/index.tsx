import { memo } from "react";
import { ImgBanner } from '@assets/images';
import { Button } from '@/components/ui/button';
import Item from '@/presentation/components/ui/item';
import { IItem } from '@/shared/types/global';
import { Link } from "react-router";

interface BannerRootProps {
  itemList?: IItem[];
  children?: React.ReactNode;
}

// Root component
const BannerRoot = memo(({ itemList, children }: BannerRootProps) => (
  <div className="flex justify-between gap-8">
    {children ? (
      children
    ) : (
      <>
        <BannerContent>
          <BannerCTA>
            <BannerItemList itemList={itemList ?? []} />
          </BannerCTA>
        </BannerContent>
        <BannerImage />
      </>
    )}
  </div>
));
BannerRoot.displayName = "BannerRoot";

// Content wrapper
const BannerContent = memo(({ children }: { children: React.ReactNode }) => (
  <div className="max-w-md">
    {children}
  </div>
));
BannerContent.displayName = "BannerContent";

// CTA section with button and description
const BannerCTA = memo(({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-4 h-full">
    <div className="flex-1 flex flex-col gap-[30px]">
      <h3 className="text-[42px] font-bold leading-tight">
        <span className='text-liburi-primary'>Forget Busy Work,</span> <br />
        Start Next Vacation
      </h3>
      <p className="text-md text-gray-500">
        We provide what you need to enjoy your holiday with family.
        Time to make another memorable moment.
      </p>
      <Link to="/browse-by">
        <Button className="hover:cursor-pointer">Show Me Now</Button>
      </Link>
    </div>
    {children}
  </div>
));
BannerCTA.displayName = "BannerCTA";

// Item List
interface ItemListProps {
  itemList: IItem[];
}

const BannerItemList = memo(({ itemList }: ItemListProps) => {
  return (
    <div className="flex gap-6">
      {itemList.map(({ count, name, icon }) => (
        <div
          key={name}
        >
          <Item count={count} name={name} icon={icon} />
        </div>
      ))}
    </div>
  );
});
BannerItemList.displayName = "BannerItemList";

// Image Section with lazy loading and decoding
const BannerImage = memo(() => (
  <img
    src={ImgBanner}
    alt="img-banner"
    className="w-full h-full max-w-[559px]"
    loading="eager"
    decoding="async"
    fetchPriority="high"
    width="559"
    height="500"
  />
));
BannerImage.displayName = "BannerImage";

// Build component with subcomponents using Object.assign
const BannerContentWithSub = Object.assign(BannerContent, {
  CTA: Object.assign(BannerCTA, {
    ItemList: BannerItemList,
  }),
});

const Banner = Object.assign(BannerRoot, {
  Content: BannerContentWithSub,
  Image: BannerImage,
});

export default Banner;
