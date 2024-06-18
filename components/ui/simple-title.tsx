import { small } from "@/app/fonts";

interface Props {
  smallText: string;
  titleText: string;
  containerClassName?: string;
}

export function SimpleTitle(props: Props) {
  return (
    <div className={props.containerClassName}>
      <span className={small.className}>{props.smallText}</span>
      <h2 className="text-xl xl:text-2xl font-semibold">{props.titleText}</h2>
    </div>
  );
}
