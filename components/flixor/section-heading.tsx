// Fonts
import { fontMono } from "@/app/fonts";

// Utils
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  smallText?:string
  titleText: string;
  description?: string;
  containerClassName?: string;
}

const SectionHeading = ({children,className,...props}:React.HtmlHTMLAttributes<HTMLDivElement>)=>{
  return <div className={className} {...props}>{children}</div>
}

const SectionHeadingTitle = ({children,className,...props}:React.HtmlHTMLAttributes<HTMLHeadingElement>)=>{
  return <h2 className="text-2xl md:text-4xl font-semibold" {...props}>{children}</h2>
}

const SectionHeadingDescription = ({children,className,...props}:React.HtmlHTMLAttributes<HTMLParagraphElement>)=>{
  return <p className={fontMono.className} {...props}>{children}</p>
}

const SectionHeadingSmall = ({children,className,...props}:React.HtmlHTMLAttributes<HTMLElement>)=>{
  return <small 
  className={cn(fontMono.className,"text-inherit inline-block text-base")}
  {...props}
  >{children}</small>
}

export {
  SectionHeading,
  SectionHeadingTitle,
  SectionHeadingDescription,
  SectionHeadingSmall
}




