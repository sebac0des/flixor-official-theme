// Next js
import Link, {LinkProps} from "next/link";

// Fonts
import { fontMono } from "@/app/fonts";

// Utils
import { cn } from "@/lib/utils";

// Types
interface MessageBoxLinkProps extends LinkProps, React.HTMLAttributes<HTMLAnchorElement> {}

const MessageBox = ({ className,children,...props }: React.HTMLAttributes<HTMLDivElement>) => (
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


const MessageBoxSmallMessage = ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(fontMono.className, "text-sm xl:text-base")}
    {...props}
  >
    {children}
  </span>
);

const MessageBoxTitle = ({ children, className,...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4
  className={cn("text-xl xl:text-2xl font-regular mt-0.5", className)}
  {...props}
>
  {children}
</h4>
);


const MessageBoxLink = (({ href, children, className,...props }: MessageBoxLinkProps) => (
    <Link
      className={cn("border-b border-primary", className)}
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
);

export { MessageBox, MessageBoxSmallMessage, MessageBoxTitle, MessageBoxLink };
