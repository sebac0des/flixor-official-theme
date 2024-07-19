// React
import React from "react";

// Next js
import Image, { ImageProps } from "next/image"

// Components
import { Button, ButtonProps } from "@/components/shadcn/button";

// Icons
import { X } from "lucide-react";

// Fonts
import { fontMono } from '@/app/fonts'

// Utils
import { cn } from '@/lib/utils'

const CartItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn("flex gap-4", className)} {...props} />)
CartItem.displayName = 'CartItem'

const CartItemImage = React.forwardRef<HTMLImageElement, ImageProps>(({ className, ...props }, ref) => <Image ref={ref} className={cn("h-20 w-20 rounded-md")} width={300} height={300} {...props} />)
CartItemImage.displayName = 'CartItemImage'

const CartItemContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={className} {...props} />)
CartItemContent.displayName = 'CartItemContent'

const CartItemName = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => <h3 ref={ref} className={cn(fontMono.className, className)}
    {...props} />)
CartItemName.displayName = 'CartItemName'


const CartItemSubtotal = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(({ className, ...props }, ref) => <span
    ref={ref} className={cn(fontMono.className, className)} {...props} />)
CartItemSubtotal.displayName = 'CartItemSubtotal'

const CartItemRemove = React.forwardRef<ButtonProps, React.HTMLAttributes<HTMLButtonElement>>(({ className, ...props }) =>
    <Button
    className={cn("h-fit w-fit", className)} 
    size="icon" 
    variant="ghost"
    {...props}>
        <X className="w-4 h-4" />
    </Button>)
CartItemRemove.displayName = 'CartItemRemove'

export { CartItem, CartItemRemove, CartItemImage, CartItemContent, CartItemName, CartItemSubtotal }