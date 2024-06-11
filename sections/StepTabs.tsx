import Link from "next/link";

// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { MegaTitle } from "../components/ui/mega-title";

// Data
import { buyCombo, customOrder } from "@/data/steps";
import VideoModal from "../components/VideoModal";
import { Steps } from "@/components/ui/Steps";

export function StepTabs() {
  return (
    <section className="bg-primary py-6 xl:py-20 text-white">
      <MegaTitle
        smallText="Como empezar"
        beforeTextTitle=" Aprende como hacer tu pedido con nosotros"
        accentTextTitle="en 3 simples pasos."
        containerClassName="flex flex-col items-start w-11/12 mx-auto mb-10"
      />

      <div className="bg-white mx-auto w-11/12 grid xl:grid-cols-2">
        <div className="px-6 py-10">
          <Tabs defaultValue="tabOne" className="w-full">
            <TabsList className="mb-10">
              <TabsTrigger value="tabOne">Pedido personalizado</TabsTrigger>
              <TabsTrigger value="tabTwo">Combo de productos</TabsTrigger>
            </TabsList>
            <TabsContent value="tabOne">
              <Steps steps={customOrder} />
              <Button className="mt-10 font-semibold">
                <Link href="#homepage-form">Empezar</Link>
              </Button>
            </TabsContent>
            <TabsContent value="tabTwo">
              <Steps steps={buyCombo} />
              <Button className="mt-10 font-semibold">
                <Link href="https://api.whatsapp.com/send?phone=+5491130963298&text=Quiero%20ver%20el%20catalogo%20de%20los%20combos!">
                  Ver catalogo
                </Link>
              </Button>
            </TabsContent>
          </Tabs>
        </div>

        <VideoModal />
      </div>
    </section>
  );
}
