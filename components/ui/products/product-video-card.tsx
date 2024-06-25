// Components
import { Card, CardButton, CardContent, CardVideo, CardOverlay, CardSmallText, CardTitle } from "../card";

interface Props {
    className?:string
}

export function ProductVideoCard(props:Props) {

    return <Card className={props.className}>
    <CardOverlay/>
    <CardVideo
    className="h-96 w-full"
    src="https://jalfvideos.s3.sa-east-1.amazonaws.com/HACEN+ENVIOS.mp4"
    autoPlay
    muted
    loop
    playsInline
    />
    <CardContent>
        <CardSmallText>Product tagline here 🚀</CardSmallText>
        <CardTitle>321</CardTitle>
        <CardButton buttonUrl="" className="mt-3">Mas info</CardButton>
    </CardContent>
</Card>
}

