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

interface Props {
    className?:string
}

export function ProductCard(props:Props) {
    return <div className={cn(props.className, 'relative border border-[#e8e6df] rounded-t-md rounded-b-md overflow-hidden')}>

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