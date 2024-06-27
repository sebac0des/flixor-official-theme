// Components
import {Card,CardImage,CardVideo} from '@/components/ui/card'

// Mock data
import {Products} from '@/data/products'

const mock_product = Products[0]

export function CardsGallery(){
    return <ul className='grid grid-cols-4 gap-4'>
    <CardsGalleryFeaturedElement/>
    <CardsGalleryGridVideos/>
    <CardsGalleryGridImages/>
    </ul>
}

export function CardsGalleryFeaturedElement({}){
    return <Card className='col-span-4'>
    <CardImage
    alt=''
    image='/images/placeholder-image-one-compressed.webp'/>
</Card>
}


export function CardsGalleryGridImages(){
    return mock_product.images?.map(item=>{
        return <Card className='col-span-2'>
        <CardImage
        alt=''
        image={item}/>
    </Card>
    })
}

export function CardsGalleryGridVideos(){
    return mock_product.videos?.map((item,index)=>{
        if(index === 0) return <Card className='col-span-2'>
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