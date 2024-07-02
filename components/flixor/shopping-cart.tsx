// Fonts
import { fontMono } from '@/app/fonts'

// Components
import { Button } from "@/components/shadcn/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/sheet"

// Icons
import { ChevronLeft, ShoppingBasket } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";


type Sheet = React.ComponentProps<typeof Sheet> & ShoppingCart

type ShoppingCart = {
  cartItems: number
}



const ShoppingCart = ({ cartItems, ...props }: Sheet) => {

  return (
    <Sheet {...props}>
      <SheetTrigger asChild>
        <Button
          className="relative"
          size="icon" variant='ghost' >
          <span className={cn(fontMono.className, "absolute top-0 right-0 bg-primary h-5 w-5 rounded-full flex justify-center items-center text-secondary text-xs font-semibold")}>{cartItems}</span>
          <ShoppingBasket />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col justify-between p-0'>
        <SheetHeader className='border-b border-primary/20'>
          <SheetClose className=' h-full text-sm' asChild>
            <Button 
            className={cn(fontMono.className,"rounded-none bg-transparent text-primary hover:bg-transparent flex justify-start gap-2 py-4")} type="submit">
              <ChevronLeft className='w-4 h-4'/>
              Seguir comprando
            </Button>
          </SheetClose>
        </SheetHeader>


        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}





export default ShoppingCart

