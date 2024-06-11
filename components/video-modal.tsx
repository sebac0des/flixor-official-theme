import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function VideoModal() {
  return (
    <Dialog>
      <div className="relative">
        <DialogTrigger className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full hover:bg-accent/20 transition ease-in-out delay-75 duration-200">
          <Button
            size="icon"
            className="bg-white rounded-full drop-shadow-lg w-24 h-24 hover:bg-white transition ease-in-out delay-75 duration-200 hover:scale-110 shadow-black/60 shadow-xl"
          >
            <i className="fi fi-ss-play text-black text-4xl translate-y-1"></i>
          </Button>
        </DialogTrigger>

        <Image
          alt=""
          className="w-full h-full"
          src="/images/how-to-order-on-homepage-portrait.webp"
          width={1000}
          height={1000}
        />
      </div>

      <DialogContent className="sm:max-w-[425px] bg-transparent border-none shadow-none ">
        <iframe
          src="https://fast.wistia.net/embed/iframe/jht2guqnjt?seo=true&videoFoam=false"
          title="How to create a quick order"
          allow="autoplay; fullscreen"
          className="w-full h-52 md:h-96 my-2"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}
