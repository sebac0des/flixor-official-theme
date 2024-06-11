import { Button } from "./ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button
      asChild
      className="p-0 bg-transparent h-0 text-primary font-bold text-2xl tracking-tighter"
    >
      <Link href="/">Jalf</Link>
    </Button>
  );
};

export default Logo;
