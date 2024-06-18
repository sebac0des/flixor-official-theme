// Components
import Wrapper from "../wrapper";
import { Card } from "../card";

export function FeaturedProducts() {
    return <Wrapper className="grid md:grid-cols-2 gap-5" container="stretch" >
        <Card />
        <Card />
    </Wrapper>
}

