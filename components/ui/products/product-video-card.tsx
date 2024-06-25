// Next js
import Image from "next/image";
import Link from "next/link";

// Fonts
import { fontMono } from '@/app/fonts'

// Components
import { Button } from "../button";
import { cn } from "@/lib/utils";

interface Props {
    className?:string
}

export function ProductVideoCard(props:Props) {
    return <div className={cn(props.className, 'relative')}>
    <Image
        width={1080}
        height={1080}
        alt=""
        src="/images/placeholder-image-one-compressed.webp"
        className="rounded-md h-screen object-cover"
    />

    <div className="absolute bottom-0 left-0 p-4 text-white">
        <span className={fontMono.className}>Say 👋🏻 new formula!</span>
        <h3 className="text-2xl font-medium tracking-wider">Product title</h3>
        <Button variant="secondary" className="mt-3">
            <Link href="">Mas info</Link>
        </Button>
    </div>
</div>
}

