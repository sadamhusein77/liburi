import { IItem } from "@/shared/types/global";
import { formatNumberWithSeparator } from "@/shared/utils/utils";
import LazyImage from "@/presentation/components/ui/lazy-image";

export default function Item({count, icon, name}: IItem) {
  return (
    <div className="flex flex-col">
        <LazyImage src={icon ?? ""} alt="ic-item" className="w-full h-full max-w-8 max-h-8" placeholderClassName="w-8 h-8" />
        <div className="text-base mt-2">
            <span className="font-medium">{formatNumberWithSeparator(count) }</span>
            <span className="font-light ml-2 text-gray-400">{name}</span>
        </div>
    </div>
  )
}
