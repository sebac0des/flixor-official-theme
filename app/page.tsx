// Next js
import Link from "next/link";

// Fonts
import { fontMono } from "@/app/fonts";

// Navigation Components
import Footer from "@/components/footer";
import Topbar from "@/components/topbar";
import Header from '@/components/header'

// Content components
import {
  MessageBox,
  MessageBoxTitle,
  MessageBoxSmallMessage,
  MessageBoxLink,
} from "@/components/flixor/message-box";

import { Avatar, AvatarImage } from "@/components/shadcn/avatar";

import { SimpleTitle } from "@/components/flixor/simple-title";

import { FloatingPopOver, FloatingPopOverTrigger, FloatingPopOverContent } from '@/components/flixor/floating-pop-over'

import { BenefitsVerticalSlider } from "@/components/flixor/benefits-vertical-slider";

import { FeaturedProducts } from '@/components/flixor/product/featured-products'
import { ProductCarousel, ProductCarouselContent, ProductCarouselIndicators } from '@/components/flixor/product/product-carousel'
import Wrapper from "@/components/flixor/wrapper";
import { Button } from "@/components/shadcn/button";


// Sections
import { TargetAudience } from "@/sections/target-audience";
import FAQWithVideoCarousel from "@/sections/FAQ/faq-with-video-carousel";
import Hero from "@/sections/Hero/HeroSimple";
import Questions from "@/sections/FAQ/simple-faq";
import Testimonials from "@/sections/testimonials";
import { ComboShowcase, ComboShowcaseContent, ComboShoppingCard, ComboVideoCard } from '@/sections/products/combo-showcase'

// Utils
import { cn } from "@/lib/utils";

// Services
import { getPopularProducts, getFeaturedProducts, getProductBySlug } from "@/services/products";
import { getTestimonials } from "@/services/testimonials";
import { getHomepageQuestions } from "@/services/faq";
import { getSliderVideos } from '@/services/videos'
import { getBusinessBenefits } from '@/services/benefits'
import { getBusinessAudience } from '@/services/audience'

export default async function Page() {

  const featured_products = await getFeaturedProducts()
  const combo = await getProductBySlug('combo-sueros-faciales-biobellus')
  const popular_products = await getPopularProducts()
  const slider_videos = await getSliderVideos()
  const benefits = await getBusinessBenefits()
  const testimonials = await getTestimonials()
  const faq = await getHomepageQuestions()
  const audience = await getBusinessAudience()

  return (

    <main className="min-h-screen bg-[#fcfcfc]">

      {/* Show a floating pop over on the screen, ideal to offer quick contact to the user */}
      <FloatingPopOver>
        <FloatingPopOverTrigger>
          <Avatar className="w-24 h-24 hover:cursor-pointer shadow-black/30 shadow-xl">
            <AvatarImage src="/images/sebas-call-me.webp" alt="@flixor" />
          </Avatar>
        </FloatingPopOverTrigger>
        <FloatingPopOverContent>
          <h4 className="font-bold leading-none text-lg text-left mb-2">
            ¿Tenes una pregunta? ¡Escríbínos!
          </h4>
          <p className={cn(fontMono.className, "text-primary text-sm w-full")} >
            Estamos en línea listos para responder tus dudas en WhatsApp.
          </p>

          <Button
            variant="default"
            asChild
            className="w-full rounded-none mt-4 mb-1.5"
            size="icon"
          >
            <Link href="https://api.whatsapp.com/send?phone=+5491130963298&text=Hola,%20mi%20nombre%20es%20....%20y%20tengo%20una%20duda!">
              Si, tengo preguntas!
            </Link>
          </Button>

          <small className={cn(fontMono.className, 'block text-center text-xs mt-1 text-gray-400')}>
            Se abre en WhatsApp
          </small>
        </FloatingPopOverContent>
      </FloatingPopOver>

      {/* Show header and topbar on navigation bar */}
      <Navigation />


      {/* Show vertical slider with business benefits in loop  */}
      <BenefitsVerticalSlider data={benefits} />

      {/* Show hero section */}
      <Hero
        title="¡Mira la lista de precios!"
        beforeText="Tenemos los productos mas vendidos de cada rubro."
        animatedText={[
          "Estética.",
          "Masajes.",
          "Depilación.",
          "Cosmetología.",
          "Pedicuria.",
        ]}
        buttonText="Ver lista de precios🔥"
        buttonUrl="#"
      />

      <Wrapper container="stretch" className="flex flex-col gap-16">
        {/* Show featured products cards */}
        <FeaturedProducts data={featured_products} />

        {/* Show popular on product card slider */}
        <ProductCarousel >
          <div className="lg:flex justify-between items-center">
            <SimpleTitle
              titleText="Most Popular ✨"
              description="Looking for safe skincare products that actually work? Look no further!"
              containerClassName="mb-3 text-left"
            />
            <ProductCarouselIndicators />
          </div>

          <ProductCarouselContent data={popular_products} />
        </ProductCarousel>

        {/* Show a combo show case with video and shopping card */}
        <ComboShowcase >
          <SimpleTitle
            containerClassName="text-left mb-4"
            smallText="Best treat for your skin
        "
            titleText="Bundle & Save 🤑"
          />
          <ComboShowcaseContent >
            <ComboVideoCard product={combo} />
            <ComboShoppingCard className="md:w-2/5" product={combo} />
          </ComboShowcaseContent>
        </ComboShowcase>

        {/* Show a slider with frequently asked questions about your business in video */}
        <FAQWithVideoCarousel
          sectionSmallText="¿Tienes dudas o preguntas?"
          sectionTitle="Te las aclaramos en tu formato favorito, en video ✨"
          data={slider_videos}
        />

        {/* Show target audience section, use for segment your business audience */}
        <TargetAudience
          data={audience}
          sectionSmallText="¿Con quien trabajamos?"
          sectionTitle="Con estudiantes, profesionales y revendedores. ❤️"
        />

        {/* Show message box, use for highlight specific information */}
        <MessageBox>
          <MessageBoxSmallMessage>
            Hola, soy Sebas👋
          </MessageBoxSmallMessage>
          <MessageBoxTitle>
            Jalf es el comercio que uso para mostrar
            <MessageBoxLink
              className="ml-1"
              href="https://github.com/sebac0des/flixor"
            >
              Flixor template.
            </MessageBoxLink>
          </MessageBoxTitle>
        </MessageBox>


        {/* Show testimonial carousel */}
        <Testimonials data={testimonials} />

        {/* Show business questions */}
        <Questions
          sectionSmallText="Preguntas frecuentes"
          sectionTitle="¿Tienes dudas? ¡Te las aclaramos! 👇"
          data={faq}
        />
      </Wrapper>



      <Footer />
    </main>

  );
}

function Navigation() {
  return (
    <div className="sticky top-0 z-50">
      <Topbar
        url="#"
        message="🔥 Descarga la lista de precios vigente →"
      />
      <Header />
    </div>
  );
}
