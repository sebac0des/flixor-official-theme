// Components
import Wrapper from "@/components/ui/wrapper";
import {ProductVideoCard} from '@/components/ui/products/product-video-card'
import { SimpleTitle } from "@/components/ui/simple-title";

export default function ComboShowcase(){
    return <Wrapper container="stretch">
        <SimpleTitle
        containerClassName="text-left mb-4"
        smallText="Best treat for your skin
        "
        titleText="Bundle & Save 🤑"
        />

        <ProductVideoCard/>
    </Wrapper>
}