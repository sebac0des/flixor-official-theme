// Fonts
import { fontMono } from "@/app/fonts";

// Components
import { Button } from "@/components/shadcn/button";
import { Video } from "@/components/flixor/video";

// Next js
import Link from "next/link";
import Image from "next/image";

// Utils
import { cn } from "@/lib/utils";

// Types
import {ImageProps} from 'next/image'

type CardVideoProps = React.ComponentProps<typeof Video>;

interface CardButton extends React.ComponentProps<typeof Button> {
  buttonUrl:string
}


const Card = (props:React.HTMLAttributes<HTMLDivElement>) => (
    <div
      className={cn("rounded-md relative overflow-hidden",props.className)}
      
    >
      {props.children}
    </div>
  );

const CardContent = ({ className, children }:React.HTMLAttributes<HTMLDivElement>) => (
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

const CardSmallText = ({children, className}:React.HTMLAttributes<HTMLSpanElement>) => <span className={cn(fontMono.className,'text-sm md:text-base', className)}>{children}</span>
  
const CardTitle = ({children, className}:React.HTMLAttributes<HTMLHeadingElement>) => <h3 className={cn("text-2xl font-medium tracking-wider",className)}>{children}</h3>

const CardButton = ({children, className, buttonUrl}:CardButton) => 
<Button variant="secondary" className={className}>
    <Link href={buttonUrl}>{children}</Link>
</Button>

const CardOverlay = () => <div className="block bg-black/40 absolute top-0 left-0 w-full h-full"></div>


export {Card,CardContent,CardTitle,CardSmallText,CardButton,CardImage,CardVideo,CardOverlay}