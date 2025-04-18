import {
  ImgBlueOriginFams,
  ImgOceanIsland,
  ImgStarkHouse,
  ImgVinnaVill,
  ImgBobox,
} from "@/assets/images";
import ProductCard from "@/presentation/components/ui/product-card";
import { IProduct } from "@/shared/types/global";
import mockData from "@infrastructure/persistence/mock.json";
import { useNavigate } from "react-router";

const Popular = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full mt-[70px]">
      <span className="text-title-24 mb-5">Popular</span>
      {children}
    </div>
  );
};

const ProductPopular = () => {
  const dataItem: IProduct[] = mockData.productPopular;
  const navigate = useNavigate();

  const imgUrls = [
    ImgBlueOriginFams,
    ImgOceanIsland,
    ImgStarkHouse,
    ImgVinnaVill,
    ImgBobox,
  ];

  const enrichedData = dataItem.map((item, index) => ({
    ...item,
    imgUrl: imgUrls[index % imgUrls.length],
  }));

  const handleClick = (id: number) => {
    navigate(`/browse-by/${id}`)
  };

  return (
    <div className="grid grid-cols-[30%_70%] gap-x-[30px]">
      <div className="w-full h-full">
        <ProductCard
          key={enrichedData[0].id}
          id={enrichedData[0].id}
          name={enrichedData[0].name}
          price={enrichedData[0].price}
          location={enrichedData[0].location}
          imgUrl={enrichedData[0].imgUrl}
          handleClick={handleClick}
        />
      </div>
      <div className="grid grid-cols-2 place-content-between place-items-center gap-[30px]">
        {enrichedData.map(
          ({ id, location, name, price, imgUrl }: IProduct, index) =>
            index > 0 && (
              <ProductCard
                key={id}
                id={id}
                name={name}
                price={price}
                location={location}
                imgUrl={imgUrl}
                handleClick={handleClick}
              />
            )
        )}
      </div>
    </div>
  );
};

Popular.Product = ProductPopular;

export default Popular;
