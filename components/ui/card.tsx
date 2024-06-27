// React
import {ReactNode} from "react";

// Fonts
import { fontMono } from "@/app/fonts";

// Components
import { Button } from "./button";
import { Video } from "./video";

// Next js
import Link from "next/link";
import Image from "next/image";

// Utils
import { cn } from "@/lib/utils";

// Types
import {ImageProps} from 'next/image'


interface CardButtonProps {
    children: ReactNode;
    buttonUrl:string
    className?: string;
  }

  interface CardImageProps {
    className?:string
    image:string
    alt:string
  }


const Card = (props:{children:ReactNode,className?:string}) => (
    <div
      className={cn("rounded-md relative overflow-hidden",props.className)}
      
    >
      {props.children}
    </div>
  );

const CardContent = ({ ...props }) => (
    <div
      className="absolute bottom-0 left-0 p-4 text-white"
      {...props}
    >
      {props.children}
    </div>
  );

const CardImage = ({...props}:ImageProps) => 
<Image
width={1080}
height={1080}
  {...props}
/>

const CardVideo = ({...props}:React.VideoHTMLAttributes<HTMLVideoElement>) => <Video {...props}/>

const CardSmallText = ({children}:{children:ReactNode}) => <span className={fontMono.className}>{children}</span>
  
const CardTitle = ({children}:{children:ReactNode}) => <h3 className="text-2xl font-medium tracking-wider">{children}</h3>

const CardButton = ({className,buttonUrl,children}:CardButtonProps) => <Button variant="secondary" className={className}>
    <Link href={buttonUrl}>{children}</Link>
</Button>

function CardOverlay(){
    return <div className="block bg-black/40 absolute top-0 left-0 w-full h-full"></div>
}

export {Card,CardContent,CardTitle,CardSmallText,CardButton,CardImage,CardVideo,CardOverlay}