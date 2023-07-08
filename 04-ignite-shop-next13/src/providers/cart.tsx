"use client"

import React, {
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import { Products } from '@/dtos/IProductDTO';

interface CartContextData {
  products: Products[];
  showSidebar(show?: boolean): boolean | undefined;
  addProduct(product: Products): void;
  removeProduct(id: string): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Products[]>([]);
  const [sidebar, setShowSidebar] = useState(false)

  const addProduct = useCallback((newProduct: Products) => {
    setProducts((state) => {
      const productIndex = state.findIndex(product => product.id === newProduct.id)
      if (productIndex === -1) {
        return [...state, newProduct]
      }
      return [...state]
    });
  }, []);

  const removeProduct = useCallback((id: string) => {
    setProducts((state) => state.filter(product => product.id !== id));
  }, []);

  const showSidebar = useCallback((show?: boolean) => {
    if (show === undefined) {
      return sidebar
    }
    setShowSidebar(show)
  }, [sidebar]);

  return (
    <CartContext.Provider
      value={{
        products,
        showSidebar,
        addProduct,
        removeProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}