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
      "rounded-lg border border-soft",
      className
    )}
    {...props}
  />
))
ProductCard.displayName = "ProductCard"

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
ProductCardImage.displayName = "ProductCardImage"

const ProductCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-5", className)}
    {...props}
  />
))
ProductCardHeader.displayName = "ProductCardHeader"

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
ProductCardTitle.displayName = "ProductCardTitle"

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
ProductCardDescription.displayName = "ProductCardDescription"


const ProductCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
ProductCardContent.displayName = "ProductCardContent"

const ProductCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-5 pt-0", className)}
    {...props}
  />
))
ProductCardFooter.displayName = "ProductCardFooter"

export { ProductCard, ProductCardHeader, ProductCardFooter, ProductCardTitle, ProductCardDescription, ProductCardContent, ProductCardImage }
