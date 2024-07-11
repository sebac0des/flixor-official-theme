// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/accordion";
import { SectionHeading, SectionHeadingSmall, SectionHeadingTitle } from "@/components/flixor/section-heading";

// Types
import { QuestionItem } from "@/types";

// Fonts
import {fontMono} from '@/app/fonts'
import { cn } from "@/lib/utils";

interface Props {
  sectionSmallText: string;
  sectionTitle: string;
  data: QuestionItem[];
}

export default function Questions({
  sectionSmallText,
  sectionTitle,
  data,
}: Props) {
  return (
    <div className="flex flex-col gap-6">

      <SectionHeading className="mb-10 text-left">
        <SectionHeadingSmall>{sectionSmallText}</SectionHeadingSmall>
        <SectionHeadingTitle>{sectionTitle}</SectionHeadingTitle>
      </SectionHeading>

     
      
      <Accordion type="single" collapsible className={cn(fontMono.className,"w-full flex flex-col gap-3")}>
        {data.map((item) => (
          <AccordionItem key={item.id} value={item.title}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent className="text-zinc-900/80 font-normal ">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
