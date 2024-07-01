// Components
import { SimpleTitle } from "@/components/flixor/simple-title";
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
      <SimpleTitle containerClassName="text-left" smallText={sectionSmallText} titleText={sectionTitle}/>
      <VideoCarousel data={data} />
    </div>
  );
}

