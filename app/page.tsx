// Components
import { BenefitsVerticalSlider } from "@/components/ui/benefits-vertical-slider";
import ContactPopOver from "@/components/ui/contact-pop-over";
import Header from "@/components/Header";
import Topbar from "@/components/topbar";
import {
  MessageBox,
  MessageBoxTitle,
  MessageBoxSmallMessage,
  MessageBoxLink,
} from "@/components/ui/message-box";

// Sections
import { TargetAudience } from "@/sections/TargetAudience";
import FAQWithVideoSlider from "@/sections/FAQ/faq-with-video-slider";
import Hero from "@/sections/Hero/HeroSimple";
import Questions from "@/sections/FAQ/simple-faq";
import Testimonials from "@/sections/Testimonials/Testimonials";

// Data
import settings from "@/data/settings";
import { homepage as faq } from "@/data/faq";
import audience from "@/data/audience";
import benefits from "@/data/benefits";

// Mock data
import videos from "@/data/videos";

export default async function Page() {

  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <ContactPopOver
        image="\images\sebas-call-me.webp"
        dispatchWindowTime={7000}
      />

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
        buttonUrl={settings.price_list.complete}
      />

      <FAQWithVideoSlider
        sectionSmallText="¿Tienes dudas o preguntas?"
        sectionTitle="Te las aclaramos en tu formato favorito, en video ✨"
        data={videos}
      />

      <TargetAudience
        data={audience}
        sectionSmallText="¿Con quien trabajamos?"
        sectionTitle="Con estudiantes, profesionales y revendedores. ❤️"
      />

      <MessageBox>
        <MessageBoxSmallMessage>
          ¿Necesitas detalles de los productos?👋
        </MessageBoxSmallMessage>
        <MessageBoxTitle>
          Buscalos dentro de nuestro
          <MessageBoxLink
            className="ml-1"
            href="https://demojalf.mitiendanube.com/"
          >
            Catalogo online.
          </MessageBoxLink>
        </MessageBoxTitle>
      </MessageBox>

      <Testimonials />

      <Questions
        sectionSmallText="Preguntas frecuentes"
        sectionTitle="¿Tienes dudas? ¡Te las aclaramos! 👇"
        data={faq}
      />
    </main>
  );
}

function Navigation() {
  return (
    <div className="sticky top-0 z-50">
      <Topbar
        url={settings.price_list.complete}
        message="🔥 Descarga la lista de precios vigente →"
      />
      <Header buttonText="Lista de precios" buttonUrl={settings.price_list.complete} />
    </div>
  );
}
