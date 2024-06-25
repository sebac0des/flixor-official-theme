// Navigation components
import Topbar from "@/components/topbar";
import { Header, HeaderActionElements, HeaderButton, HeaderLogo } from "@/components/header";

export default async function Page({ params }: { params: { slug: string } }) {
    return <main>
      <Navigation />
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
          <HeaderActionElements>
            <HeaderButton className="hidden md:inline-block" buttonText="dsada" buttonUrl="#" />
          </HeaderActionElements>
        </Header>
      </div>
    );
  }
  