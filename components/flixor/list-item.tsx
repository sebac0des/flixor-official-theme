import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ListProps {
    children:ReactNode
    className?: string;
}

const ListItem = ({ className, children, ...props }:ListProps) => (
  <li className={cn("flex items-start justify-between px-4 py-3 bg-white border-b border-soft rounded-md", className)} {...props}>
    {children}
  </li>
);

const ListItemTitle = ({ className, children, ...props }:ListProps) => (
  <h6 className={cn("text-sm ", className)} {...props}>
    {children}
  </h6>
);

const ListItemSmall = ({ className, children, ...props }:ListProps) => (
  <small className={cn("text-xs block mt-2", className)} {...props}>
    {children}
  </small>
);

const ListItemContent = ({ className, children, ...props }:ListProps) => (
  <div className={cn(className)} {...props}>
    {children}
  </div>
);

export { ListItem, ListItemTitle, ListItemSmall, ListItemContent };