'use client'

// Components
import { Button } from "@/components/shadcn/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/shadcn/sheet"

import { CartItem, CartItemName, CartItemContent, CartItemImage, CartItemSubtotal, CartItemRemove } from '@/components/flixor/cart-item';
import { ListItem, ListItemTitle, ListItemContent, ListItemSmall } from '@/components/flixor/list-item'

// Icons
import { ChevronLeft, ShoppingBasket } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

// Types
import Link from 'next/link';

// Store
import useCartStore from '@/store/cart'

// Fonts
import { fontMono } from '@/app/fonts'

type Sheet = React.ComponentProps<typeof Sheet>

const ShoppingCart = ({...props }: Sheet) => {

  const {items} = useCartStore()

  return (
    <Sheet {...props}>
      <SheetTrigger asChild>
        <Button
          className="relative"
          size="icon" variant='ghost' >
          <span className={cn(fontMono.className, "absolute top-0 right-0 bg-primary h-5 w-5 rounded-full flex justify-center items-center text-secondary text-xs font-semibold")}>{items.length}</span>
          <ShoppingBasket />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col justify-start gap-0 p-0'>
        <ShoppingCartHeader/>
        <ShoppingCartItems/>
        <ShoppingCartFooter/>
      </SheetContent>
    </Sheet>
  )
}

const ShoppingCartItems = () => {

  const {items,removeItem} = useCartStore()
  
  if(items.length === 0 ) return <ShoppingCartEmpty/>
  
  return <div className='flex flex-col gap-2 h-2/5 overflow-y-scroll p-4'>
    {items.map((item) => <CartItem key={item.id} className='relative'>
      <CartItemImage alt='' src={item.cover_image} />
      <CartItemContent className='w-full'>
        <CartItemName>{item.name}</CartItemName>
        <CartItemSubtotal className='absolute bottom-0 right-0 text-center'>
          <span className='block text-xs'>Subtotal</span>
          ${item.total.toFixed(2)}</CartItemSubtotal>
      </CartItemContent>
      <CartItemRemove onClick={()=>removeItem(item.id)} className=''/>
    </CartItem>)}
  </div>
}

const ShoppingCartHeader = () => {
  return <SheetHeader className='border-b border-primary/20'>
    <SheetClose className='h-full text-sm' asChild>
      <Button
        className={cn(fontMono.className, "rounded-none bg-transparent text-primary hover:bg-transparent flex justify-start gap-2 py-4")} type="submit">
        <ChevronLeft className='w-4 h-4' />
        Seguir comprando
      </Button>
    </SheetClose>
  </SheetHeader>
}

const ShoppingCartFooter = () => {

  const {getCartTotal, getCartItems} = useCartStore()

  return <SheetFooter className='flex-col h-3/5 gap-0 border-t border-soft'>
    <ListItem className={fontMono.className}>
      <ListItemTitle>Resumen del pedido</ListItemTitle>
      <ListItemContent>{getCartItems()} items</ListItemContent>
    </ListItem>

    <ListItem className={cn(fontMono.className, "border-none")}>
      <ListItemTitle>Subtotal
        <ListItemSmall>Taxes and shipping calculated at checkout
        </ListItemSmall>
      </ListItemTitle>
      <ListItemContent>${getCartTotal().toFixed(2)}</ListItemContent>
    </ListItem>
  </SheetFooter>
}

const ShoppingCartEmpty = ()=>{
  return <div className={cn(fontMono.className,"text-center place-content-center p-5 min-h-56")}>
    <h5 className='text-xl font-medium'>Tu carrito esta vacio</h5>
    <p>There are no items in your cart.</p>
    <Button variant="secondary" className='mt-5' size="sm">
      <Link href="/">Continuar comprando</Link>
    </Button>
  </div>
}

export default ShoppingCart




