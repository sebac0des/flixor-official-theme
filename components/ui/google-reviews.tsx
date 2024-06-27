import Link from "next/link";
import Image from "next/image";

// Fonts
import { fontMono } from "@/app/fonts";

// Components
import { Button } from "./button";

// Icons
import { Star } from "lucide-react";

export default function GoogleReviews() {
  return (
    <Button
      asChild
      className="p-0 flex justify-star gap-2 items-center bg-transparent hover:bg-transparent"
    >
      <Link target="_blank" href="https://bit.ly/480XRdq">
        <ul className="flex gap-0.5 text-xs">
          <li>
            <Star className="w-4 h-4 fill-yellow-500" strokeWidth={0} />
          </li>
          <li>
            <Star className="w-4 h-4 fill-yellow-500" strokeWidth={0} />
          </li>
          <li>
            <Star className="w-4 h-4 fill-yellow-500" strokeWidth={0} />
          </li>
          <li>
            <Star className="w-4 h-4 fill-yellow-500" strokeWidth={0} />
          </li>
          <li>
            <Star className="w-4 h-4 fill-yellow-500" strokeWidth={0} />
          </li>
        </ul>
        <div className="bg-white rounded-full p-1 w-5 h-5">
          <Image width={15} height={15} alt="" src="/icons/google.webp" />
        </div>
        <span className={fontMono.className}>
          5 estrellas en Google Maps
        </span>
      </Link>
    </Button>
  );
}
