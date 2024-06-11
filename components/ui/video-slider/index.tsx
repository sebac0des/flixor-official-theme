import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselItem from "./video-slider-item";
import { VideoSliderItem } from "../../../types";

interface Props {
  data: VideoSliderItem[];
}

export default function VideoSlider({ data }: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="gap-3">
        {data.map((item) => (
          <CarouselItem {...item} key={item.id} />
        ))}
      </CarouselContent>
      <CarouselNext
        variant="default"
        className="bg-primary absolute -translate-x-10 border-none scale-105 shadow-black shadow-xl"
      />
      <CarouselPrevious
        variant="default"
        className="bg-primary absolute translate-x-10 border-none scale-105 shadow-black shadow-xl"
      />
    </Carousel>
  );
}
