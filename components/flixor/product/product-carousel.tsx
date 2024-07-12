// Components
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/shadcn/carousel"

import { ProductCard, ProductCardDescription, ProductCardFooter, ProductCardHeader, ProductCardTitle, ProductCardImage } from "@/components/flixor/product/product-card";

import { AddToCartButton, AddToCartButtonIcon, AddToCartButtonText } from "@/components/flixor/add-to-cart";

// Utils
import { cn } from "@/lib/utils";

// Types
import { Product } from "@/types/product";

// Fonts
import { fontMono } from "@/app/fonts";
import Link from "next/link";


type CarouselProps = React.ComponentProps<typeof Carousel>;
type CarouselContentProps = React.ComponentProps<typeof CarouselContent> & { data: Product[] }

function ProductCarousel({ children, className, ...props }: CarouselProps) {

    return <Carousel
        {...props}
        className={cn("w-full mt-3", className)}
    >
        {children}
    </Carousel>
}

function ProductCarouselContent({ data, className, ...props }: CarouselContentProps) {
    return <CarouselContent {...props} className={cn(className)}>

        {data.map(item => {
            return <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <ProductCard>
                    <ProductCardImage width={1080} height={1080} alt="" src={item.cover_image} />
                    <ProductCardHeader>
                        <Link href={`/shop/${item.slug}`}>
                            <ProductCardTitle>{item.name}</ProductCardTitle>

                        </Link>
                        <ProductCardDescription>{item.short_desc}</ProductCardDescription>
                    </ProductCardHeader>

                    <ProductCardFooter className="place-content-between">
                        <span className={cn(fontMono.className, "text-lg")}>${item.price.toFixed(2)}</span>
                        <AddToCartButton
                            className="text-xs"
                            size="sm"
                            variant="secondary" cartItem={item}>
                            <AddToCartButtonText>Agregar al carrito</AddToCartButtonText>
                            <AddToCartButtonIcon className="w-4 h-4 ml-2.5" />
                        </AddToCartButton>
                    </ProductCardFooter>
                </ProductCard>
            </CarouselItem>
        })}

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