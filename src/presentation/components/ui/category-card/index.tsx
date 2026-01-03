import { memo } from "react";
import { Link } from "react-router";
import { ICategory } from "@/shared/types/global";

interface CategoryCardProps {
  category: ICategory;
  onClick?: () => void;
}

const CategoryCardRoot = ({ category, onClick }: CategoryCardProps) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      onClick={onClick}
      className="group block relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      data-aos="fade-up"
    >
      {/* Background Image */}
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-liburi-primary/20 to-liburi-primary/5">
        {category.imgUrl ? (
          <img
            src={category.imgUrl}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl text-liburi-primary/30">
              {category.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-1">{category.name}</h3>
        <p className="text-sm text-white/80 mb-2">{category.description}</p>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
            {category.count.toLocaleString()} properties
          </span>
        </div>
      </div>
    </Link>
  );
};

const CategoryCard = Object.assign(CategoryCardRoot, {});

export default memo(CategoryCard);
