import { MegaTitle } from "@/components/ui/mega-title";
import VideoSlider from "@/components/ui/video-slider";
import Wrapper from "@/components/ui/wrapper";

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
    <Wrapper container="stretch" className=" flex flex-col gap-5 lg:gap-10">
      <MegaTitle smallText={sectionSmallText} beforeTextTitle={sectionTitle} />
      <VideoSlider data={data} />
    </Wrapper>
  );
}
