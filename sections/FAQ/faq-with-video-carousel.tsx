// Components
import { SectionHeading, SectionHeadingSmall, SectionHeadingTitle } from "@/components/flixor/section-heading";
import VideoCarousel from "@/components/flixor/video-carousel";

// Types
import { QuestionVideoItem } from "@/types";

interface Props {
  sectionSmallText: string;
  sectionTitle: string;
  data: QuestionVideoItem[];
}

export default function FAQWithVideoCarousel({
  sectionSmallText,
  sectionTitle,
  data,
}: Props) {
  return (
    <div className="flex flex-col gap-5 lg:gap-10">
      <SectionHeading>
        <SectionHeadingSmall>{sectionSmallText}</SectionHeadingSmall>
        <SectionHeadingTitle>{sectionTitle}</SectionHeadingTitle>
      </SectionHeading>
      <VideoCarousel data={data} />
    </div>
  );
}

