// Fonts
import {fontMono} from '@/app/fonts'

// Navigation components
import { Header, HeaderLogo } from "@/components/header";
import Topbar from "@/components/topbar";

// Components
import { BenefitsVerticalSlider } from "@/components/ui/benefits-vertical-slider";
import {CardsMultimediaGallery} from '@/components/ui/cards-multimedia-gallery'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


// Services
import { getBusinessBenefits } from "@/services/benefits";
import Wrapper from '@/components/ui/wrapper';


export default async function Page({ params }: { params: { slug: string } }) {

    const benefits = await getBusinessBenefits()

    return <main>
        {/* Show navigation with topbar and header components */}
        <Navigation />

        {/* Show vertical benefits slider */}
        <BenefitsVerticalSlider data={benefits} />

        {/* Show shop breadcrum */}
        <Breadcrumb className={fontMono.className}>
            <BreadcrumbList className='text-primary py-5 md:text-base w-11/12 m-auto'>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Producto de ejemplo</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <Wrapper container='stretch' className='py-2'>
        {/* Show product gallery */}
        <CardsMultimediaGallery/>
        </Wrapper>



    </main>
}

function Navigation() {
    return (
        <div className="sticky top-0 z-50">
            <Topbar
                url="#"
                message="🔥 Descarga la lista de precios vigente →"
            />
            <Header>
                <HeaderLogo />
            </Header>
        </div>
    );
}
