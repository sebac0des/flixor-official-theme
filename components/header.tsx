// React and next js
import { forwardRef } from "react";
import Link from "next/link";

// Utilities
import { cn } from "@/lib/utils";

// Components
import Logo from "@/components/logo";
import { ShoppingCart } from "@/components/ui/shopping-cart";
import { Button } from "@/components/ui/button";


interface HeaderButtonProps {
  buttonText: string;
  buttonUrl: string;
  className?: string;
}

interface HeaderCartProps {
  className?:string
}

interface HeaderActionElementsProps {
  children: React.ReactNode;
  className?: string;
}

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ className, children, ...props }: HeaderProps) => (
  <header
    className={cn(
      "bg-white p-4 flex justify-between items-center",
      className
    )}
    {...props}
  >
    {children}
  </header>
);

const HeaderActionElements = ({ className, children, ...props }: HeaderActionElementsProps) => (
  <div
    className={cn(
      "flex items-center gap-3",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const HeaderButton = forwardRef<
  HTMLButtonElement,
  HeaderButtonProps
>(({ className, ...props }, ref) => (
  <Button className={ className} ref={ref} asChild>
    <Link href={props.buttonUrl}>{props.buttonText}</Link>
  </Button>
));

const HeaderCart = (props:HeaderCartProps)=> <ShoppingCart {...props}/>

const HeaderLogo = ()=> <Logo/>

export { Header, HeaderButton, HeaderLogo, HeaderCart, HeaderActionElements }
