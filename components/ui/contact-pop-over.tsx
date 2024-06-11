"use client";

// React
import { useEffect, useState } from "react";

// Components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "./avatar";
import { Button } from "./button";

// Next js
import Link from "next/link";

// Fonts
import {inconsolata} from '@/app/fonts'
import { cn } from "@/lib/utils";

interface Props {
  dispatchWindowTime: number;
  image: string;
}

export default function ContactPopOver({
  image,
  dispatchWindowTime = 10000,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const autoOpen = setTimeout(() => setOpen(true), dispatchWindowTime);

    return () => clearTimeout(autoOpen);
  }, [dispatchWindowTime]);

  return (
    <div className="fixed right-1 bottom-1 z-50">
      <Popover open={open}>
        <PopoverTrigger onClick={() => setOpen(!open)} asChild>
          <Avatar className="w-24 h-24 hover:cursor-pointer shadow-black/30 shadow-xl">
            <AvatarImage src={image} alt="@shadcn" />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-80 -translate-x-2 -translate-y-2">
          <div className="grid gap-2">
            <div>
              <h4 className="font-bold leading-none text-lg text-left mb-2">
                ¿Tenes una pregunta? ¡Escríbínos!
              </h4>

              <p className={cn(inconsolata.className,"text-primary text-sm w-full")}>
                Estamos en línea listos para responder tus dudas en WhatsApp.
              </p>
            </div>

            <Button
              variant="accent"
              asChild
              className="w-full rounded-none mt-2"
              size="icon"
            >
              <Link href="https://api.whatsapp.com/send?phone=+5491130963298&text=Hola,%20mi%20nombre%20es%20....%20y%20tengo%20una%20duda!">
                Si, tengo preguntas
                <i className="fi fi-brands-whatsapp ml-2 translate-y-0.5 text-lg"></i>
              </Link>
            </Button>
            <small className={cn(inconsolata.className,'block text-center text-xs mt-1 text-gray-400')}>
              Se abre en WhatsApp
            </small>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
