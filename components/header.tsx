// React and next js
import React from 'react'

// Utilities
import { cn } from "@/lib/utils";

// Components
import Logo from "@/components/logo";
import { ShoppingCart } from '@/components/flixor/shopping-cart';


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
    <HeaderContent/>
  </header>
);

const HeaderContent = () => (
  <div
    className={cn(
      "flex items-center gap-3",
    )}
  >
    <ShoppingCart/>
  </div>
);



export { Header, HeaderContent }
