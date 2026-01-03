interface IBannerDetail {
    images: string[];
}

export default function BannerDetail(data: IBannerDetail) {
    if(!data.images) return null;

  return (
    <div className='flex gap-x-2 mt-[50px]'>
        <div className="flex">
            <img src={data.images[0]} alt="img-1" className='w-auto h-auto' />
        </div>
        <div className="flex flex-col justify-between">
        {
            data.images.map((item, index) => (
                index > 0 && (
                        <img src={item} alt={`img-${index}`} key={index} className='w-auto h-auto' />
                    )
                ))
            }
        </div>
    </div>
  )
}
