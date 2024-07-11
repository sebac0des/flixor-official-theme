import { cn } from "@/lib/utils";
import { cva,VariantProps } from "class-variance-authority";
import React from "react";

export interface ContainerProps extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const containerVariants = cva(
  "m-auto",
  {
    variants: {
      variant: {
        default:''
      },
      align: {
        "1": "max-w-md",
        "2": "max-w-2xl",
        "3": "max-w-4xl",
        "4": "max-w-6xl",
      },
      size: {
        "1": "max-w-md",
        "2": "max-w-2xl",
        "3": "max-w-4xl",
        "4": "max-w-6xl",
      },
    },
    defaultVariants: {
      variant: "default",
      align:'1',
      size: "4",
    },
  }
);

const Container = ({ size,variant,children, className }: ContainerProps) => {
  return (
    <div className={cn(containerVariants({size,variant}),className)}>
      {children}
    </div>
  );
};

export default Container;
