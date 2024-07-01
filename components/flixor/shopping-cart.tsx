'use client'

// Fonts
import { fontMono } from '@/app/fonts'

// Components
import { Button } from "@/components/shadcn/button";

// Icons
import { ShoppingBasket } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

interface HeaderCartProps {
  className?: string
}

export const ShoppingCart = (props: HeaderCartProps) => {

  return <Button
    className={cn("relative", props.className)}
    size="icon" variant='ghost' >
    <ProuductIndicator />
   <ShoppingBasket />
  </Button>
}

const ProuductIndicator = () => {

  return <span className={cn(fontMono.className, "absolute top-0 right-0 bg-primary h-5 w-5 rounded-full flex justify-center items-center text-secondary text-xs font-semibold")}>0</span>

}