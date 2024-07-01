// React
import { ReactNode } from 'react'

// Components
import { Card, CardImage, CardVideo } from '@/components/flixor/card'


// Next js
import { Carousel, CarouselContent, CarouselItem} from '../shadcn/carousel'

interface CardCarouselProps {
    children?: ReactNode
    className?: string
}

function CardCarousel({ children, className }: CardCarouselProps) {
    return <Carousel className={className}>
        <CarouselContent>
            {children}
        </CarouselContent>
    </Carousel>
}

function CardCarouselSingleImage({ src, alt }: {src:string,alt:string}) {
    return <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <Card>
            <CardImage src={src} alt={alt} />
        </Card>
    </CarouselItem>
}

function CardCarouselImages({images}:{images:string[]}) {
    return images.map((item) => (
        <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
            <Card>
                <CardImage src={item} alt={item} />
            </Card>
        </CarouselItem>
    ))
}

function CardCarouselSingleVideo({ src }: {src:string}) {
    return <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <Card >
            <CardVideo
                src={src}
                controls
                autoPlay
                playsInline
                muted
            />
        </Card>
    </CarouselItem>
}

function CardCarouselVideos({videos}:{videos:string[]}) {
    return videos.map((item) => (
        <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
            <Card >
                <CardVideo
                    src={item}
                    controls
                    autoPlay
                    playsInline
                    muted
                />
            </Card>
        </CarouselItem>
    ))
}



export { CardCarousel, CardCarouselSingleImage, CardCarouselImages, CardCarouselSingleVideo, CardCarouselVideos }