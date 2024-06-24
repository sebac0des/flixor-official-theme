'use client'

import { CartProvider } from "react-use-cart"

export const ShoppingCartContext = ({children}:{children:React.ReactNode})=>{
    return <CartProvider onItemAdd={()=>alert('hello')}>
        {children}
    </CartProvider>
}