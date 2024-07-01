"use client";

import { useState } from "react";

// Next
import { useRouter } from "next/navigation";

// Zod & react hook form
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../shadcn/form";
import { Button } from "../shadcn/button";
import { Input } from "../shadcn/input";
import { Label } from "../shadcn/label";

// Icons
import { Loader } from "lucide-react";

// Schema
import { formSchema } from "@/schemas/Homepage";

// Services
import { createContact } from "../../services/contact";
import { cn } from "../../lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcn/select";

// Data
import settings from "@/data/settings";

const PRICE_LISTS = {
  esthetic: "lista de precios estetica",
  massages: "lista de precios masajes",
  cosmetology: "lista de precios cosmetologia",
  depilation: "lista de depilacion",
  manicure: "lista de precios manicuria",
  complete: "lista de precios completa",
};

export default function HomepageForm({ className }: { className?: string }) {
  const router = useRouter();

  const [state, setState] = useState({
    loading: false,
    message: "",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
      phone_number: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setState({ loading: true, message: "" });

    createContact(values)
      .then((create) => {
        if (create) {
          form.reset();
          setState({
            loading: false,
            message: "Tu formulario se envió con éxito",
          });

          setTimeout(() => {
            const url = returnPriceListLink(values.message);
            router.push(url);
          }, 1000);
        }
      })
      .catch((err) => {
        setState({ loading: false, message: err.message });
      });
  }

  return (
    <div id="homepage-form" className={cn(className, "mt-5 p-4 bg-[#f7f9fa]")}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary text-xs">
                  Nombre completo
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-xs"
                    placeholder="Tu nombre completo..."
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary text-xs">
                  Correo electronico
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-xs"
                    placeholder="Tu correo electronico..."
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary text-xs">Telefono</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="text-xs"
                    placeholder="Tu teléfono o WhatsApp…"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <Label className="text-primary text-xs">
                  Elegí una lista de precios
                </Label>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una lista de precios" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={PRICE_LISTS.esthetic}>
                      Lista de precios estética
                    </SelectItem>
                    <SelectItem value={PRICE_LISTS.massages}>
                      Lista de precios masajes
                    </SelectItem>
                    <SelectItem value={PRICE_LISTS.cosmetology}>
                      Lista de precios cosmetología
                    </SelectItem>
                    <SelectItem value={PRICE_LISTS.depilation}>
                      Lista de precios depilación
                    </SelectItem>
                    <SelectItem value={PRICE_LISTS.manicure}>
                      Lista de precios manicuria y pedicuria
                    </SelectItem>
                    <SelectItem value={PRICE_LISTS.complete}>
                      Lista de precios completa
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          ></FormField>

          <Button
            disabled={state.loading}
            className="w-full "
            variant="secondary"
            type="submit"
          >
            {state.loading && <Loader className="w-4 h-4 mr-1 animate-spin" />}
            Enviar formulario
          </Button>

          <small className="text-accentTwo mt-1 block">{state.message}</small>
        </form>
      </Form>
    </div>
  );
}

function returnPriceListLink(list_name: string) {
  if (list_name === PRICE_LISTS.esthetic) return settings.price_list.esthetic;
  if (list_name === PRICE_LISTS.massages) return settings.price_list.massages;
  if (list_name === PRICE_LISTS.cosmetology)
    return settings.price_list.cosmetology;
  if (list_name === PRICE_LISTS.depilation)
    return settings.price_list.depilation;
  if (list_name === PRICE_LISTS.manicure) return settings.price_list.manicure;

  return settings.price_list.complete;
}
