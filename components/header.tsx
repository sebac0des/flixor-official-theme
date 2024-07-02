// React and next js
import React from 'react'

// Utilities
import { cn } from "@/lib/utils";

// Components
import Logo from "@/components/logo";
import ShoppingCart from '@/components/flixor/shopping-cart';


interface HeaderProps {
  className?: string;
}

const Header = ({ className}:HeaderProps) => (
  <header
    className={cn(
      "bg-white p-4 flex justify-between items-center",
      className
    )}
  >
    <Logo/>
    <ShoppingCart cartItems={5}/>
  </header>
);





export default Header
