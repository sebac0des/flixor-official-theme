// Next js
import Image from "next/image";

// Fonts
import { small } from '@/app/fonts'

// Components
import Wrapper from "../wrapper";
import { Button } from "../button";
import Link from "next/link";



export function FeaturedProducts() {
    return <Wrapper className="grid md:grid-cols-2 gap-5" container="stretch" >
        <ProductCard />
        <ProductCard />
        <ProductCard />
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