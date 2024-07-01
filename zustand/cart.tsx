import { Product } from '@/types/product';
import { create } from 'zustand';


type ProductInCart = Product & {
  quantity: number;
  total: number;
};

type CartState = {
  items: ProductInCart[];
  cartTotal: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateItem: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItems: () => ProductInCart[];
  getCartTotal: () => number;
};

const useCartStore = create<CartState>((set, get) => ({
  items: [],

  cartTotal: 0,

  addItem: (newProduct) => set((state) => {
    const existingProductInCart = state.items.find(p => p.id === newProduct.id);
    let updatedProductsInCart;

    if (existingProductInCart) {
      updatedProductsInCart = state.items.map(p =>
        p.id === newProduct.id
          ? { ...p, quantity: p.quantity + 1, total: (p.quantity + 1) * p.price }
          : p
      );
    } else {
      updatedProductsInCart = [...state.items, { ...newProduct, quantity: 1, total: newProduct.price }];
    }

    return {
      items: updatedProductsInCart,
      cartTotal: updatedProductsInCart.reduce((total, item) => total + item.total, 0)
    };
  }),

  removeItem: (productId) => set((state) => {
    const updatedProductsInCart = state.items.filter(p => p.id !== productId);

    return {
      items: updatedProductsInCart,
      cartTotal: updatedProductsInCart.reduce((total, item) => total + item.total, 0)
    };
  }),

  updateItem: (productId, quantity) => set((state) => {
    const updatedProductsInCart = state.items.map(p =>
      p.id === productId ? { ...p, quantity, total: quantity * p.price } : p
    );

    return {
      items: updatedProductsInCart,
      cartTotal: updatedProductsInCart.reduce((total, item) => total + item.total, 0)
    };
  }),

  clearCart: () => set(() => ({
    items: [],
    cartTotal: 0
  })),

  getItems: () => {
    return get().items;
  },

  getCartTotal: () => {
    return get().cartTotal;
  }
}));

export default useCartStore;