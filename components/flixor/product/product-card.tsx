import * as React from "react"
import { cn } from "@/lib/utils"

import Image, { ImageProps } from 'next/image'

// Fonts
import { fontMono } from '@/app/fonts'

const ProductCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-soft bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
ProductCard.displayName = "Card"

const ProductCardImage = React.forwardRef<
  HTMLImageElement,
  ImageProps
>(({ className, ...props }, ref) => (
  <Image
    ref={ref}
    className={cn("object-cover h-96 rounded-t-md",className)}
    {...props}
  />
))
ProductCardImage.displayName = "CardImage"

const ProductCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
ProductCardHeader.displayName = "CardHeader"

const ProductCardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => <h3
  ref={ref}
  className={cn(
    fontMono.className,
    "text-xl mb-1",
    className
  )}
  {...props}
/>
)
ProductCardTitle.displayName = "CardTitle"

const ProductCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(fontMono.className, "text-sm text-muted-foreground", className)}
    {...props}
  />
))
ProductCardDescription.displayName = "CardDescription"


// DONT USED
const ProductCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
ProductCardContent.displayName = "CardContent"

const ProductCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
ProductCardFooter.displayName = "CardFooter"

export { ProductCard, ProductCardHeader, ProductCardFooter, ProductCardTitle, ProductCardDescription, ProductCardContent, ProductCardImage }
