import { cn } from "@/lib/utils";

import { small } from "@/app/fonts";

interface Props {
  beforeTextTitle?: string;
  accentTextTitle?: string;
  afterTextTitle?: string;
  smallText?: string;
  containerClassName?: string;
}

export function MegaTitle(props: Props) {
  return (
    <div className={cn("text-center md:text-left", props.containerClassName)}>
      <small
        className={cn(
          small.className,
          "text-inherit inline-block mb-2 text-base"
        )}
      >
        {props.smallText}
      </small>

      <h2 className="text-inherit text-2xl md:text-4xl font-bold">
        {props.beforeTextTitle}
        {props.accentTextTitle && (
          <span className="bg-accent text-white px-1 mx-1">
            {props.accentTextTitle}
          </span>
        )}

        {props.afterTextTitle}
      </h2>
    </div>
  );
}
