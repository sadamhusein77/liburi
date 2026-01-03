import Item from '@/presentation/components/ui/item';
import { IItem } from '@/shared/types/global';

interface IDetailDesc {
    title: string;
    detail: string;
    facilities: IItem[];
}

export default function DetailDescription({detail = '', facilities = [], title = ''}: IDetailDesc) {
  return (
    <div className='flex flex-col'>
        <span className='text-xl font-medium mb-2.5'>{title}</span>
        <div className='text-gray-400 text-[16px] font-light flex flex-col gap-1 leading-[170%] mb-[30px]' dangerouslySetInnerHTML={{ __html: detail }} />
        <div className="grid grid-cols-4 gap-2">
            {
                facilities.length > 0 &&
                facilities.map(({count, name, icon}:IItem, index) => (
                    <Item name={name} count={count} icon={icon} key={index} />
                ))
            }
        </div>
    </div>
  )
}
