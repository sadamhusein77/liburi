import { cn } from "@/lib/utils";
import { IProduct } from "@/shared/types/global";
import defaultImg from "@assets/images/default.png";

export interface IProductCard extends IProduct {
  variant?: "1" | "2";
  className?: string;
  handleClick?: (id: number) => void;
}

const ProductCard = ({
  id,
  name,
  price,
  location,
  imgUrl,
  isRecommended = false,
  variant = "1",
  className,
  handleClick = () => console.log("handleClick not set"),
}: IProductCard) => {
  const renderTag = () => (
    (variant === '1' || isRecommended) &&
    <div className="text-white text-base flex justify-center items-center gap-1 px-3 py-2 w-[180px] absolute top-0 right-0 rounded-tr-xl rounded-bl-xl bg-pink-600 z-20">
      {isRecommended ? (
        <span className="font-medium">Best Choice</span>
      ) : (
        variant !== '2' &&
        <>
          <span className="font-medium">${price}</span>
          <span className="font-light">per night</span>
        </>
      )}
    </div>
  );

  if (variant === "2") {
    return (
      <div
        className={cn(
          "cursor-pointer relative flex flex-col gap-2 w-full h-full group"
        )}
        onClick={() => handleClick(id)}
      >
        {renderTag()}
        <div className="overflow-hidden rounded-xl h-full w-full">
          <img
            src={imgUrl ?? defaultImg}
            alt={`Image of ${name}`}
            className={cn(
              "w-full h-[180px] rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105",
              className
            )}
          />
        </div>
        <div className="text-base flex flex-col mt-2 px-2">
          <span className="font-semibold">{name}</span>
          <span className="font-light text-sm">{location}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("cursor-pointer relative w-full h-full group")}
      onClick={() => handleClick(id)}
    >
      {renderTag()}
      <div className="overflow-hidden rounded-xl h-full w-full">
        <img
          src={imgUrl ?? defaultImg}
          alt={`Image of ${name}`}
          className={cn(
            "h-full w-full object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105",
            className
          )}
        />
      </div>
      <div className="text-white text-base flex flex-col mt-2 px-2 absolute bottom-3 left-3">
        <span className="font-semibold">{name}</span>
        <span className="text-sm">{location}</span>
      </div>
    </div>
  );
};

export default ProductCard;
