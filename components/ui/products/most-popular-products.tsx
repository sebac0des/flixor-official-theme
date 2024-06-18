// Next js
import Image from "next/image";
import Link from "next/link";

// Fonts
import { small } from '@/app/fonts'

// Components
import Wrapper from "../wrapper";
import { Button } from "../button";
import { SimpleTitle } from "../simple-title";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export function MostPopularProducts() {
    return <Wrapper container="stretch" >
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
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <ProductCard />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </Wrapper>
}

function ProductCard() {
    return <div className="relative">
        <Image
            width={1080}
            height={1080}
            alt=""
            src="/images/hero-section-background.webp"
            className="rounded-md"
        />

        <div className="absolute bottom-0 left-0 p-4 text-white">
            <span className={small.className}>Say 👋🏻 new formula!</span>
            <h3 className="text-2xl font-medium tracking-wider">Product title</h3>
            <Button variant="secondary" className="mt-3">
                <Link href="">Mas info</Link>
            </Button>
        </div>
    </div>
}