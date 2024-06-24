// Fonts
import { fontMono } from "@/app/fonts";

// Components
import { Button } from "./button";

// Next js
import Link from "next/link";
import Image from "next/image";

interface Props {
    image:string
    smallText:string
    title:string
    buttonText:string
    buttonUrl:string
}

export function Card({title,buttonText,buttonUrl,image,smallText}:Props) {
  return <div className="rounded-md relative overflow-hidden">
      <Image
          width={1080}
          height={1080}
          alt={title}
          src={image}
          className="h-screen object-cover"
      />

      <Overlay/>

      <div className="absolute bottom-0 left-0 p-4 text-white">
          <span className={fontMono.className}>{smallText}</span>
          <h3 className="text-2xl font-medium tracking-wider">{title}</h3>
          <Button variant="secondary" className="mt-3">
              <Link href={buttonUrl}>{buttonText}</Link>
          </Button>
      </div>
  </div>
}

function Overlay(){
    return <div className="block bg-black/40 absolute top-0 left-0 w-full h-full"></div>
}