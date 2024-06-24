'use client'

// Shopping cart state management
import {useCart} from 'react-use-cart'

// Fonts
import {small} from '@/app/fonts'

// Components
import { Button } from "./button";

// Icons
import { ShoppingBasket } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";


interface HeaderCartProps {
  className?:string
}

export const ShoppingCart = (props:HeaderCartProps)=>{
  return <Button 
  className={cn("relative",props.className)} 
  size="icon" variant='ghost' >
    <ProuductIndicator/>
  <ShoppingBasket/>
</Button>
}

const ProuductIndicator = ()=>{

  const {items} = useCart()
  

  return <div className={cn(small.className,"absolute top-0 right-0 bg-soft h-5 w-5 rounded-full flex justify-center items-center text-inherit text-xs font-semibold")}>{items.length}</div>
}