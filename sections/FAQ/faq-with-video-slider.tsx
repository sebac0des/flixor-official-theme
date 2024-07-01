// Components
import { SimpleTitle } from "@/components/flixor/simple-title";
import VideoSlider from "@/components/flixor/video-slider";

// Types
import { QuestionVideoItem } from "@/types";

interface Props {
  sectionSmallText: string;
  sectionTitle: string;
  data: QuestionVideoItem[];
}

export default function FAQWithVideoSlider({
  sectionSmallText,
  sectionTitle,
  data,
}: Props) {
  return (
    <div className="flex flex-col gap-5 lg:gap-10">
      <SimpleTitle containerClassName="text-left" smallText={sectionSmallText} titleText={sectionTitle}/>
      <VideoSlider data={data} />
    </div>
  );
}

