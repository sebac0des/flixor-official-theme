import React from "react";

// Fonts
import { fontMono } from "@/app/fonts";

// Utils
import { cn } from "@/lib/utils";



const SectionHeading = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=><div 
ref={ref} 
className={className} 
{...props}/>)
SectionHeading.displayName = 'SectionHeading'

const SectionHeadingTitle = React.forwardRef<HTMLHeadingElement,React.HTMLAttributes<HTMLHeadingElement>>(({className,...props},ref)=><h2 
ref={ref} 
className={cn("text-2xl md:text-4xl font-semibold",className)}
{...props}/>)
SectionHeadingTitle.displayName = 'SectionHeadingTitle'

const SectionHeadingDescription = React.forwardRef<HTMLParagraphElement,React.HTMLAttributes<HTMLParagraphElement>>(({className,...props},ref)=><p 
ref={ref} 
className={cn(fontMono.className,className)}
{...props}/>)
SectionHeadingDescription.displayName = 'SectionHeadingDescription'


const SectionHeadingSmall = React.forwardRef<HTMLElement,React.HTMLAttributes<HTMLElement>>(({className,...props},ref)=><small 
ref={ref} 
className={cn(fontMono.className,"text-inherit inline-block text-base",className)}
{...props}/>
)
SectionHeadingSmall.displayName = 'SectionHeadingSmall'

export {
  SectionHeading,
  SectionHeadingTitle,
  SectionHeadingDescription,
  SectionHeadingSmall
}




