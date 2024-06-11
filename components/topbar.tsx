// Fonts
import { inconsolata } from "@/app/fonts";

// Next
import Link from "next/link";

// Components
import { Button } from "./ui/button";

// Utils
import { cn } from "@/lib/utils";

interface Props {
  message: string;
  url?: string;
  className?:string
}

const Topbar = ({ message, url,className }: Props) => {
  return (
    <div
      className={cn(
        inconsolata.className,
        "bg-white border-b border-primary/20 py-2",
        className
      )}
    >
      <Button
        variant="ghost"
        asChild
        className="h-0 bg-transparent hover:bg-transparent hover:text-inherit text-xs xl:text-sm"
      >
        <Link href={url || ''}>{message}</Link>
      </Button>
    </div>
  );
};

export default Topbar;
