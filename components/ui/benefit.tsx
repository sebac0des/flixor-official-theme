// React
import { ReactNode } from 'react'

// Fonts
import { fontMono } from '@/app/fonts'

// Utils
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Props {
    children?: ReactNode
    className?: string
}

function Benefit({ className, children }: Props) {
    return <div className={cn("border-b border-soft pb-2",className)}>
        {children}
    </div>
}

function BenefitItem({children,...props}:Props){
    return <div {...props}>{children}</div>
}

function BenefitTitle({children}:{children:ReactNode}){
    return <h4 className={cn(fontMono.className,"text-sm font-bold")}>{children}</h4>
}

function BenefitDescription({children}:{children:ReactNode}){
    return <p className={cn("text-xs", fontMono.className)}>{children}</p> 
}

function BenefitLink({children}:Props){
    return <Link href="#" className={cn("text-xs underline", fontMono.className)}>{children}</Link> 
}

export {Benefit,BenefitItem,BenefitTitle,BenefitDescription,BenefitLink}