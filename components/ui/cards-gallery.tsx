// React
import { ReactNode } from 'react'

// Components
import { Card, CardImage, CardVideo } from '@/components/ui/card'
import { cn } from '@/lib/utils'

// Next js
import { ImageProps } from 'next/image'

interface CardsGalleryProps {
    children:ReactNode
    className?:string
}

function CardsGallery({ children,className }:CardsGalleryProps) {
    return <ul className={cn("grid grid-cols-4 gap-2",className)}>
        {children}
    </ul>
}

function CardsGalleryFeaturedImage({ ...props }: ImageProps) {
    return <Card className='col-span-4'>
        <CardImage
            {...props} />
    </Card>
}

function CardsGalleryGridImages({imagesUrls}:{imagesUrls:string[]}) {
    return imagesUrls.map(item => {
        return <Card className='col-span-2'>
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

export {CardsGallery,CardsGalleryFeaturedImage,CardsGalleryGridImages,CardsGalleryGridVideos}