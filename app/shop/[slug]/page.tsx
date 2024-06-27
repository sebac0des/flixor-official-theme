// Fonts
import { fontMono } from '@/app/fonts'

// Navigation components
import { Header, HeaderLogo } from "@/components/header";
import Topbar from "@/components/topbar";

// Components
import { BenefitsVerticalSlider } from "@/components/ui/benefits-vertical-slider";

import { ProductGalleryCarousel } from '@/components/ui/product/product-gallery-carousel'

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

import { ProductInfo, ProductInfoTitle, ProductInfoDescription, ProductInfoPrice } from '@/components/ui/product/product-info';

// Services
import { getBusinessBenefits } from "@/services/benefits";

// Mock data
import { getProductBySlug } from '@/services/products';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


export default async function Page({ params }: { params: { slug: string } }) {

    const product = await getProductBySlug(params.slug)
    const benefits = await getBusinessBenefits()

    return <main className='bg-[#fefefe]'>
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

        <Wrapper container='stretch' className='flex flex-col md:gap-10 md:flex-row'>
            {/* Show product gallery on desktop screens*/}
            <CardsGallery className="hidden md:grid">
                <CardsGalleryFeaturedImage
                    className='w-full'
                    alt={product.name}
                    src={product.images[0]}
                />
                <CardsGalleryGridVideos videosUrls={product.videos} />
                <CardsGalleryGridImages imagesUrls={product.images} />
            </CardsGallery>


            {/* Show product gallery carousel on responsive screens */}
            <ProductGalleryCarousel />

            {/* Show the product info as title, desc, price, etc */}
            <ProductInfo
                className='mt-5 md:mt-0 md:w-11/12'
            >
                <ProductInfoTitle>{product.name}</ProductInfoTitle>
                <ProductInfoPrice >{product.price.toFixed(2)}</ProductInfoPrice>
                <ProductInfoDescription >{product.short_desc}</ProductInfoDescription>

            {/* Show product info on accordion items */}
            <Accordion type="single" collapsible className="w-full mt-5">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </ProductInfo>


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
