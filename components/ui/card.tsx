// Fonts
import { small } from "@/app/fonts";

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
  return <div className="relative">
      <Image
          width={1080}
          height={1080}
          alt={title}
          src={image}
          className="rounded-md h-screen object-cover"
      />

      <div className="absolute bottom-0 left-0 p-4 text-white">
          <span className={small.className}>{smallText}</span>
          <h3 className="text-2xl font-medium tracking-wider">{title}</h3>
          <Button variant="secondary" className="mt-3">
              <Link href={buttonUrl}>{buttonText}</Link>
          </Button>
      </div>
  </div>
}

