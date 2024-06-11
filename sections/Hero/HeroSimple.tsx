"use client";
// React
import { useEffect, useRef } from "react";

// Next js
import Link from "next/link";

// Components
import GoogleReviews from "@/components/ui/google-reviews";
import { Button } from "@/components/ui/button";

// Typed js
import Typed from "typed.js";

interface Props {
  title: string;
  beforeText: string;
  animatedText: string[];
  buttonText: string;
  buttonUrl: string;
}

export default function Hero({
  title,
  beforeText,
  animatedText,
  buttonText,
  buttonUrl,
}: Props) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: animatedText,
      typeSpeed: 85,
      backSpeed: 15,
      loop: true,
    });

    return () => typed.destroy();
  }, [animatedText]);

  return (
    <section className="bg-[url('/images/hero-section-background.webp')] bg-center bg-cover xl:min-h-screen px-6 py-20 xl:py-0 text-white flex flex-col items-start justify-center ">
      <h2 className="text-4xl xl:text-5xl font-semibold">{title}</h2>
      <p className="text-xl xl:text-2xl mt-4">
        {beforeText}
        <br />
        <span
          className="font-bold text-center bg-white text-black px-1 inline-block"
          ref={el}
        />
      </p>
      <Button variant="outline" asChild className="mt-8 mb-4" size="xl">
        <Link href={buttonUrl}>{buttonText}</Link>
      </Button>
      <GoogleReviews />
    </section>
  );
}
