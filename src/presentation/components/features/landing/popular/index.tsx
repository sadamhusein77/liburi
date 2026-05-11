import { memo, useCallback } from "react";
import { useNavigate } from "react-router";
import ProductCard from "@/presentation/components/ui/product-card";
import { IProduct } from "@/shared/types/global";

const PopularRoot = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full mt-[70px]">
      <span className="text-title-24 mb-5">Popular</span>
      {children}
    </div>
  );
});
PopularRoot.displayName = "PopularRoot";

interface ProductPopularProps {
  productPopular: IProduct[];
}

const ProductPopular = memo(({ productPopular }: ProductPopularProps) => {
  const navigate = useNavigate();

  // Stable callback for navigation - prevents recreation on every render
  const handleClick = useCallback((id: number) => {
    navigate(`/detail/${id}`);
  }, [navigate]);

  if (!productPopular || productPopular.length === 0) return null;

  const firstProduct = productPopular[0];

  return (
    <div className="grid grid-cols-[30%_70%] gap-x-[30px]">
      <div className="w-full h-full">
        <ProductCard
          id={firstProduct.id}
          name={firstProduct.name}
          price={firstProduct.price}
          location={firstProduct.location}
          imgUrl={firstProduct.imgUrl}
          handleClick={handleClick}
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-[30px]">
        {productPopular.slice(1).map(
          ({ id, location, name, price, imgUrl }: IProduct) => (
            <div key={id}>
              <ProductCard
                id={id}
                name={name}
                price={price}
                location={location}
                imgUrl={imgUrl}
                handleClick={handleClick}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
});
ProductPopular.displayName = "ProductPopular";

// Create the Popular component with subcomponents
const Popular = PopularRoot as typeof PopularRoot & {
  Product: typeof ProductPopular;
};
Popular.Product = ProductPopular;

export default Popular;
