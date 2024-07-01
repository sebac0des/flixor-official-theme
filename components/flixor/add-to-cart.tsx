'use client'

// React
import { ReactNode } from 'react';

// Cart State
import useCartStore from "@/zustand/cart";

// Components
import { Button } from "@/components/shadcn/button";

// Icons
import { ShoppingCart } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

// Types
import { Product } from '@/types/product';


type AddToCartButtonProps = React.ComponentProps<typeof Button> & {
  cartItem: Product
};

const AddToCartButton = ({children,className, ...props}:AddToCartButtonProps)=>{
  const {addItem} = useCartStore()
  return <Button
  onClick={()=>addItem(props.cartItem)} 
  className={cn(className)} 
  {...props}
  >
  {children}
</Button>
}

const AddToCartButtonText = ({children,className}:{children:ReactNode,className?:string})=> 
<span className={className}>{children}</span>

const AddToCartButtonIcon = ({className}:{className?:string})=> <ShoppingCart className={className}/>

export {AddToCartButton,AddToCartButtonText,AddToCartButtonIcon}