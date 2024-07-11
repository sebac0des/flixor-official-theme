// Next js
import Image from "next/image";

// Utils
import { cn } from "@/lib/utils";

// Fonts
import { fontMono } from "@/app/fonts";

// Types
import { Product } from "@/types/product";
import Link from "next/link";



interface Props {
    className?: string
    product: Product
}

export function ProductCard({ product, className }: Props) {

    if (product) return <div className={cn(className, 'relative border border-soft rounded-t-md rounded-b-md overflow-hidden')}>

        <Image
            width={1080}
            height={1080}
            alt={product.name}
            src={product.cover_image}
            className="object-cover h-96"
        />

        <div className="p-4 text-primary bg-white">
            <Link href={`/shop/${product.slug}`}  >
            <h3 className={cn(fontMono.className, "text-2xl mb-1")}>{product.name}</h3>
            </Link>
         
            <p className={cn(fontMono.className, "text-sm mb-8")}>{product.short_desc}</p>

            <div className="flex justify-between items-center">
                <span className={cn(fontMono.className, "text-lg")}>${product.price.toFixed(2)}</span>
            </div>
        </div>


    </div>
}

