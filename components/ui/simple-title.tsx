// Fonts
import { small } from "@/app/fonts";

// Utils
import { cn } from "@/lib/utils";

interface Props {
  smallText?:string
  titleText: string;
  description?: string;
  containerClassName?: string;
}

export function SimpleTitle(props: Props) {
  return (
    <div className={cn("text-center md:text-left",props.containerClassName)}>
      <small className={cn(small.className,"text-inherit inline-block mb-2 text-base")}>{props.smallText}</small>
      <h2 className="text-2xl md:text-4xl font-semibold">{props.titleText}</h2>
      <p className={small.className}>{props.description}</p>
    </div>
  );
}
