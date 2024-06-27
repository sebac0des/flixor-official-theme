import Image from "next/image";

// Components
import Wrapper from "@/components/ui/wrapper";
import { SimpleTitle } from "@/components/ui/simple-title";

interface Props {
  sectionSmallText: string;
  sectionTitle: string;
  data: AudienceItem[];
}

interface AudienceItem {
  id: number;
  iconImageUrl: string;
  title: string;
  desc: string;
}

export function TargetAudience({
  sectionTitle,
  sectionSmallText,
  data,
}: Props) {
  return (
    <Wrapper container="stretch" className="flex flex-col">
      <SimpleTitle
      containerClassName="text-left mb-10 xl:mb-20"
        smallText={sectionSmallText}
        titleText={sectionTitle}
      />

      <ul className="grid md:grid-cols-2 gap-10 xl:gap-5">
        {data.map((item) => (
          <li
            key={item.id}
            className="flex flex-col items-center text-center md:p-10"
          >
            <Image
              className="object-fit w-16 h-16 mb-4"
              alt={item.title}
              src={item.iconImageUrl}
              width={600}
              height={600}
            />
            <h4 className="text-primary font-semibold">{item.title}</h4>
            <p className="text-sm font-light">{item.desc}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
