"use client";

// React
import React, { useEffect, useState } from "react";

// Components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "./avatar";
import { Button } from "./button";

// Next js
import Link from "next/link";

// Fonts
import { fontMono } from '@/app/fonts'

// Utils
import { cn } from "@/lib/utils";

interface ContactPopOverProps {
  children: React.ReactNode
  dispatchWindowTime?: number;
  image: string;
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
    <div className={cn('right-0 bottom-0 fixed z-50')}>
      <Popover open={open}>
        <PopoverTrigger onClick={() => setOpen(!open)} asChild>
          <Avatar className="w-24 h-24 hover:cursor-pointer shadow-black/30 shadow-xl">
            <AvatarImage src={image} alt="@shadcn" />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-80 -translate-x-2 -translate-y-2">
            {children}
        </PopoverContent>
      </Popover>
    </div>
  );
}

const ContactPopOverTitle = ({children}:{children:React.ReactNode}) => {
  return <h4 className="font-bold leading-none text-lg text-left mb-2">
    {children}
  </h4>
}

const ContactPopOverMessage = ({children}:{children:React.ReactNode}) => {
  return <p className={cn(fontMono.className, "text-primary text-sm w-full")}>
    {children}
  </p>
}

const ContactPopOverButton = ({children,href}:{children:React.ReactNode, href:string})=>{
  return  <Button
  variant="accent"
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

const ContactPopOverSmallMessage = ({children}:{children:React.ReactNode}) => {
  return <small className={cn(fontMono.className, 'block text-center text-xs mt-1 text-gray-400')}>
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