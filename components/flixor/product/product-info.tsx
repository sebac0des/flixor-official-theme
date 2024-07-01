// React
import { ReactNode } from 'react'

// Fonts
import { fontMono } from '@/app/fonts'

// Utils
import { cn } from '@/lib/utils'

interface Props {
    children?: ReactNode
    className?: string
}

function ProductInfo({ className, children }: Props) {
    return <div className={className}>
        {children}
    </div>
}

function ProductInfoTitle({children}:{children:ReactNode}){
    return <h2 className="text-2xl md:text-3xl font-medium">{children}</h2>
}

function ProductInfoPrice({children}:{children:ReactNode}){
    return <span className={cn("text-lg lg:text-xl", fontMono.className)}>${children}</span>
}

function ProductInfoDescription({children}:{children:ReactNode}){
    return <p className={cn(" mt-2.5 md:mt-5", fontMono.className)}>{children}</p> 
}

export {ProductInfo,ProductInfoTitle,ProductInfoPrice,ProductInfoDescription}