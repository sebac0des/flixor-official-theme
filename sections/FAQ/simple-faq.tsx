// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SimpleTitle } from "@/components/ui/simple-title";
import Wrapper from "@/components/ui/wrapper";

// Types
import { QuestionItem } from "@/types";

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
    <Wrapper container="stretch" className="flex flex-col gap-6">
      <SimpleTitle smallText={sectionSmallText} titleText={sectionTitle} containerClassName="mb-10 text-left" />
      
      <Accordion type="single" collapsible className="w-full flex flex-col gap-3">
        {data.map((item) => (
          <AccordionItem key={item.id} value={item.title}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent className="text-zinc-900/80 font-normal ">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Wrapper>
  );
}
