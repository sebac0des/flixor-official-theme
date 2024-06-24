import {fontMono} from '@/app/fonts'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Footer(){
    return <footer className={cn(fontMono.className,"text-center text-xs px-2 py-4")}>Hecho con ❤️ por <Link className='underline font-semibold' href="https://github.com/sebac0des/">sebac0des</Link></footer>
}