// Utilities
import { cn } from "@/lib/utils";

// Components
import Logo from "@/components/logo";
import ShoppingCart from '@/components/shopping-cart';
import React from "react";



const Header = ({ className }: React.HTMLAttributes<HTMLElement>) => {

  return <header
    className={cn(
      "bg-white p-4 flex justify-between items-center",
      className
    )}
  >
    <Logo />
    <ShoppingCart />
  </header>
}





export default Header
