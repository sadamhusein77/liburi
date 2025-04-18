import Banner from '@/presentation/components/features/landing/banner'
import Popular from '@/presentation/components/features/landing/popular'
import ProductRoot from '@/presentation/components/features/landing/product'
import Testimonial from '@/presentation/components/features/landing/testtimonial'

export default function Home() {
  return (
    <div className='px-32 py-[69px]'>
      <Banner>
        <Banner.Content>
          <Banner.Content.CTA>
            <Banner.Content.CTA.ItemList />
          </Banner.Content.CTA>
        </Banner.Content>
        <Banner.Image />
      </Banner>
      <Popular>
        <Popular.Product></Popular.Product>
      </Popular>
      <ProductRoot>
        <ProductRoot.Product></ProductRoot.Product>
      </ProductRoot>
      <Testimonial>
        <Testimonial.Image></Testimonial.Image>
        <Testimonial.Content>
          <Testimonial.Content.Ratings></Testimonial.Content.Ratings>
          <Testimonial.Content.CTA></Testimonial.Content.CTA>
        </Testimonial.Content>
      </Testimonial>
    </div>
  )
}
