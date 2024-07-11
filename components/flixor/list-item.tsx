import { cn } from "@/lib/utils";


const ListItem = ({ className, children, ...props }:React.HTMLAttributes<HTMLLIElement>) => (
  <li className={cn("flex items-start justify-between px-4 py-3 bg-white border-b border-soft rounded-md", className)} {...props}>
    {children}
  </li>
);

const ListItemTitle = ({ className, children, ...props }:React.HTMLAttributes<HTMLHeadingElement>) => (
  <h6 className={cn("text-sm ", className)} {...props}>
    {children}
  </h6>
);

const ListItemSmall = ({ className, children, ...props }:React.HTMLAttributes<HTMLElement>) => (
  <small className={cn("text-xs block mt-2", className)} {...props}>
    {children}
  </small>
);

const ListItemContent = ({ className, children, ...props }:React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(className)} {...props}>
    {children}
  </div>
);

export { ListItem, ListItemTitle, ListItemSmall, ListItemContent };