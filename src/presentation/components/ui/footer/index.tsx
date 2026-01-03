import { IContentFooter, IItemContentFooter } from '@/shared/types/global';
import { mockData } from '@/infrastructure/persistence/mock';
import { Link } from 'react-router';

const Footer = ({ children }: {children?: React.ReactNode}) => {
    return (
        <div className="flex flex-col px-32 py-4 outline outline-solid outline-gray-200 mt-20">
            {children}
        </div>
    )
}

const WrapperContent = ({ children }: {children?: React.ReactNode}) => {
    return (
        <div className="grid grid-cols-[30%_70%]">
            {children}
        </div>
    )
}

const Title = () => {
    return (
        <div className="flex flex-col max-w-[258px]">
            <p className="text-2xl"><span className="text-liburi-primary">Libur</span>i</p>
            <p className="text-lg font-light text-gray-400">We kaboom your beauty holiday
            instantly and memorable.</p>
        </div>
    )
}

const ContentList = () => {
    const data: IContentFooter[] = mockData.contentFooter;
    return (
        <div className="flex gap-4 justify-evenly">
            {
                data &&
                data.map(({id, item, title}: IContentFooter) => (
                    <div className="flex flex-col gap-4" key={id}>
                        <p className="text-lg font-medium">{title}</p>
                        <ul className='flex flex-col gap-2'>
                            {
                                item &&
                                item.map(({id, name, url}: IItemContentFooter) => (
                                    <Link to={url} key={id}>
                                        <li className="text-base font-light text-gray-400">
                                            { name }
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

const CopyRight = () => {
    const date = new Date();
    return (
        <p className="text-base text-center font-light my-[50px]">
            Copyright {date.getFullYear()} • All rights reserved • Staycation
        </p>
    )
}

WrapperContent.Title = Title;
WrapperContent.ContentList = ContentList;
Footer.WrapperContent = WrapperContent;
Footer.CopyRight = CopyRight;

export default Footer;