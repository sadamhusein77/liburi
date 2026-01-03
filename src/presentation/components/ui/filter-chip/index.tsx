import { memo } from "react";

interface FilterChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  count?: number;
}

const FilterChipRoot = ({ label, active = false, onClick, count }: FilterChipProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
        ${
          active
            ? "bg-liburi-primary text-white shadow-md"
            : "bg-white text-gray-700 border border-gray-200 hover:border-liburi-primary hover:bg-liburi-primary/5"
        }
      `}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={`
            px-2 py-0.5 rounded-full text-xs
            ${active ? "bg-white/20" : "bg-gray-100 text-gray-600"}
          `}
        >
          {count}
        </span>
      )}
    </button>
  );
};

const FilterChip = Object.assign(FilterChipRoot, {});

export default memo(FilterChip);
