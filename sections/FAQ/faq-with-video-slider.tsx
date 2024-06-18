// Components
import { SimpleTitle } from "@/components/ui/simple-title";
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
      <SimpleTitle smallText={sectionSmallText} titleText={sectionTitle}/>
      <VideoSlider data={data} />
    </Wrapper>
  );
}
