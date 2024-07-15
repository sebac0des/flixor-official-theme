'use client'

// React
import React, { ReactNode } from "react";

// Cart State
import useCartStore from "@/store/cart";

// Components
import { Button, ButtonProps } from "@/components/shadcn/button";
import { useToast } from "@/components/shadcn/use-toast";

// Icons
import { ShoppingCart, LucideProps } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

// Types
import { Product } from '@/types/product';


interface AddToCartButtonProps extends ButtonProps {
  cartItem: Product
};

const AddToCartButton = React.forwardRef<
  HTMLButtonElement,
  AddToCartButtonProps
>(({ className,cartItem, ...props }, ref) => {

  const {addItem} = useCartStore()
  const {toast} = useToast()

  const handleAddToCart = (cartItem:Product)=>{
    addItem(cartItem)
    toast({
      title:`Producto agregado al carrito`,
      description:`${cartItem.name} se agrego con exito al carrito`
    })
  }

  return <Button
  ref={ref}
  onClick={()=> handleAddToCart(cartItem)} 
  className={cn(
    "rounded-lg",
    className
  )}
  {...props}
/>
})
AddToCartButton.displayName = "AddToCartButton"

const AddToCartButtonText = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(({ className, ...props }, ref) => <span
  ref={ref}
  className={className}
  {...props}
/>
)
AddToCartButtonText.displayName = "AddToCartButtonText"

const AddToCartButtonIcon = React.forwardRef<ReactNode,LucideProps>(({className,...props})=> <ShoppingCart className={className} {...props}/>)
AddToCartButtonIcon.displayName = "AddToCartButtonText"


export {AddToCartButton,AddToCartButtonText,AddToCartButtonIcon}