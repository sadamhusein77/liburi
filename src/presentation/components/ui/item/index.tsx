import { IItem } from "@/shared/types/global";
import { formatNumberWithSeparator } from "@/shared/utils/utils";

export default function Item({count, icon, name}: IItem) {
  return (
    <div className="flex flex-col">
        <img src={icon} alt="ic-item" className="w-8 h-8" />
        <div className="text-base mt-2">
            <span className="font-medium">{formatNumberWithSeparator(count) }</span>
            <span className="font-light ml-2 text-gray-400">{name}</span>
        </div>
    </div>
  )
}
