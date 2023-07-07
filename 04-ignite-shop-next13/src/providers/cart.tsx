"use client"

import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

interface Products {
  priceId: string;
}

interface CartContextData {
  products: Products[];
  addProduct({ priceId }: Products): void;
  removeProduct(id: string): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Products[]>([]);

  const addProduct = useCallback(({ priceId }: Products) => {
    setProducts((state) => {
      const productIndex = state.findIndex(product => product.priceId === priceId)
      if (productIndex === -1) {
        return [...state, { priceId }]
      }
      return [...state]
    });
  }, []);

  const removeProduct = useCallback((id: string) => {
    setProducts((state) => state.filter(product => product.priceId !== id));
  }, []);

  return (
    <CartContext.Provider
      value={{
        products,
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