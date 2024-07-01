import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
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
      <ProductCarouselIndicators/>
      <CarouselContent className="gap-3">
        {data.map((item) => (
          <CarouselItem {...item} key={item.id} />
        ))}
      </CarouselContent>

    </Carousel>
  );
}

function ProductCarouselIndicators() {
  return <div className="mb-3 flex gap-3">
      <CarouselPrevious className="static translate-y-0 translate-x-0 text-black scale-125 w-fit border-none" />
      <CarouselNext className="static translate-y-0 translate-x-0 text-black scale-125 w-fit border-none" />
  </div>
}