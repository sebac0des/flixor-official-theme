// Next js
import Link from 'next/link'

// Fonts
import { fontMono } from '@/app/fonts'

// Utils
import { cn } from '@/lib/utils'




function Benefit({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={className}>
        {children}
    </div>
}

function BenefitItem({children,className}:React.HTMLAttributes<HTMLDivElement>){
    return <div className={cn("border-b border-soft pb-2",className)}>{children}</div>
}

function BenefitTitle({children}:React.HTMLAttributes<HTMLHeadingElement>){
    return <h4 className={cn(fontMono.className,"text-sm font-bold")}>{children}</h4>
}

function BenefitContent({children}:React.HTMLAttributes<HTMLDivElement>){
    return <div className=''>{children}</div> 
}

function BenefitDescription({children}:React.HTMLAttributes<HTMLParagraphElement>){
    return <p className={cn("text-xs", fontMono.className)}>{children}</p> 
}

function BenefitLink({children}:React.HTMLAttributes<HTMLAnchorElement>){
    return <Link href="#" className={cn("text-xs underline", fontMono.className)}>{children}</Link> 
}

export {Benefit,BenefitItem,BenefitTitle,BenefitDescription,BenefitLink, BenefitContent}