import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn/carousel";
import { SectionHeading, SectionHeadingSmall, SectionHeadingTitle } from "@/components/flixor/section-heading";

// Fonts
import { fontMono } from "@/app/fonts";

// Icons
import { Star } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

// Types
import { Testimonial } from "@/types";


const Testimonials = ({ data }: { data: Testimonial[] }) => {
  return (
    <div className="text-primary bg-[#fbfbfb]">
      <SectionHeading className="mb-2.5 lg:mb-5 text-left">
        <SectionHeadingSmall>Resultados reales</SectionHeadingSmall>
        <SectionHeadingTitle>Más de 20 años distribuyendo productos a profesionales de estética ✌️</SectionHeadingTitle>
      </SectionHeading>


      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="gap-3 mt-4 ">
          {data.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                className="md:basis-2/5 flex flex-col justify-between min-h-80 border border-primary/20 bg-white p-10 rounded-md relative items-center"
              >
                {/* <Image
                  className="rounded-full object-cover"
                  alt=""
                  src={item.image}
                  width={60}
                  height={60}
                /> */}
                <div>
                  <ul className="flex justify-center w-full">
                    <li>
                      <div className="flex justify-center mb-2">
                        <Stars />
                      </div>
                      <span className="font-bold text-sm block">
                        Opinion en {item.reviewFont}
                      </span>
                    </li>
                  </ul>
                </div>
                <p
                  className={cn(
                    fontMono.className,
                    "text-primary text-center"
                  )}
                >
                  {item.content}
                </p>

                <h4 className={cn(fontMono.className, "text-center")}>
                  - {item.name}
                </h4>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

function Stars() {
  return Array.from({ length: 5 }).map((_, index) => (
    <Star key={index} className="w-4 h-4 fill-primary" strokeWidth={0} />
  ));
}

export default Testimonials;
