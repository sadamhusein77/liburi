import React from 'react';
import { IcCities, IcTravelers, IcTreasure } from '@assets/ico';
import { ImgBanner } from '@assets/images';
import { Button } from '@/components/ui/button';
import Item from '@/presentation/components/ui/item';
import mockData from '@infrastructure/persistence/mock.json';
import { IItem } from '@/shared/types/global';

// Root component
const BannerRoot = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-between gap-8">
    {children}
  </div>
);

// Content wrapper
const BannerContent = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-md">
    {children}
  </div>
);

// CTA section with button and description
const BannerCTA = ({ children }: { children: React.ReactNode }) => (
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
        <Button>Show Me Now</Button>
    </div>
    {children}
  </div>
);

// Item List using mock data
const ItemList = () => {
  const dataItem: IItem[] = mockData.itemList;

  const icons = [IcTravelers, IcTreasure, IcCities];

  const enrichedData = dataItem.map((item, index) => ({
    ...item,
    icon: icons[index % icons.length],
  }));

  return (
    <div className="flex gap-6">
      {enrichedData.map(({ count, name, icon }) => (
        <Item key={name} count={count} name={name} icon={icon} />
      ))}
    </div>
  );
};

// Image Section
const BannerImage = () => (
  <img src={ImgBanner} alt="img-banner" className="w-full max-w-[500px] object-cover" />
);

// Attach subcomponents
BannerContent.CTA = BannerCTA;
BannerCTA.ItemList = ItemList;

const Banner = Object.assign(BannerRoot, {
  Content: BannerContent,
  Image: BannerImage
});

export default Banner;
