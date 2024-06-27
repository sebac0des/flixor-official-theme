// Fonts
import { fontMono } from '@/app/fonts'

// Navigation components
import { Header, HeaderLogo } from "@/components/header";
import Topbar from "@/components/topbar";

// Components
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

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { Benefit, BenefitTitle, BenefitDescription, BenefitItem } from '@/components/ui/benefit'


// Product service
import { getProductBySlug } from '@/services/products';
import { Shield } from 'lucide-react';


export default async function Page({ params }: { params: { slug: string } }) {

    const product = await getProductBySlug(params.slug)


    return <main className='bg-[#fefefe]'>
        {/* Show navigation with topbar and header components */}
        <Navigation />



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

        <Wrapper container='stretch' className='flex flex-col md:gap-10 md:flex-row py-2'>
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

                {/* Show business benefits */}
                <Benefit className='flex items-center gap-3 mt-5'>
                    <Shield className='w-5 h-5'/>
                    <BenefitItem>
                        <BenefitTitle>Secure shipping</BenefitTitle>
                        <BenefitDescription>(5830 E 2nd St #96683, Casper)
                            Usually ready in 24 hours</BenefitDescription>
                    </BenefitItem>
                </Benefit>

                {/* Show product info on accordion items */}
                <Accordion type="single" collapsible className="w-full mt-5 flex flex-col gap-3">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Ingredientes</AccordionTrigger>
                        <AccordionContent>
                            {product.ingredients}
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Modo de uso</AccordionTrigger>
                        <AccordionContent>
                            {product.ingredients}
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
