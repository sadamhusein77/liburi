import { memo, useMemo } from "react";
import { ICategory, ICategoryFilter } from "@/shared/types/global";
import CategoryCard from "@/presentation/components/ui/category-card";
import FilterChip from "@/presentation/components/ui/filter-chip";
import SectionHeader from "@/presentation/components/ui/section-header";

interface BrowseByProps {
  categories: ICategory[];
  filters: ICategoryFilter[];
  activeFilters: string[];
  onFilterChange: (filter: string) => void;
}

const FilterChips = ({ filters, activeFilters, onFilterChange }: Pick<BrowseByProps, "filters" | "activeFilters" | "onFilterChange">) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {filters.map((filter) => (
        <FilterChip
          key={filter.type}
          label={filter.label}
          active={activeFilters.includes(filter.type)}
          onClick={() => onFilterChange(filter.type)}
        />
      ))}
    </div>
  );
};

const CategoryGrid = ({ categories }: { categories: ICategory[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

const BrowseByRoot = ({ categories, filters, activeFilters, onFilterChange }: BrowseByProps) => {
  const categoryCount = useMemo(() => categories.length, [categories.length]);
  const totalCount = useMemo(
    () => categories.reduce((sum, cat) => sum + cat.count, 0),
    [categories]
  );

  return (
    <div className="flex flex-col">
      {/* Header */}
      <SectionHeader
        title="Browse By Category"
        subtitle={`Explore ${totalCount.toLocaleString()}+ properties across ${categoryCount} categories`}
      />

      {/* Filter Chips */}
      <FilterChips
        filters={filters}
        activeFilters={activeFilters}
        onFilterChange={onFilterChange}
      />

      {/* Category Grid */}
      <CategoryGrid categories={categories} />
    </div>
  );
};

const BrowseBy = Object.assign(BrowseByRoot, {
  FilterChips,
  CategoryGrid,
});

export default memo(BrowseBy);
