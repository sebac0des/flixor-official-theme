import { body } from "@/app/fonts";
import { cn } from "@/lib/utils";

interface Props {
  smallText?: string;
  title?: string;
  backgroundImage?: string;
  height: "small" | "medium" | "large";
}

const BANNER_HEIGHT = {
  small: "min-h-32",
  medium: "min-h-56",
  large: "min-h-96",
};

const Banner = (props: Props) => {
  return (
    <div
      className={cn(
        "px-2 text-center bg-black text-white place-content-center bg-cover bg-center",
        BANNER_HEIGHT[props.height],
        props.backgroundImage
      )}
    >
      <span className={body.className}>{props.smallText}</span>
      <h2 className="text-xl xl:text-2xl font-semibold">{props.title}</h2>
    </div>
  );
};

export default Banner;
