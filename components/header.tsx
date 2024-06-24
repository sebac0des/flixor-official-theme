// React
import {forwardRef} from "react";

// next js
import Link from "next/link";

// Components
import Logo from "./logo";

import { Button } from "./ui/button";

// Utils
import { cn } from "@/lib/utils";

// Icons
import { ShoppingBasket } from "lucide-react";
import { ShoppingCart } from "./ui/shopping-cart";

interface HeaderButtonProps {
  buttonText: string;
  buttonUrl: string;
  className?: string;
}

interface HeaderCartProps {
  className?:string
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

const HeaderCallToAction = forwardRef<
  HTMLButtonElement,
  HeaderButtonProps
>(({ className, ...props }, ref) => (
  <Button ref={ref} asChild>
    <Link href={props.buttonUrl}>{props.buttonText}</Link>
  </Button>
));
HeaderCallToAction.displayName = "HeaderCallToAction";

const HeaderCart = (props:HeaderCartProps)=> <ShoppingCart {...props}/>
HeaderCart.displayName = "HeaderCart";

const HeaderLogo = ()=> <Logo/>
HeaderLogo.displayName = "HeaderLogo";

export { Header, HeaderCallToAction, HeaderLogo, HeaderCart }

