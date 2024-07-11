// Fonts
import { fontMono } from '@/app/fonts' 

// Navigation components
import Header  from "@/components/header"; 
import Topbar from "@/components/topbar"; 

// Components
import { CardsGallery, CardsGalleryFeaturedImage, CardsGalleryGridImages, CardsGalleryGridVideos } from '@/components/flixor/cards-gallery' 
import { CardCarousel, CardCarouselImages, CardCarouselSingleImage, CardCarouselSingleVideo } from '@/components/flixor/cards-carousel'; 
import { SectionHeading, SectionHeadingTitle } from '@/components/flixor/section-heading';


// Breadcrumb components
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/shadcn/breadcrumb"

// Wrapper component
import Container from '@/components/flixor/container';

// Product info components
import { ProductInfo, ProductInfoTitle, ProductInfoDescription, ProductInfoPrice } from '@/components/flixor/product/product-info';

// Accordion components
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shadcn/accordion';

// Benefit components
import { Benefit, BenefitTitle, BenefitDescription, BenefitItem, BenefitContent } from '@/components/flixor/benefit'

// Button component
import { Button } from '@/components/shadcn/button';

// Product carousel components
import { ProductCarousel, ProductCarouselContent, ProductCarouselIndicators } from '@/components/flixor/product/product-carousel'

// Product service
import { getProductBySlug, getProductsByCategory } from '@/services/products';

// Utils
import { cn } from '@/lib/utils';

// Icons
import { Lock, Truck, Package } from 'lucide-react';

import { AddToCartButton,AddToCartButtonText,AddToCartButtonIcon } from '@/components/flixor/add-to-cart';


export default async function Page({ params }: { params: { slug: string } }) {

    const product = await getProductBySlug(params.slug)
    const related_products = await getProductsByCategory('Calzado')

    return <main className='min-h-screen bg-[#fefefe]'>
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

        <Container className='flex flex-col md:gap-10 xl:flex-row py-2'>
            {/* Show product gallery on desktop screens*/}
            <CardsGallery className="hidden xl:grid">
                <CardsGalleryFeaturedImage
                    className='w-full'
                    alt={product.name}
                    src={product.images[0]}
                />
                <CardsGalleryGridVideos videosUrls={product.videos} />
                <CardsGalleryGridImages imagesUrls={product.images} />
            </CardsGallery>


            {/* Show product gallery carousel on responsive screens */}
            <CardCarousel
            className='xl:hidden'
            >
                <CardCarouselSingleImage alt={product.cover_image} src={product.cover_image} />
                <CardCarouselSingleVideo src={product.videos[0]} />
                <CardCarouselImages images={product.images} />
            </CardCarousel>

            {/* Show the product info as title, desc, price, etc */}
            <ProductInfo
                className='mt-5 md:mt-0 md:w-11/12 h-fit md:sticky top-0'
            >
                <ProductInfoTitle>{product.name}</ProductInfoTitle>
                <ProductInfoPrice >{product.price.toFixed(2)}</ProductInfoPrice>
                <ProductInfoDescription >{product.short_desc}</ProductInfoDescription>

                {/* Show shop action buttons */}
                <AddToCartButton variant="secondary" className='w-full py-6 mb-1 mt-8' cartItem={product}>
                    <AddToCartButtonIcon className='w-4 h-4 mr-2'/>
                    <AddToCartButtonText>Agregar al carrito</AddToCartButtonText>
                </AddToCartButton>
                

                <Button variant="accent" className='mb-8 w-full py-6' size="lg">Buy now</Button>
             


                {/* Show business benefits */}
                <Benefit className='flex flex-col gap-2 mt-5'>

                    <BenefitItem className='flex items-center gap-3'>
                        <Package className='w-5 h-5' />
                        <BenefitContent>
                            <BenefitTitle>Free Pick Up at 5830 E 2nd St #96683</BenefitTitle>
                            <BenefitDescription>(5830 E 2nd St #96683, Casper)
                                Usually ready in 24 hours</BenefitDescription>
                        </BenefitContent>
                    </BenefitItem>


                    <BenefitItem className='flex items-center gap-3'>
                        <Truck className='w-5 h-5' />
                        <BenefitContent>
                            <BenefitTitle>Shipping Guarantee</BenefitTitle>
                            <BenefitDescription>(5830 E 2nd St #96683, Casper)
                                Usually ready in 24 hours</BenefitDescription>
                        </BenefitContent>
                    </BenefitItem>

                    <BenefitItem className='flex items-center gap-3'>
                        <Lock className='w-5 h-5' />
                        <BenefitContent>
                            <BenefitTitle>Secure checkout</BenefitTitle>
                            <BenefitDescription>(5830 E 2nd St #96683, Casper)
                                Usually ready in 24 hours</BenefitDescription>
                        </BenefitContent>
                    </BenefitItem>


                </Benefit>

                {/* Show product info on accordion items */}
                <Accordion type="single" collapsible className={cn(fontMono.className, "w-full mt-5 flex flex-col gap-3")}>
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
        </Container>

        {/* Show related products on the same category */}
        <Container>
            <SectionHeading className='text-left'>
                <SectionHeadingTitle>You might also like</SectionHeadingTitle>
            </SectionHeading>

            <ProductCarousel
                opts={{
                    align: "start",
                    loop: true,
                }}>
                <ProductCarouselIndicators />
                <ProductCarouselContent data={related_products} />
            </ProductCarousel>
        </Container>
    </main>
}


function Navigation() {
    return (
        <div className="sticky top-0 z-50">
            <Topbar
                url="#"
                message="🔥 Descarga la lista de precios vigente →"
            />
            <Header/>
        </div>
    );
}
