// Next js
import Link from "next/link";
import Image from "next/image";

// Utils
import { cn } from "@/lib/utils";

// Fonts
import { small } from "@/app/fonts";

// Components
import { Button } from "../button";

// Icons
import { Eye } from "lucide-react";

// Types
import { Product } from "@/types";


interface Props {
    className?: string
    product: Product
   
}

export function ProductCard({product,className}: Props) {


    if(product) return <div className={cn(className, 'relative border border-[#e8e6df] rounded-t-md rounded-b-md overflow-hidden')}>



    <Image
        width={1080}
        height={1080}
        alt={product.name}
        src={product.cover_image}
    />

    <div className="p-4 text-primary bg-white">
        <h3 className={cn(small.className, "text-2xl mb-1")}>{product.name}</h3>
        <p className={cn(small.className, "text-sm mb-8")}>{product.short_desc}</p>

        <div className="flex justify-between items-center">
            <span className={cn(small.className, "text-lg")}>${product.price.toFixed(2)}</span>
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

