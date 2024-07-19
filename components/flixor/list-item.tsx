import React from "react";

// Utils
import { cn } from "@/lib/utils";


const ListItem = React.forwardRef<HTMLLIElement,React.HTMLAttributes<HTMLLIElement>>(({className,...props},ref)=><li
ref={ref}
  className={cn("flex items-start justify-between px-4 py-3 bg-white border-b border-soft rounded-md",className)}
  {...props}
/>)
ListItem.displayName='ListItem'

const ListItemTitle = React.forwardRef<HTMLHeadingElement,React.HTMLAttributes<HTMLHeadingElement>>(({className,...props},ref)=><h6
ref={ref}
  className={cn("text-sm ",className)}
  {...props}
/>)
ListItemTitle.displayName='ListItemTitle'

const ListItemSmall = React.forwardRef<HTMLSpanElement,React.HTMLAttributes<HTMLSpanElement>>(({className,...props},ref)=><span
ref={ref}
  className={cn("text-xs block mt-2",className)}
  {...props}
/>)
ListItemSmall.displayName='ListItemSmall'

const ListItemContent = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=><div
ref={ref}
  className={cn(className)}
  {...props}
/>)
ListItemContent.displayName='ListItemContent'

export { ListItem, ListItemTitle, ListItemSmall, ListItemContent };