// Fonts
import { fontMono } from "@/app/fonts";

// Components
import { Button } from "@/components/shadcn/button";
import { Video, VideoProps } from "@/components/flixor/video";

// Next js
import Link from "next/link";
import Image from "next/image";

// Utils
import { cn } from "@/lib/utils";

// Types
import {ImageProps} from 'next/image'
import React from "react";

type CardVideoProps = React.ComponentProps<typeof Video>;

interface CardButton extends React.ComponentProps<typeof Button> {
  buttonUrl:string
}

const Card = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=><div ref={ref} 
className={cn("rounded-md relative overflow-hidden",className)}
{...props}
/>)
Card.displayName = 'Card'

const CardImage = React.forwardRef<
  HTMLImageElement,
  ImageProps
>(({ className, ...props }, ref) => (
  <Image
    ref={ref}
    width={1080}
    height={1080}
    className={className}
    {...props}
  />
))
CardImage.displayName = "CardImage"

const CardContent = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=><div
ref={ref}
className={cn("absolute bottom-0 left-0 p-4 text-white",className)}
{...props}/>)
CardContent.displayName = 'CardContent'

const CardTitle = React.forwardRef<HTMLHeadingElement,React.HTMLAttributes<HTMLHeadingElement>>(({className,...props},ref)=><h3 ref={ref} className={cn("text-2xl font-medium tracking-wider",className)} {...props}/>)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLSpanElement,React.HTMLAttributes<HTMLSpanElement>>(({className,...props},ref)=> <span
ref={ref} 
className={cn(fontMono.className,'text-sm md:text-base',className)}
{...props}
/>) 
CardDescription.displayName = 'CardDescription'

const CardButton = React.forwardRef<React.HTMLAttributes<HTMLButtonElement>,CardButton>(({buttonUrl,className,children})=> <Button variant="secondary" className={className}>
  <Link href={buttonUrl}>{children}</Link>
</Button>)
CardButton.displayName = 'CardButton'


const CardOverlay = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=><div ref={ref}
className="block bg-black/40 absolute top-0 left-0 w-full h-full"
{...props}/>)
CardOverlay.displayName = 'CardOverlay'

const CardVideo = React.forwardRef<React.HTMLAttributes<HTMLVideoElement>,VideoProps>(({...props})=><Video {...props}/>)
CardVideo.displayName = 'CardVideo'

export {Card,CardContent,CardTitle,CardDescription,CardButton,CardImage,CardVideo,CardOverlay}