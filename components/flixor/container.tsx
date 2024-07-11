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
        left:'content-start',
        center:'place-content-center',
        right:'place-content-end'
      },
      size: {
        "1": "max-w-md",
        "2": "max-w-2xl",
        "3": "max-w-4xl",
        "4": "max-w-6xl",
        "5":'max-w-7xl'
      },
    },
    defaultVariants: {
      align:'center',
      variant: "default",
      size: "4",
    },
  }
);

const Container = ({ align,size,variant,children, className }: ContainerProps) => {
  return (
    <div className={cn(containerVariants({size,variant,align}),className)}>
      {children}
    </div>
  );
};

export default Container;
