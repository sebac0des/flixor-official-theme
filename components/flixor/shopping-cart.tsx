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
  SheetTrigger,
} from "@/components/shadcn/sheet"

import { CartItem, CartItemName, CartItemContent, CartItemImage, CartItemSubtotal, CartItemRemove } from '@/components/flixor/cart-item';

import { ListItem, ListItemTitle, ListItemContent, ListItemSmall } from '@/components/flixor/list-item'

// Icons
import { ChevronLeft, ShoppingBasket } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

// Types
import { ProductInCart } from '@/store/cart';


type Sheet = React.ComponentProps<typeof Sheet> & ShoppingCartItemsIndicator

type ShoppingCartItemsIndicator = {
  cartItems: number
}

type ShoppingCartFooter = {
  cartTotalItems: number
  cartSubTotal: number
}

type ShoppingCartItems = {
  items: ProductInCart[]
  handleRemoveCartItem: (itemId:string)=>void
}

const ShoppingCart = ({ cartItems, children, ...props }: Sheet) => {

  return (
    <Sheet {...props}>
      <SheetTrigger asChild>
        <Button
          className="relative"
          size="icon" variant='ghost' >
          <ShoppingCartItemsIndicator cartItems={cartItems} />
          <ShoppingBasket />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col justify-start gap-0 p-0'>
        {children}
      </SheetContent>
    </Sheet>
  )
}

const ShoppingCartItemsIndicator = ({ cartItems }: ShoppingCartItemsIndicator) => {
  return <span className={cn(fontMono.className, "absolute top-0 right-0 bg-primary h-5 w-5 rounded-full flex justify-center items-center text-secondary text-xs font-semibold")}>{cartItems}</span>
}

const ShoppingCartItems = ({ items, handleRemoveCartItem }: ShoppingCartItems) => {
  return <div className='flex flex-col gap-2 h-2/5 overflow-y-scroll p-4'>
    {items.map((item) => <CartItem className='relative'>
      <CartItemImage alt='' src={item.cover_image} />
      <CartItemContent className='w-full'>
        <CartItemName>{item.name}</CartItemName>
        <CartItemSubtotal className='absolute bottom-0 right-0 text-center'>
          <span className='block text-xs'>Subtotal</span>
          ${item.total.toFixed(2)}</CartItemSubtotal>
      </CartItemContent>
      <CartItemRemove onClick={()=>handleRemoveCartItem(item.id)} className=''/>
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

const ShoppingCartFooter = ({ cartSubTotal, cartTotalItems }: ShoppingCartFooter) => {
  return <SheetFooter className='flex-col h-3/5 gap-0'>
    <ListItem className={fontMono.className}>
      <ListItemTitle>Resumen del pedido</ListItemTitle>
      <ListItemContent>{cartTotalItems} items</ListItemContent>
    </ListItem>

    <ListItem className={cn(fontMono.className, "border-none")}>
      <ListItemTitle>Subtotal
        <ListItemSmall>Taxes and shipping calculated at checkout
        </ListItemSmall>
      </ListItemTitle>
      <ListItemContent>${cartSubTotal.toFixed(2)}</ListItemContent>
    </ListItem>
  </SheetFooter>
}




export { ShoppingCart, ShoppingCartItems, ShoppingCartHeader, ShoppingCartFooter }

