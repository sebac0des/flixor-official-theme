"use client";
import { useState } from "react";

// Components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";
import { Avatar, AvatarImage } from "../shadcn/avatar";
import { Button } from "../shadcn/button";
import Link from "next/link";
import { X } from "lucide-react";

export default function ActionVideo(props: ActionVideoProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open}>
      <Thumbnail open={open} setOpen={setOpen} thumbnail={props.thumbnail} />
      <Video
        open={open}
        setOpen={setOpen}
        buttonDispatchTime={props.buttonDispatchTime}
        buttonText={props.buttonText}
        buttonLink={props.buttonLink}
        videoUrl={props.videoUrl}
        indications={props.indications}
      />
    </Popover>
  );
}

function Thumbnail({
  thumbnail,
  open,
  setOpen,
}: ThumbnailProps & TriggerProps) {
  return (
    <PopoverTrigger
      className="fixed bottom-2 right-2 z-50"
      onClick={() => setOpen(!open)}
      asChild
    >
      <Avatar className="w-24 h-24 shadow-black shadow-2xl hover:cursor-pointer">
        <AvatarImage src={thumbnail} alt="@shadcn" />
      </Avatar>
    </PopoverTrigger>
  );
}

function Video(props: VideoProps & TriggerProps) {
  const [loading, setLoading] = useState(true);

  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeUpdate = (
    event: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => setCurrentTime((event.target as HTMLVideoElement).currentTime);

  return (
    <PopoverContent
      sideOffset={-90}
      className="w-80 p-0 border-none
  shadow-black shadow-xl rounded-xl relative -translate-x-1 min-h-[568px]"
    >
      {loading && <Loading />}

      <Button
        onClick={() => props.setOpen(false)}
        size="icon"
        className="absolute right-0 -translate-y-4 bg-black rounded-full p-2 z-50 shadow-black shadow-xl scale-75"
      >
        <X className="w-6 h-6 text-white" />
      </Button>

      <video
        onLoadedData={() => setLoading(false)}
        autoPlay
        playsInline
        onTimeUpdate={handleTimeUpdate}
        preload="auto"
        className="rounded-xl z-50 w-full h-full"
        src={props.videoUrl}
      ></video>

      <span className="absolute bottom-0 left-0 w-full bg-accent text-white py-2 px-4 opacity-90 block text-center rounded-b-xl text-sm">
        {props.indications}
      </span>

      {currentTime >= props.buttonDispatchTime && (
        <Button
          asChild
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 shadow-black/80 shadow-xl text-lg py-8 font-semibold tracking-wider rounded-xl animate-in slide-in-from-bottom-10 slide-in-from-left-1/2 duration-300"
        >
          <Link target="_blank" href={props.buttonLink}>
            {props.buttonText}
          </Link>
        </Button>
      )}
    </PopoverContent>
  );
}

function Loading() {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white z-50 rounded-t-xl rounded-b-xl flex flex-col justify-center items-center">
      <i className="fi fi-rs-camera-movie text-3xl animate-bounce"></i>
    </div>
  );
}

interface ActionVideoProps extends VideoProps, ThumbnailProps {}

interface VideoProps {
  videoUrl: string;
  indications: string;
  buttonDispatchTime: number;
  buttonText: string;
  buttonLink: string;
}

interface ThumbnailProps {
  thumbnail: string;
}

interface TriggerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}
