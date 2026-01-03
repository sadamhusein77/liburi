import { Link } from "react-router";
import { Home, ChevronRight } from "lucide-react";

export interface IBreadcrumbItem {
  url: string;
  name: string;
  isActive: boolean;
}

const BreadcrumbItem = ({ url, name, isActive }: IBreadcrumbItem) => {
  const isHome = name.toLowerCase() === "home";
  return (
    <Link
      to={url}
      aria-current={isActive ? "page" : undefined}
      className={`text-sm md:text-base font-medium transition-colors ${
        isActive ? "text-black" : "text-gray-500 hover:text-black"
      }`}
    >
      <span className="flex gap-2 items-center max-w-[150px] truncate" title={name}>
        {isHome ? <Home size={16} className="mr-1" /> : null}
        {name}
      </span>
    </Link>
  );
};

interface BreadCrumbProps {
  items: IBreadcrumbItem[];
}

export default function BreadCrumb({ items }: BreadCrumbProps) {
  if (!items?.length) return null;

  return (
    <nav
      className="flex flex-col sm:flex-row sm:items-center sm:gap-2 overflow-x-auto max-w-full whitespace-nowrap scrollbar-hide"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <BreadcrumbItem {...item} />
            {index < items.length - 1 && (
              <ChevronRight
                size={16}
                className="text-gray-400"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
