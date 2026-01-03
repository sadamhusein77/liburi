import { memo } from "react";

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'recommended';

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SORT_OPTIONS = [
  { value: 'recommended' as SortOption, label: 'Recommended' },
  { value: 'price-asc' as SortOption, label: 'Price: Low to High' },
  { value: 'price-desc' as SortOption, label: 'Price: High to Low' },
  { value: 'name-asc' as SortOption, label: 'Name: A to Z' },
];

const SortDropdownRoot = ({ value, onChange }: SortDropdownProps) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-liburi-primary/20 focus:border-liburi-primary cursor-pointer"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

const SortDropdown = Object.assign(SortDropdownRoot, {});

export default memo(SortDropdown);
