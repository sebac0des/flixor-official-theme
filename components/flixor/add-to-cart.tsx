'use client'

// Cart State
import useCartStore from "@/store/cart";

// Components
import { Button } from "@/components/shadcn/button";

// Icons
import { ShoppingCart, LucideProps } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

// Types
import { Product } from '@/types/product';


interface AddToCartButtonProps extends React.ComponentProps<typeof Button> {
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

const AddToCartButtonText = ({children,className, ...props}: React.HTMLAttributes<HTMLSpanElement>)=> 
<span className={className} {...props}>{children}</span>

const AddToCartButtonIcon = ({className,...props}:LucideProps)=> <ShoppingCart className={className} {...props}/>

export {AddToCartButton,AddToCartButtonText,AddToCartButtonIcon}