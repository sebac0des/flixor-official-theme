import * as React from "react";

// Fonts
import { fontMono } from "@/app/fonts";

// Next js
import Link, {LinkProps} from "next/link";

// Utils
import { cn } from "@/lib/utils";


// Types
interface MessageBoxProps {
  children: React.ReactNode;
  className?: string;
}

interface MessageBoxLinkProps extends LinkProps, MessageBoxProps  {}

const MessageBox = ({ className,children,...props }: MessageBoxProps) => (
  <div
    className={cn(
      "bg-soft text-center rounded-lg xl:min-h-96 py-20 place-content-center",
      className
    )}
    {...props}
  >
    {children}
  </div>
);


const MessageBoxSmallMessage = ({ children, ...props }:MessageBoxProps) => (
  <span
    className={cn(fontMono.className, "text-sm xl:text-base")}
    {...props}
  >
    {children}
  </span>
);

const MessageBoxTitle = ({ children, className,...props }:MessageBoxProps) => (
  <h4
  className={cn("text-xl xl:text-2xl font-regular mt-0.5", className)}
  {...props}
>
  {children}
</h4>
);


const MessageBoxLink = React.forwardRef<HTMLAnchorElement, MessageBoxLinkProps>(
  ({ href, className, children, ...props }) => (
    <Link
      {...props}
      className={cn("border-b border-primary", className)}
      href={href}
    >
      {children}
    </Link>
  )
);

export { MessageBox, MessageBoxSmallMessage, MessageBoxTitle, MessageBoxLink };
