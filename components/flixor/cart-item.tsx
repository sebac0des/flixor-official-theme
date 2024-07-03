// React
import { HTMLAttributes, PropsWithChildren } from "react";

// Next js
import Image, {ImageProps} from "next/image"

// Components
import { Button } from "../shadcn/button";

// Icons
import { X } from "lucide-react";

// Fonts
import { fontMono } from '@/app/fonts'

// Utils
import { cn } from '@/lib/utils'

type Button = React.ComponentProps<typeof Button>

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

const CartItemContent = ({children, className}:CartItemContent)=> <div className={className}>{children}</div>

const CartItemName = ({children, className}:CartItemName) => <h3 className={cn(fontMono.className,className)}>{children}</h3>

const CartItemSubtotal = ({children, className}:CartItemSubtotal) => <span className={cn(fontMono.className, className)}>{children}</span>

const CartItemRemove = ({className, ...props}:Button)=> {
    return <Button className={cn("h-fit w-fit",className)} size="icon" variant="ghost" {...props} >
        <X className="w-4 h-4"/>
    </Button>
}


export {CartItem,CartItemRemove,CartItemImage,CartItemContent,CartItemName,CartItemSubtotal}