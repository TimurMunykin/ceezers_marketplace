"use client"
import React, { createContext, useReducer, ReactNode } from "react";
import { CartItem } from "@/types";
import { CartAction } from "./cartActions";
import { cartReducer } from "./cartReducer";

interface CartState {
  cartItems: CartItem[];

  dispatch: React.Dispatch<CartAction>;
}

const defaultState: CartState = {
  cartItems: [],
  dispatch: () => null
};

const CartContext = createContext<CartState>(defaultState);

interface CartProviderProps {
  children: ReactNode;
}

export const getTotalCost = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total, item) => total + item.volume * item.project.price_per_ton, 0);
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
