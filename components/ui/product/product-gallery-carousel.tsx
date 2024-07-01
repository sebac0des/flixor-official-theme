// Fonts
import {fontMono} from '@/app/fonts'

// Components
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/shadcn/carousel'
import { Card, CardImage, CardVideo } from '@/components/ui/card'

// Next js
import { ImageProps } from 'next/image'

function ProductGalleryCarousel() {
    return <Carousel className="w-full block lg:hidden">
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <Card>
            <CardImage
                alt=""
                src="/images/placeholder-image-one-compressed.webp" />
        </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <ProductGalleryCarouselIndicators />
  </Carousel>
}

function ProductGalleryCarouselIndicators(){
    return <div className='flex justify-between items-center text-sm tracking-[.95em] font-medium mt-2'>
    <CarouselPrevious className='bg-transparent text-black translate-x-0 static translate-y-0'/>
    <span className={fontMono.className}>1/5</span>
    <CarouselNext className='bg-transparent text-black translate-x-0 static translate-y-0'/>
    </div>
}

function CardsGalleryFeaturedImage({ ...props }: ImageProps) {
    return <Card className='col-span-4'>
        <CardImage
            {...props} />
    </Card>
}

function CardsGalleryGridImages({imagesUrls}:{imagesUrls:string[]}) {
    return imagesUrls.map(item => {
        return <Card>
            <CardImage
                alt={item}
                src={item} />
        </Card>
    })
}

function CardsGalleryGridVideos({videosUrls}:{videosUrls:string[]}) {
    return videosUrls.map((item, index) => {
        if (index === 0) return <Card className='col-span-2'>
            <CardVideo
                src={item}
                controls
                autoPlay
                playsInline
                muted
            />
        </Card>

        return <Card className='col-span-2'>
            <CardVideo
                src={item}
                playsInline
                autoPlay={false}
            />
        </Card>
    })
}

export {ProductGalleryCarousel,CardsGalleryFeaturedImage,CardsGalleryGridImages,CardsGalleryGridVideos}