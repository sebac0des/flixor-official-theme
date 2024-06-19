// Navigation Components
import Header from "@/components/header";
import Footer from "@/components/footer";
import Topbar from "@/components/topbar";

// Content components
import {
  MessageBox,
  MessageBoxTitle,
  MessageBoxSmallMessage,
  MessageBoxLink,
} from "@/components/ui/message-box";

import { ContactPopOver, ContactPopOverButton, ContactPopOverMessage, ContactPopOverSmallMessage, ContactPopOverTitle } from '@/components/ui/contact-pop-over'

import { BenefitsVerticalSlider } from "@/components/ui/benefits-vertical-slider";

import {FeaturedProducts} from '@/components/ui/products/featured-products'
import {MostPopularProducts} from '@/components/ui/products/most-popular-products'

// Sections
import { TargetAudience } from "@/sections/target-audience";
import FAQWithVideoSlider from "@/sections/FAQ/faq-with-video-slider";
import Hero from "@/sections/Hero/HeroSimple";
import Questions from "@/sections/FAQ/simple-faq";
import Testimonials from "@/sections/testimonials";
import ComboShowcase from '@/sections/products/combo-showcase'

import audience from "@/data/audience";
import benefits from "@/data/benefits";

// Services
import { getPopularProducts } from "@/services/products";
import { getTestimonials } from "@/services/testimonials";
import { getHomepageQuestions } from "@/services/faq";
import {getSliderVideos} from '@/services/videos'


export default async function Page() {

  const popular_products = await getPopularProducts()
  const slider_videos = await getSliderVideos()
  const testimonials = await getTestimonials()
  const faq = await getHomepageQuestions()


  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <ContactPopOver
        image="\images\sebas-call-me.webp"
      >
        <ContactPopOverTitle>¿Tenes una pregunta? ¡Escríbínos!
        </ContactPopOverTitle>
        <ContactPopOverMessage>Estamos en línea listos para responder tus dudas en WhatsApp.

        </ContactPopOverMessage>
        <ContactPopOverButton
          href="https://api.whatsapp.com/send?phone=+5491130963298&text=Hola,%20mi%20nombre%20es%20....%20y%20tengo%20una%20duda!"
        >Si, tengo preguntas</ContactPopOverButton>
        <ContactPopOverSmallMessage>Se abre en WhatsApp</ContactPopOverSmallMessage>
      </ContactPopOver>

      <Navigation />

      
      <BenefitsVerticalSlider data={benefits} />
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
        buttonText="Ver lista de precios 🔥"
        buttonUrl="#"
      />

      <FeaturedProducts/>

      <MostPopularProducts data={popular_products}/>

      <ComboShowcase/>

      <FAQWithVideoSlider
        sectionSmallText="¿Tienes dudas o preguntas?"
        sectionTitle="Te las aclaramos en tu formato favorito, en video ✨"
        data={slider_videos}
      />

      <TargetAudience
        data={audience}
        sectionSmallText="¿Con quien trabajamos?"
        sectionTitle="Con estudiantes, profesionales y revendedores. ❤️"
      />

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

      <Testimonials data={testimonials}/>

      <Questions
        sectionSmallText="Preguntas frecuentes"
        sectionTitle="¿Tienes dudas? ¡Te las aclaramos! 👇"
        data={faq}
      />

      <Footer/>
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
      <Header buttonText="Lista de precios" buttonUrl="#" />
    </div>
  );
}
