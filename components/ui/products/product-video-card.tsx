
// Components
import { Card, CardButton, CardContent, CardVideo, CardOverlay, CardSmallText, CardTitle } from "../card";

// Types
import { Product } from "@/types/product";

interface Props {
    className?:string
    product:Product
}

export function ProductVideoCard({product,className}:Props) {



    return <Card className={className}>
    <CardOverlay/>
    <CardVideo   
    autoPlay
    muted
    loop
    playsInline
    className="h-96 w-full"
    src={product.videos[0]}
    preload="metadata"
    />
    <CardContent>
        <CardSmallText>{product.tagline}</CardSmallText>
        <CardTitle>{product.name}</CardTitle>
        <CardButton buttonUrl={product.slug} className="mt-3">Mas info</CardButton>
    </CardContent>
</Card>
}

