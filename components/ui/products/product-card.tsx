// Next js
import Link from "next/link";
import Image from "next/image";

// Utils
import { cn } from "@/lib/utils";

// Fonts
import { fontMono } from "@/app/fonts";

// Components
import { Button } from "../button";

// Icons
import { Eye } from "lucide-react";

// Types
import { Product } from "@/types";
import { AddToCart } from "../add-to-cart";


interface Props {
    className?: string
    product: Product
}

export function ProductCard({ product, className }: Props) {

    if (product) return <div className={cn(className, 'relative border border-[#e8e6df] rounded-t-md rounded-b-md overflow-hidden')}>

        <Image
            width={1080}
            height={1080}
            alt={product.name}
            src={product.cover_image}
        />

        <div className="p-4 text-primary bg-white">
            <h3 className={cn(fontMono.className, "text-2xl mb-1")}>{product.name}</h3>
            <p className={cn(fontMono.className, "text-sm mb-8")}>{product.short_desc}</p>

            <div className="flex justify-between items-center">
                <span className={cn(fontMono.className, "text-lg")}>${product.price.toFixed(2)}</span>
                <AddToCart product={product}/>
            </div>
        </div>


    </div>
}

