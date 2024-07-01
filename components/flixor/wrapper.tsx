import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  container: "fullWidth" | "stretch" | "centered";
}

const CONTAINER = {
  fullWidth: "py-10",
  stretch: "w-11/12 m-auto py-10",
  centered: "w-11/12 m-auto",
};

const Wrapper = ({ children, className, container }: Props) => {
  return (
    <section className={cn(CONTAINER[container],className)}>
      {children}
    </section>
  );
};

export default Wrapper;