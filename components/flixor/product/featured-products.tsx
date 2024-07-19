import { Product } from "@/types/product";
import {Card,CardTitle, CardDescription, CardContent, CardImage, CardOverlay, CardButton } from '@/components/flixor/card'

interface Props {
    data:Product[]
}

export function FeaturedProducts({data}:Props) {
    return <div className="grid md:grid-cols-2 gap-5" >
        {data.map(item=>{
            return <Card key={item.id}>
            <CardOverlay/>
            <CardContent>
                <CardDescription>Product tagline here 🚀</CardDescription>
                <CardTitle>{item.name}</CardTitle>
                <CardButton buttonUrl={`/shop/${item.slug}`} className="mt-3">Mas info</CardButton>
            </CardContent>
            <CardImage
            src={item.cover_image}
            alt={item.name}
            />
            
        </Card>
        })}
 
    </div>
}

