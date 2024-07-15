// React
import React from 'react'

// Next js
import Link, { LinkProps } from 'next/link'

// Fonts
import { fontMono } from '@/app/fonts'

// Utils
import { cn } from '@/lib/utils'

const Benefit = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=> <div ref={ref} className={className} {...props}/>)
Benefit.displayName = 'Benefit'

const BenefitItem = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=> <div 
ref={ref}
className={cn("border-b border-soft pb-2",className)} 
{...props}/>)
BenefitItem.displayName = 'BenefitItem'


const BenefitTitle = React.forwardRef<HTMLHeadingElement,React.HTMLAttributes<HTMLHeadingElement>>(({className,...props},ref)=> <h4 ref={ref} className={cn(fontMono.className,"text-sm font-bold",className)} {...props}/>)
BenefitTitle.displayName = 'BenefitTitle'

const BenefitContent = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=> <div ref={ref} className={className} {...props}/>)
BenefitContent.displayName = 'BenefitContent'


const BenefitDescription = React.forwardRef<HTMLParagraphElement,React.HTMLAttributes<HTMLParagraphElement>>(({className,...props},ref)=> <p ref={ref} className={cn(fontMono.className,"text-xs",className)} {...props}/>)
BenefitDescription.displayName = 'BenefitDescription'

const BenefitLink = React.forwardRef<HTMLAnchorElement,LinkProps>(({href,...props},ref)=> 
<Link 
ref={ref}
href={href} 
className={cn("text-xs underline", fontMono.className)}
{...props}
/>)
BenefitLink.displayName = 'BenefitLink'

export {Benefit,BenefitItem,BenefitTitle,BenefitDescription,BenefitLink, BenefitContent}