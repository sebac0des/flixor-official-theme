// Next js
import Link, {LinkProps} from "next/link";

// Fonts
import { fontMono } from "@/app/fonts";

// Utils
import { cn } from "@/lib/utils";
import React from "react";

// Types
interface MessageBoxLinkProps extends LinkProps, React.HTMLAttributes<HTMLAnchorElement> {
  className?:string
}

const MessageBox = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=> <div 
ref={ref}
className={cn('bg-soft text-center rounded-lg xl:min-h-96 py-20 place-content-center',className)}
{...props}
/>)
MessageBox.displayName = 'MessageBox'


const MessageBoxSmallMessage = React.forwardRef<HTMLSpanElement,React.HTMLAttributes<HTMLSpanElement>>(({className,...props})=> <span 
className={cn(fontMono.className, "text-sm xl:text-base")}
{...props}
/>)
MessageBox.displayName = 'MessageBoxSmallMessage'


const MessageBoxTitle = React.forwardRef<HTMLHeadingElement,React.HTMLAttributes<HTMLHeadingElement>>(({className,...props},ref)=><h4
ref={ref}
className={cn("text-xl xl:text-2xl font-regular mt-0.5", className)}
{...props}
/>)
MessageBoxTitle.displayName = 'MessageBoxTitle'

const MessageBoxLink = React.forwardRef<HTMLAnchorElement,MessageBoxLinkProps>(({href, className,...props})=> <Link
className={cn("border-b border-primary",className)}
href={href}
{...props}
/>)
MessageBoxLink.displayName = 'MessageBoxLink'

export { MessageBox, MessageBoxSmallMessage, MessageBoxTitle, MessageBoxLink };
