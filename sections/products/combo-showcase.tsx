// Components
import Wrapper from "@/components/ui/wrapper";
import {ProductVideoCard as VideoCard} from '@/components/ui/products/product-video-card'
import {ProductCard as ShopCard} from '@/components/ui/products/product-card'
import { SimpleTitle } from "@/components/ui/simple-title";

export default function ComboShowcase(){
    return <Wrapper container="stretch">
        <SimpleTitle
        containerClassName="text-left mb-4"
        smallText="Best treat for your skin
        "
        titleText="Bundle & Save 🤑"
        />
        <div className="flex flex-col md:flex-row gap-2">
        <VideoCard className="md:w-8/12"/>
        <ShopCard className="w-full md:w-4/12"/>
        </div>
        
    </Wrapper>
}