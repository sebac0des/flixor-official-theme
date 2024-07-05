"use client";

// React
import React, { useEffect, useState } from "react";

// Components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";
import { Avatar, AvatarImage } from "@/components/shadcn/avatar";
import { Button } from "@/components/shadcn/button";

// Next js
import Link from "next/link";

// Fonts
import { fontMono } from '@/app/fonts'

// Utils
import { cn } from "@/lib/utils";

interface Popover extends React.ComponentProps<typeof Popover> {}

interface ContactPopOverProps {
  children: React.ReactNode
  image: string;
  dispatchWindowTime?: number;
}

export default function ContactPopOver({
  image,
  dispatchWindowTime = 0,
  children,
}: ContactPopOverProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(dispatchWindowTime > 0){
      const autoOpen = setTimeout(() => setOpen(true), dispatchWindowTime);
      return () => clearTimeout(autoOpen);
    }    
  }, [dispatchWindowTime]);

  return (
      <Popover open={open}>
        <PopoverTrigger className="right-0 bottom-0 fixed z-50"
        onClick={() => setOpen(!open)} asChild>
          <Avatar className="w-24 h-24 hover:cursor-pointer shadow-black/30 shadow-xl">
            <AvatarImage src={image} alt="@shadcn" />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent  className="w-80 -translate-x-2 -translate-y-2">
            {children}
        </PopoverContent>
      </Popover>
  );
}

const ContactPopOverTitle = ({children, ...props}:React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h4 className="font-bold leading-none text-lg text-left mb-2" {...props}>
    {children}
  </h4>
}

const ContactPopOverMessage = ({children, ...props}:React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn(fontMono.className, "text-primary text-sm w-full")} {...props}>
    {children}
  </p>
}

const ContactPopOverButton = ({children,href}:{children:React.ReactNode, href:string})=>{
  return  <Button
  variant="default"
  asChild
  className="w-full rounded-none mt-4 mb-1.5"
  size="icon"
>
  <Link href={href}>
    {children}
    <i className="fi fi-brands-whatsapp ml-2 translate-y-0.5 text-lg"></i>
  </Link>
</Button>
}

const ContactPopOverSmallMessage = ({children,...props}:React.HTMLAttributes<HTMLElement>) => {
  return <small className={cn(fontMono.className, 'block text-center text-xs mt-1 text-gray-400')} {...props}>
  {children}
</small>
}

export {
  ContactPopOver,
  ContactPopOverTitle,
  ContactPopOverMessage,
  ContactPopOverButton,
  ContactPopOverSmallMessage
}