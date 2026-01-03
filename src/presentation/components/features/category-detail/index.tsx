import { memo, useState, useCallback, useMemo } from "react";
import { Link } from "react-router";
import { ICategory, ICategoryProduct, IProductAggregations, IProductPagination } from "@/shared/types/global";
import ProductCard from "@/presentation/components/ui/product-card";
import FilterChip from "@/presentation/components/ui/filter-chip";
import PriceRangeSlider from "@/presentation/components/ui/price-range-slider";
import SortDropdown, { SortOption } from "@/presentation/components/ui/sort-dropdown";
import Pagination from "@/presentation/components/ui/pagination";

interface CategoryDetailProps {
  category: ICategory;
  products: ICategoryProduct[];
  aggregations: IProductAggregations;
  pagination: IProductPagination;
}

const Hero = ({ category }: { category: ICategory }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-8" data-aos="fade-down">
      <div className="aspect-[21/9] overflow-hidden">
        <img
          src={category.imgUrl}
          alt={category.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="absolute inset-0 flex items-center p-8">
        <div className="text-white">
          <Link to="/browse-by" className="text-sm text-white/70 hover:text-white mb-2 inline-block">
            ← Back to Browse
          </Link>
          <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
          <p className="text-white/80 mb-4">{category.description}</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-2xl font-bold">{category.count.toLocaleString()}</span>
            <span className="text-sm">Properties</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Filters = ({
  aggregations,
  priceRange,
  selectedLocations,
  selectedAmenities,
  onPriceChange,
  onLocationToggle,
  onAmenityToggle,
}: {
  aggregations: IProductAggregations;
  priceRange: { min: number; max: number };
  selectedLocations: string[];
  selectedAmenities: string[];
  onPriceChange: (value: { min: number; max: number }) => void;
  onLocationToggle: (location: string) => void;
  onAmenityToggle: (amenity: string) => void;
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md mb-6" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Price Range */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range</h3>
          <PriceRangeSlider
            min={aggregations.priceRange.min}
            max={aggregations.priceRange.max}
            value={priceRange}
            onChange={onPriceChange}
          />
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Locations</h3>
          <div className="flex flex-wrap gap-2">
            {aggregations.locations.map((location) => (
              <FilterChip
                key={location.name}
                label={`${location.name} (${location.count})`}
                active={selectedLocations.includes(location.name)}
                onClick={() => onLocationToggle(location.name)}
              />
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Amenities</h3>
          <div className="flex flex-wrap gap-2">
            {aggregations.amenities.slice(0, 6).map((amenity) => (
              <FilterChip
                key={amenity.name}
                label={`${amenity.name} (${amenity.count})`}
                active={selectedAmenities.includes(amenity.name)}
                onClick={() => onAmenityToggle(amenity.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ products, sortBy, onSortChange }: { products: ICategoryProduct[]; sortBy: SortOption; onSortChange: (value: SortOption) => void }) => {
  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
      case 'price-desc':
        return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'recommended':
        return sorted.sort((a, b) => (b.isRecommended ? 1 : 0) - (a.isRecommended ? 1 : 0));
      default:
        return sorted;
    }
  }, [products, sortBy]);

  if (sortedProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
        <p className="text-gray-400 text-sm mt-2">Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">{sortedProducts.length} properties</p>
        <SortDropdown value={sortBy} onChange={onSortChange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <Link key={product.id} to={`/detail/${product.id}`}>
            <ProductCard
              id={product.id}
              name={product.name}
              location={product.location}
              price={product.price}
              imgUrl={product.imgUrl}
              isRecommended={product.isRecommended}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

const CategoryDetailRoot = ({ category, products, aggregations, pagination }: CategoryDetailProps) => {
  const [priceRange, setPriceRange] = useState({ min: aggregations.priceRange.min, max: aggregations.priceRange.max });
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [currentPage, setCurrentPage] = useState(pagination.currentPage);

  const handlePriceChange = useCallback((value: { min: number; max: number }) => {
    setPriceRange(value);
    setCurrentPage(1);
  }, []);

  const handleLocationToggle = useCallback((location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location) ? prev.filter((l) => l !== location) : [...prev, location]
    );
    setCurrentPage(1);
  }, []);

  const handleAmenityToggle = useCallback((amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
    setCurrentPage(1);
  }, []);

  const handleSortChange = useCallback((value: SortOption) => {
    setSortBy(value);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesPrice = (product.price || 0) >= priceRange.min && (product.price || 0) <= priceRange.max;
      const matchesLocation = selectedLocations.length === 0 || selectedLocations.some((loc) => product.location.includes(loc));
      const matchesAmenities = selectedAmenities.length === 0 || selectedAmenities.every((amenity) => product.amenities?.includes(amenity));
      return matchesPrice && matchesLocation && matchesAmenities;
    });
  }, [products, priceRange, selectedLocations, selectedAmenities]);

  return (
    <div className="flex flex-col">
      <Hero category={category} />

      <Filters
        aggregations={aggregations}
        priceRange={priceRange}
        selectedLocations={selectedLocations}
        selectedAmenities={selectedAmenities}
        onPriceChange={handlePriceChange}
        onLocationToggle={handleLocationToggle}
        onAmenityToggle={handleAmenityToggle}
      />

      <ProductGrid products={filteredProducts} sortBy={sortBy} onSortChange={handleSortChange} />

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / pagination.itemsPerPage)}
        totalItems={filteredProducts.length}
        itemsPerPage={pagination.itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const CategoryDetail = Object.assign(CategoryDetailRoot, {
  Hero,
  Filters,
  ProductGrid,
});

export default memo(CategoryDetail);
