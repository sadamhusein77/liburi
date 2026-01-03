import BreadCrumb, { IBreadcrumbItem } from '@/presentation/components/ui/breadcrumb'

interface ITitleHeader {
    name: string;
    location: string;
}
const TitleDetail = ({name = '', location = ''}: ITitleHeader) => {
    return (
        <div className="flex flex-col gap-1 items-center">
            <span className='text-4xl font-semibold'>{name}</span>
            <span className='text-lg font-light text-gray-500'>{location}</span>
        </div>
    )
}

interface HeaderDetail extends ITitleHeader {
    dataBreadcrumb: IBreadcrumbItem[];
}

export default function HeaderDetail({dataBreadcrumb, name, location}: HeaderDetail) {
  return (
    <div className='grid grid-cols-3'>
        <BreadCrumb items={dataBreadcrumb}  />
        <TitleDetail name={name} location={location} />
    </div>
  )
}
