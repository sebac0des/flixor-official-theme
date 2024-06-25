// Fonts
import {fontMono} from '@/app/fonts'

// Navigation components
import { Header, HeaderLogo } from "@/components/header";
import Topbar from "@/components/topbar";

// Components
import { BenefitsVerticalSlider } from "@/components/ui/benefits-vertical-slider";

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


export default async function Page({ params }: { params: { slug: string } }) {

    const benefits = await getBusinessBenefits()

    return <main>
        <Navigation />
        <BenefitsVerticalSlider data={benefits} />
        <Breadcrumb className={fontMono.className}>
            <BreadcrumbList className='w-11/12 m-auto text-primary py-3 md:text-base'>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />gi
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Shop</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Producto de ejemplo</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

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
