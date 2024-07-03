import { Product } from '@/types/product';
import { create } from 'zustand';

export type ProductInCart = Product & {
  quantity: number;
  total: number;
};

interface CartState {
  items: ProductInCart[];
  cartTotal: number;
  getCartTotal: () => number;
  getCartItems: () => number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateItem: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set, get) => ({
  items: [],
  cartTotal: 0,

  getCartTotal: () => get().cartTotal,

  getCartItems: ()=> get().items.reduce((total, item) => total + item.quantity, 0),

  addItem: (newProduct) => set((state) => {
    const updatedProductsInCart = addItem(state.items, newProduct);
    return {
      items: updatedProductsInCart,
      cartTotal: getCartTotal(updatedProductsInCart),
    };
  }),

  removeItem: (productId) => set((state) => {
    const updatedProductsInCart = removeItem(state.items, productId);
    return {
      items: updatedProductsInCart,
      cartTotal: getCartTotal(updatedProductsInCart),
    };
  }),

  updateItem: (productId, quantity) => set((state) => {
    const updatedProductsInCart = updateItem(state.items, productId, quantity);
    return {
      items: updatedProductsInCart,
      cartTotal: getCartTotal(updatedProductsInCart),
    };
  }),

  clearCart: () => set(() => ({
    items: [],
    cartTotal: 0,
  })),
}));


const getCartTotal = (items: ProductInCart[]): number =>
  items.reduce((total, item) => total + item.total, 0);

const addItem = (items: ProductInCart[], newProduct: Product): ProductInCart[] => {
  const existingProductInCart = items.find(p => p.id === newProduct.id);
  let updatedProductsInCart;

  if (existingProductInCart) {
    updatedProductsInCart = items.map(p =>
      p.id === newProduct.id
        ? { ...p, quantity: p.quantity + 1, total: (p.quantity + 1) * p.price }
        : p
    );
  } else updatedProductsInCart = [...items, { ...newProduct, quantity: 1, total: newProduct.price }];


  return updatedProductsInCart;
};

const removeItem = (items: ProductInCart[], productId: string): ProductInCart[] =>
  items.filter(p => p.id !== productId);

const updateItem = (items: ProductInCart[], productId: string, quantity: number): ProductInCart[] =>
  items.map(p =>
    p.id === productId ? { ...p, quantity, total: quantity * p.price } : p
  );

export default useCartStore;
