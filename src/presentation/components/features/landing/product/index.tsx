import { memo, useCallback } from "react";
import { useNavigate } from "react-router";
import ProductCard from "@/presentation/components/ui/product-card";
import { IListProduct, IProduct } from "@/shared/types/global";

const ProductVariant = memo(({ data }: { data: IProduct[] }) => {
  const navigate = useNavigate();

  // Stable callback for navigation - prevents recreation on every render
  const handleClick = useCallback((id: number) => {
    navigate(`/detail/${id}`);
  }, [navigate]);

  if (!data) return null;

  return (
    <div className="flex gap-4">
      {data.map(({ id, location, name, price, imgUrl, isRecommended }: IProduct, index) => (
        <div
          key={id}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay={index * 100}
        >
          <ProductCard
            id={id}
            name={name}
            price={price}
            location={location}
            imgUrl={imgUrl}
            handleClick={handleClick}
            isRecommended={isRecommended}
            variant="2"
          />
        </div>
      ))}
    </div>
  );
});
ProductVariant.displayName = "ProductVariant";

interface ILayoutProduct {
  data: IListProduct[];
}

const LayoutProduct = memo(({ data = [] }: ILayoutProduct) => {
  if (!data) return null;

  return (
    <>
      {data.map(({ name, items }: IListProduct, index) => (
        <div className="flex flex-col w-full mt-[70px]" key={index}>
          <span className="text-title-24 mb-5">{name}</span>
          <ProductVariant data={items} />
        </div>
      ))}
    </>
  );
});
LayoutProduct.displayName = "LayoutProduct";

export default LayoutProduct;
  