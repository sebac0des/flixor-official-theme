'use client'

// Cart State
import useCartStore from "@/store/cart";

// Components
import { Button, ButtonProps } from "@/components/shadcn/button";

// Icons
import { ShoppingCart, LucideProps } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

// Types
import { Product } from '@/types/product';
import { useToast } from "../shadcn/use-toast";


interface AddToCartButtonProps extends ButtonProps {
  cartItem: Product
};

const AddToCartButton = ({children,className,cartItem, ...props}:AddToCartButtonProps)=>{
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
  onClick={()=> handleAddToCart(cartItem)} 
  className={cn(className)} 
  {...props}
  >
  {children}
</Button>
}

const AddToCartButtonText = ({children,className, ...props}: React.HTMLAttributes<HTMLSpanElement>)=> 
<span className={className} {...props}>{children}</span>

const AddToCartButtonIcon = ({className,...props}:LucideProps)=> <ShoppingCart className={className} {...props}/>

export {AddToCartButton,AddToCartButtonText,AddToCartButtonIcon}