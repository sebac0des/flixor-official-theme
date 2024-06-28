// Components
import Wrapper from "../wrapper";
import { SimpleTitle } from "../simple-title";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import { ProductCard } from "./product-card";

// Types
import { Product } from "@/types/product";


interface Props {
    data: Product[]
}

export function ProductCardSlider({ data }: Props) {

    return <div  >
        <SimpleTitle
            titleText="Most Popular ✨"
            description="Looking for safe skincare products that actually work? Look no further!"
            containerClassName="text-left"
        />
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full mt-4"
        >
            <CarouselContent>
                { data.map((item) => (
                    <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                        <ProductCard product={item} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            
        </Carousel>
    </div>
}

