// Next js
import Image from "next/image";
import Link from "next/link";

// Fonts
import { small } from '@/app/fonts'

// Components
import { Button } from "../button";

export function ProductVideoCard() {
    return <div className="relative">
    <Image
        width={1080}
        height={1080}
        alt=""
        src="/images/Body-Wash_Product-Brand-1-Bartlett-Pear-min.webp"
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
