// Navigation components
import { Header, HeaderLogo } from "@/components/header"; 
import Topbar from "@/components/topbar"; 

// Components
import { BenefitsVerticalSlider } from "@/components/ui/benefits-vertical-slider";  

// Services
import { getBusinessBenefits } from "@/services/benefits"; 


export default async function Page({ params }: { params: { slug: string } }) {

    const benefits = await getBusinessBenefits()

    return <main>
      <Navigation />
      <BenefitsVerticalSlider data={benefits} />
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
  