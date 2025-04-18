import {
    ImgTabbyTown,
    ImgAnggana,
    ImgSeattleRain,
    ImgWoodenPit,
    ImgGreenPark,
    ImgPodoWae,
    ImgSilverRain,
    ImgCashVille,
    ImgPSWood,
    ImgOneFive,
    ImgMinimal,
    ImgStaysHome
  } from "@/assets/images";
  import ProductCard from "@/presentation/components/ui/product-card";
  import { IListProduct, IProduct } from "@/shared/types/global";
  import mockData from "@infrastructure/persistence/mock.json";
  import { useNavigate } from "react-router";
  
  const ProductRoot = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        {children}
      </>
    );
  };
  
  const ProductVariant = ({ data }: {data: IProduct[]} ) => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
      navigate(`/browse-by/${id}`)
    };

    if(!data) return;
  
    return (
      <div className="flex gap-4">
        {data.map(
            ({ id, location, name, price, imgUrl, isRecommended }: IProduct) =>
              (
                <ProductCard
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                  location={location}
                  imgUrl={imgUrl}
                  handleClick={handleClick}
                  isRecommended={isRecommended}
                  variant="2"
                />
              )
          )}
      </div>
    );
  };

  const Product = () => {
    const dataItem: IListProduct[] = mockData.product;
  
    const houses = [
        ImgTabbyTown,
        ImgAnggana,
        ImgSeattleRain,
        ImgWoodenPit,
    ];

    const hotels = [
        ImgGreenPark,
        ImgPodoWae,
        ImgSilverRain,
        ImgCashVille,
    ]

    const apartments = [
        ImgPSWood,
        ImgOneFive,
        ImgMinimal,
        ImgStaysHome
    ]
  
    const enrichedData = dataItem.map((item) => {
        const imgList =
          item.category === "houses"
            ? houses
            : item.category === "hotels"
            ? hotels
            : apartments;
      
        return {
          ...item,
          items: item.items.map((j, indexj) => ({
            ...j,
            imgUrl: imgList[indexj % imgList.length],
          })),
        };
      });      

    return (
        <>
            {
                enrichedData.map(({name, items} : IListProduct, index) => (
                    <div className="flex flex-col w-full mt-[70px]" key={index}>
                        <span className="text-title-24 mb-5">{name}</span>
                        <ProductVariant data={items} />
                    </div>
                ))
            }
        
        </>
    )
  }
  
  ProductRoot.Product = Product;
  
  export default ProductRoot;
  