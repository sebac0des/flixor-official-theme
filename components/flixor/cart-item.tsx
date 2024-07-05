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


const CartItem = ({ children, className, ...props}: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn("flex gap-4",className)}
    {...props}
    >
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

const CartItemContent = ({children, className, ...props}:React.HTMLAttributes<HTMLDivElement>)=> <div className={className} {...props}>{children}</div>

const CartItemName = ({children, className, ...props}:React.HTMLAttributes<HTMLHeadingElement>) => <h3 className={cn(fontMono.className,className)} {...props}>{children}</h3>

const CartItemSubtotal = ({children, className, ...props}:React.HTMLAttributes<HTMLSpanElement>) => <span className={cn(fontMono.className, className)} {...props}>{children}</span>

const CartItemRemove = ({className, ...props}:Button)=> {
    return <Button className={cn("h-fit w-fit",className)} size="icon" variant="ghost" {...props} {...props}>
        <X className="w-4 h-4"/>
    </Button>
}


export {CartItem,CartItemRemove,CartItemImage,CartItemContent,CartItemName,CartItemSubtotal}