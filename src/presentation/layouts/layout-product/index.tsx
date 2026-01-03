import ProductCard from "@/presentation/components/ui/product-card";
import { IListProduct, IProduct } from "@/shared/types/global";
import { mockData } from "@/infrastructure/persistence/mock";
import { useNavigate } from "react-router";

const LayoutProductRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

const ProductVariant = ({ data }: {data: IProduct[]} ) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/detail/${id}`)
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

  return (
      <>
          {
              dataItem.map(({name, items} : IListProduct, index) => (
                  <div className="flex flex-col w-full mt-[70px]" key={index}>
                      <span className="text-title-24 mb-5">{name}</span>
                      <ProductVariant data={items} />
                  </div>
              ))
          }
      
      </>
  )
}

LayoutProductRoot.Product = Product;

export default LayoutProductRoot;
