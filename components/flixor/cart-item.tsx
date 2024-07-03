import { HTMLAttributes, PropsWithChildren } from "react";

// Next js
import Image, {ImageProps} from "next/image"

// Fonts
import { fontMono } from '@/app/fonts'

// Utils
import { cn } from '@/lib/utils'

// Types
import { ProductInCart } from "@/store/cart"

interface CartItem extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

interface CartItemContent extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

interface CartItemName extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {}

interface CartItemSubtotal extends PropsWithChildren<HTMLAttributes<HTMLSpanElement>> {}




const CartItem = ({ children, className}: CartItem) => {
    return <div className={cn("flex gap-4",className)}>
        {children}
    </div>
}

const CartItemImage = ({src,alt}:ImageProps) => <Image
    className='h-20 w-20 rounded-md'
    src={src}
    alt={alt}
    width={300}
    height={300}
/>

const CartItemContent = ({children}:CartItemContent)=> <div>{children}</div>

const CartItemName = ({children}:CartItemName) => <h3 className={cn(fontMono.className, "")}>{children}</h3>

const CartItemSubtotal = ({children}:CartItemSubtotal) => <span className={cn(fontMono.className, "")}>{children}</span>

export {CartItem,CartItemImage,CartItemContent,CartItemName,CartItemSubtotal}