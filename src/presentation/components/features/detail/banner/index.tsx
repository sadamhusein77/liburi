interface IBannerDetail {
    images: string[];
}

export default function BannerDetail(data: IBannerDetail) {
    if(!data.images) return null;

  return (
    <div className='flex gap-x-2 mt-[50px] w-full h-[600px]'>
        <div className="flex w-[65%] h-full">
            <img src={data.images[0]} alt="img-1" className='w-full h-full object-cover rounded-l-xl' />
        </div>
        <div className="flex flex-col justify-between w-[35%] h-full gap-y-2">
        {
            data.images.map((item, index) => (
                index > 0 && (
                        <img src={item} alt={`img-${index}`} key={index} className='w-full h-full object-cover' />
                    )
                ))
            }
        </div>
    </div>
  )
}
