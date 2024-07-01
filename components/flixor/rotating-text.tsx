"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface Props {
  text: string;
  animated: string[];
}

export function RotatingText({ text, animated }: Props) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: animated,
      typeSpeed: 35,
      backSpeed: 15,
      loop: true,
    });

    return () => typed.destroy();
  }, [animated]);

  return (
    <h2 className="text-3xl lg:text-4xl whitespace-pre-line">
      {text}
      <span
        className="font-bold bg-white text-black px-1 inline-block"
        ref={el}
      />
    </h2>
  );
}
