"use client";

// React
import React, { createContext, useContext,useEffect,useState } from "react";

// Radix ui
import {PopoverTriggerProps, PopoverProps,PopoverContentProps} from "@radix-ui/react-popover"

// Components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";

// Utils
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";


// Types
interface FloatingPopOver extends PopoverProps {
  openDelayTime?:number
}

interface FloatingPopOverTrigger extends PopoverTriggerProps,VariantProps<typeof floatingPopOverVariants>{
}

interface FloatingPopOverContext {
  open:boolean
  setOpen:(value:boolean)=>void
}

const floatingPopOverVariants = cva(
  "fixed z-50",
  {
    variants: {
      position: {
        right:"bottom-0 right-0",
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
  className={cn(floatingPopOverVariants({position,className}))}
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






export {
  FloatingPopOver,
  FloatingPopOverTrigger,FloatingPopOverContent
}