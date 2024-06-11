import * as React from "react";

// Fonts
import { inconsolata } from "@/app/fonts";

// Next js
import Link from "next/link";

// Utils
import { cn } from "@/lib/utils";

// Components
import Wrapper from "./wrapper";

interface MessageBoxProps {
  children: React.ReactNode;
  className?: string;
}

const MessageBox = ({ className, children, ...props }: MessageBoxProps) => (
  <Wrapper
    className={cn(
      "bg-soft text-center rounded-lg xl:min-h-96 place-content-center",
      className
    )}
    container="stretch"
    {...props}
  >
    <div className="w-11/12 m-auto">{children}</div>
  </Wrapper>
);
MessageBox.displayName = "MessageBox";

interface MessageBoxSmallMessageProps {
  className?: string;
  children: React.ReactNode;
}

interface MessageBoxTitleProps {
  className?: string;
  children: React.ReactNode;
}

interface MessageBoxLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const MessageBoxSmallMessage = React.forwardRef<
  HTMLSpanElement,
  MessageBoxSmallMessageProps
>(({ children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(inconsolata.className, "text-sm xl:text-base")}
    {...props}
  >
    {children}
  </span>
));
MessageBoxSmallMessage.displayName = "MessageBoxSmallMessage";

const MessageBoxTitle = React.forwardRef<
  HTMLHeadingElement,
  MessageBoxTitleProps
>(({ className, children, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("text-xl xl:text-2xl font-regular mt-0.5", className)}
    {...props}
  >
    {children}
  </h4>
));
MessageBoxTitle.displayName = "MessageBoxTitle";

const MessageBoxLink = React.forwardRef<HTMLAnchorElement, MessageBoxLinkProps>(
  ({ href, className, children, ...props }, ref) => (
    <Link
      {...props}
      className={cn("border-b border-primary", className)}
      href={href}
      passHref
      ref={ref}
    >
      {children}
    </Link>
  )
);
MessageBoxLink.displayName = "MessageBoxLink";

export { MessageBox, MessageBoxSmallMessage, MessageBoxTitle, MessageBoxLink };
