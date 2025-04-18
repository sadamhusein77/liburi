import { ImgFamilyGroup } from "@/assets/images"
import { Button } from "@/components/ui/button"
import RatingStars from "@/presentation/components/ui/rating/indes"

const Testimonial = ({ children }: {children?: React.ReactNode}) => {
    return (
        <div className="flex w-full h-full gap-x-14 mt-[70px]">
            { children }
        </div>
    )
}

const Image = () => {
    return (
        <div className="relative w-[367px] h-[502px]">
            <div className="w-full h-full rounded-2xl outline-2 outline-solid outline-gray-200 z-10 absolute top-0 left-0"></div>
            <img src={ImgFamilyGroup} alt="img-testimonial" className="h-auto w-auto z-20 absolute -bottom-10 -right-6" />
        </div>
    )
}

const Content = ({ children }: {children?: React.ReactNode}) => {
    return (
        <div className="flex-1 h-full flex flex-col">
            <span className="text-2xl font-medium mb-10 pt-24">Happy Family</span>
            { children }
        </div>
    )
}

const CTA = () => {
    return (
        <div className="flex flex-col mt-2">
            <span className="text-[32px]">What a great trip with my family and 
            I should try again next time soon ...</span>
            <span className="text-lg font-light">Daerel Dixon Actor</span>
            <Button className="mt-[50px] w-fit" size={"lg"}>
                Read Their Story
            </Button>
        </div>
    )
}

const Ratings = () => {
    return (
        <RatingStars rating={3.5} />
    )
}
Content.Ratings = Ratings;
Content.CTA = CTA;
Testimonial.Image = Image;
Testimonial.Content = Content;

export default Testimonial;