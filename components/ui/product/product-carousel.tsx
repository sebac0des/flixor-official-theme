// Components
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"

import { ProductCard } from "./product-card";

// Utils
import { cn } from "@/lib/utils";

// Types
import { Product } from "@/types/product";


type CarouselProps = React.ComponentProps<typeof Carousel>;
type CarouselContentProps = React.ComponentProps<typeof CarouselContent> & { data: Product[] }

function ProductCarousel({ children, className,...props }: CarouselProps) {

    return <Carousel
        {...props}
        className={cn("w-full mt-3", className)}
    >
        {children}
    </Carousel>
}

function ProductCarouselContent({ data,className, ...props }: CarouselContentProps) {
    return <CarouselContent {...props} className={cn(className)}>
        {data.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <ProductCard product={item} />
            </CarouselItem>
        ))}
    </CarouselContent>
}

function ProductCarouselIndicators() {
    return <div className="mb-3 flex gap-3">
        <CarouselPrevious className="static translate-y-0 translate-x-0 text-black scale-125 w-fit border-none" />
        <CarouselNext className="static translate-y-0 translate-x-0 text-black scale-125 w-fit border-none" />
    </div>
}

export {
    ProductCarousel,
    ProductCarouselContent,
    ProductCarouselIndicators
}