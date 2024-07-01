"use client";
import { useRef, useState } from "react";

// Components
import { CarouselItem } from "@/components/shadcn/carousel";
import { Button } from "@/components/shadcn/button";

// Fonts
import { fontMono } from "@/app/fonts";

// Icons
import { Play } from "lucide-react";

// Types
import { VideoSliderItem } from "@/types";
import { cn } from "@/lib/utils";

export default function VideoItem(props: VideoSliderItem) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = (value: boolean) => {
    if (videoRef.current) {
      if (value === true) {
        videoRef.current.play();
        setIsPlaying(true);
      }

      if (value === false) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <CarouselItem className="relative md:basis-1/3 xl:basis-1/5 p-0 rounded-lg overflow-hidden">
      <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black w-full">
        <h4
          className={cn(
            fontMono.className,
            "text-white text-lg font-semibold"
          )}
        >
          {props.title}
        </h4>
      </div>

      {!isPlaying && (
        <Button
          onClick={() => handlePlay(true)}
          className="absolute lg:hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-14 h-14 bg-primary z-50 shadow-black/70 shadow-xl"
        >
          <Play
            className="fill-white w-8 h-8 translate-x-0.5"
            strokeWidth={0}
          />
        </Button>
      )}

      <video
        poster={props.posterUrl}
        onMouseEnter={() => handlePlay(true)}
        onMouseLeave={() => handlePlay(false)}
        onEnded={() => setIsPlaying(false)}
        ref={videoRef}
        src={props.videoUrl}
      ></video>
    </CarouselItem>
  );
}
