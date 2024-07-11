"use client";

// React
import React, { createContext, useContext,useEffect, Provider,useState } from "react";

// Radix ui
import {PopoverTriggerProps, PopoverProps,PopoverContentProps} from "@radix-ui/react-popover"

// Components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";

// Fonts
import { fontMono } from '@/app/fonts'

// Utils
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface FloatingPopOver extends PopoverProps {
  openDelayTime?:number
}

interface FloatingPopOverTrigger extends PopoverTriggerProps,VariantProps<typeof floatingPopOverVariants>{
}

interface FloatingPopOverContext {
  open:boolean
  setOpen:(value:boolean)=>void
}

// Floating pop over variants
const floatingPopOverVariants = cva(
  "bg-red-500",
  {
    variants: {
      position: {
        right:
          "fixed bottom-0 right-0 z-50",
        left: "bottom-0 left-0",
      },
    },
    defaultVariants: {
      position: "right",
    },
  }
);

function FloatingPopOver({
  openDelayTime = 0,
  children,
  ...props
}: FloatingPopOver) {

  const [open,setOpen] = useState(false)

  useEffect(() => {
    if(openDelayTime > 0){
      const autoOpen = setTimeout(() => setOpen(true), openDelayTime);
      return () => clearTimeout(autoOpen);
    }    
  }, [openDelayTime]);

  return <FloatingPopOverContext.Provider value={{open,setOpen}}>
    <Popover open={open} {...props}>
        {children}
      </Popover>
  </FloatingPopOverContext.Provider>
}

const FloatingPopOverTrigger = ({children, className, position = 'right',...props}:FloatingPopOverTrigger)=>{
  
  const {open,setOpen} = useFloatingPopOver()
  
  return <PopoverTrigger
  onClick={()=>setOpen(!open)} 
  className={cn(cva(floatingPopOverVariants({className,position})))}
  asChild
  {...props}>
    {children}
  </PopoverTrigger>
}

const FloatingPopOverContent = ({children, className,...props}:PopoverContentProps)=>{
  return <PopoverContent  
  className={className}
  {...props}
  >
  {children}
</PopoverContent>
}

const FloatingPopOverContext = createContext<FloatingPopOverContext>({
  open:false,
  setOpen:()=> console.warn('Floating pop over context not initialized')
})
const useFloatingPopOver = () => useContext(FloatingPopOverContext)

// <Avatar className="w-24 h-24 hover:cursor-pointer shadow-black/30 shadow-xl">
//       <AvatarImage src={image} alt="@shadcn" />
//     </Avatar>

// const ContactPopOverTitle = ({children, ...props}:React.HTMLAttributes<HTMLHeadingElement>) => {
//   return <h4 className="font-bold leading-none text-lg text-left mb-2" {...props}>
//     {children}
//   </h4>
// }

// const ContactPopOverMessage = ({children, ...props}:React.HTMLAttributes<HTMLParagraphElement>) => {
//   return <p className={cn(fontMono.className, "text-primary text-sm w-full")} {...props}>
//     {children}
//   </p>
// }

// const ContactPopOverButton = ({children,href}:{children:React.ReactNode, href:string})=>{
//   return  <Button
//   variant="default"
//   asChild
//   className="w-full rounded-none mt-4 mb-1.5"
//   size="icon"
// >
//   <Link href={href}>
//     {children}
//     <i className="fi fi-brands-whatsapp ml-2 translate-y-0.5 text-lg"></i>
//   </Link>
// </Button>
// }

// const ContactPopOverSmallMessage = ({children,...props}:React.HTMLAttributes<HTMLElement>) => {
//   return <small className={cn(fontMono.className, 'block text-center text-xs mt-1 text-gray-400')} {...props}>
//   {children}
// </small>
// }



export {
  FloatingPopOver,
  FloatingPopOverTrigger,FloatingPopOverContent
}