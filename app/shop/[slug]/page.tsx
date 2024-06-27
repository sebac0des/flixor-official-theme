// Fonts
import { fontMono } from '@/app/fonts'

// Navigation components
import { Header, HeaderLogo } from "@/components/header";
import Topbar from "@/components/topbar";

// Components
import { BenefitsVerticalSlider } from "@/components/ui/benefits-vertical-slider";

import { ProductGalleryCarousel } from '@/components/ui/products/product-gallery-carousel'

import { CardsGallery, CardsGalleryFeaturedImage, CardsGalleryGridImages, CardsGalleryGridVideos } from '@/components/ui/cards-gallery'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Wrapper from '@/components/ui/wrapper';



// Services
import { getBusinessBenefits } from "@/services/benefits";

// Mock data
import { getProductBySlug } from '@/services/products';


export default async function Page({ params }: { params: { slug: string } }) {

    const product = await getProductBySlug(params.slug)
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
                    <BreadcrumbPage>{product.name}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <Wrapper container='stretch' className='py-2'>
            {/* Show product gallery on desktop screens*/}
            <CardsGallery className="hidden md:grid">
                <CardsGalleryFeaturedImage
                    alt={product.name}
                    src={product.images[0]}
                />
                <CardsGalleryGridVideos videosUrls={product.videos} />
                <CardsGalleryGridImages imagesUrls={product.images} />
            </CardsGallery>

            {/* Show product gallery carousel on responsive screens */}
            <ProductGalleryCarousel />
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
