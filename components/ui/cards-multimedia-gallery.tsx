// Components
import {Card,CardImage} from '@/components/ui/card'

export function CardsMultimediaGallery(){
    return <ul className='grid grid-cols-4 gap-4'>
        <Card className='col-span-4'>
            <CardImage
            alt=''
            image='/images/placeholder-image-one-compressed.webp'/>
        </Card>

        <Card className='col-span-2'>
            <CardImage
            alt=''
            image='/images/placeholder-image-one-compressed.webp'/>
        </Card>

        <Card className='col-span-2'>
            <CardImage
            alt=''
            image='/images/placeholder-image-one-compressed.webp'/>
        </Card>
    </ul>
}