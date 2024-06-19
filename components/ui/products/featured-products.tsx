// Components
import Wrapper from "../wrapper";
import { Card } from "../card";
import { Product } from "@/types";

interface Props {
    data:Product[]
}

export function FeaturedProducts({data}:Props) {
    return <Wrapper className="grid md:grid-cols-2 gap-5" container="stretch" >
        {data.map(item=>{
            return <Card key={item.id}
            smallText={item.audience}
            title={item.name}
            buttonText="Ver mas"
            buttonUrl=""
            image={item.cover_image}
            />
        })}
    </Wrapper>
}

