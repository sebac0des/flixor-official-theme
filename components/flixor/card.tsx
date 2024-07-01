// React
import {ReactNode} from "react";

// Fonts
import { fontMono } from "@/app/fonts";

// Components
import { Button } from "../shadcn/button";
import { Video } from "./video";

// Next js
import Link from "next/link";
import Image from "next/image";

// Utils
import { cn } from "@/lib/utils";

// Types
import {ImageProps} from 'next/image'


interface CardProps {
  children:ReactNode
  className?:string
}

type CardVideoProps = React.ComponentProps<typeof Video>;

interface CardButtonProps extends CardProps {
    buttonUrl:string
  }

interface CardImageProps extends CardProps {
    image:string
    alt:string
  }


const Card = (props:CardProps) => (
    <div
      className={cn("rounded-md relative overflow-hidden",props.className)}
      
    >
      {props.children}
    </div>
  );

const CardContent = ({ className, children }:CardProps) => (
    <div
      className={cn("absolute bottom-0 left-0 p-4 text-white", className)}
    >
      {children}
    </div>
  );

const CardImage = ({...props}:ImageProps) => 
<Image
width={1080}
height={1080}
  {...props}
/>

const CardVideo = ({...props}:CardVideoProps) => <Video {...props}/>


const CardSmallText = ({children, className}:CardProps) => <span className={cn(fontMono.className,'text-sm md:text-base', className)}>{children}</span>
  
const CardTitle = ({children, className}:CardProps) => <h3 className={cn("text-2xl font-medium tracking-wider",className)}>{children}</h3>

const CardButton = ({className,buttonUrl,children}:CardButtonProps) => <Button variant="secondary" className={className}>
    <Link href={buttonUrl}>{children}</Link>
</Button>

function CardOverlay(){
    return <div className="block bg-black/40 absolute top-0 left-0 w-full h-full"></div>
}

export {Card,CardContent,CardTitle,CardSmallText,CardButton,CardImage,CardVideo,CardOverlay}