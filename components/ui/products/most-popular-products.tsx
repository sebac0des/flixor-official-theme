// Next js
import Image from "next/image";
import Link from "next/link";

// Fonts
import { small } from '@/app/fonts'

// Components
import Wrapper from "../wrapper";
import { SimpleTitle } from "../simple-title";
import { Button } from "../button";


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// Utils
import { cn } from "@/lib/utils";

// Icons
import { Eye } from "lucide-react";


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
    return <div className="relative border border-[#e8e6df] rounded-t-md rounded-b-md overflow-hidden">

        <Image
            width={1080}
            height={1080}
            alt=""
            src="/images/Collection_Product-Brand-Bartlett-Pear-min.webp"
        />

        <div className="p-4 text-primary bg-white">
            <h3 className={cn(small.className, "text-2xl mb-1")}>Barlett Pear Bundle</h3>
            <p className={cn(small.className, "text-sm mb-8")}>Bartlett Pear Bundle is an effective skin care product that has been created as a result of extensive research into the properties of pears.</p>

            <div className="flex justify-between items-center">
                <span className={cn(small.className, "text-lg")}>$20.00</span>
                <Button asChild variant="accent" size="sm" className="hover:bg-transparent hover:text-accent border hover:border-accent">
                    <Link href="">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver producto
                    </Link>
                </Button>
            </div>
        </div>


    </div>
}