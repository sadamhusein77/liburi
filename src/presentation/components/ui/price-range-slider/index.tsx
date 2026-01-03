import { memo } from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
}

const PriceRangeSliderRoot = ({ min, max, value, onChange }: PriceRangeSliderProps) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(e.target.value);
    if (newMin <= value.max) {
      onChange({ ...value, min: newMin });
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(e.target.value);
    if (newMax >= value.min) {
      onChange({ ...value, max: newMax });
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1">
        <label htmlFor="min-price" className="block text-xs text-gray-500 mb-1">
          Min Price
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <input
            id="min-price"
            type="number"
            min={min}
            max={value.max}
            value={value.min}
            onChange={handleMinChange}
            className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-liburi-primary/20 focus:border-liburi-primary text-sm"
          />
        </div>
      </div>

      <span className="text-gray-400 mt-5">—</span>

      <div className="flex-1">
        <label htmlFor="max-price" className="block text-xs text-gray-500 mb-1">
          Max Price
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <input
            id="max-price"
            type="number"
            min={value.min}
            max={max}
            value={value.max}
            onChange={handleMaxChange}
            className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-liburi-primary/20 focus:border-liburi-primary text-sm"
          />
        </div>
      </div>
    </div>
  );
};

const PriceRangeSlider = Object.assign(PriceRangeSliderRoot, {});

export default memo(PriceRangeSlider);
