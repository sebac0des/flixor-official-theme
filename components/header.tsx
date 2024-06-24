// React
import {forwardRef} from "react";

// next js
import Link from "next/link";

// Components
import Logo from "@/components/logo";

import { ShoppingCart } from "@/components/ui/shopping-cart";
import { Button } from "@/components/ui/button";

// Utils
import { cn } from "@/lib/utils";

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
Header.displayName = "Header";

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
HeaderActionElements.displayName = "HeaderActionElements";

const HeaderButton = forwardRef<
  HTMLButtonElement,
  HeaderButtonProps
>(({ className, ...props }, ref) => (
  <Button className={ className} ref={ref} asChild>
    <Link href={props.buttonUrl}>{props.buttonText}</Link>
  </Button>
));
HeaderButton.displayName = "HeaderButton";

const HeaderCart = (props:HeaderCartProps)=> <ShoppingCart {...props}/>
HeaderCart.displayName = "HeaderCart";

const HeaderLogo = ()=> <Logo/>
HeaderLogo.displayName = "HeaderLogo";

export { Header, HeaderButton, HeaderLogo, HeaderCart, HeaderActionElements }

