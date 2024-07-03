'use client'

// Cart store
import useCartStore from '@/zustand/cart'

// Utilities
import { cn } from "@/lib/utils";

// Components
import Logo from "@/components/logo";
import { ShoppingCart, ShoppingCartHeader, ShoppingCartItems, ShoppingCartFooter } from '@/components/flixor/shopping-cart';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {

  const {cartTotal,items} = useCartStore()

  return <header
    className={cn(
      "bg-white p-4 flex justify-between items-center",
      className
    )}
  >
    <Logo />
    <ShoppingCart cartItems={items.length}>
      <ShoppingCartHeader />
      <ShoppingCartItems />
      <ShoppingCartFooter
        cartSubTotal={cartTotal}
        cartTotalItems={5} />
    </ShoppingCart>
  </header>
  
}





export default Header
