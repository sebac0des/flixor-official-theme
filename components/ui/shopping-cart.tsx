'use client'

// Components
import { Button } from "./button";

// Icons
import { ShoppingBasket } from "lucide-react";

interface HeaderCartProps {
  className?:string
}

export const ShoppingCart = (props:HeaderCartProps)=>{
  return  <Button className={props.className} size="icon" variant='ghost' >
  <ShoppingBasket/>
</Button>
}