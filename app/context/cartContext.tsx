"use client"
import React, { createContext, useReducer, ReactNode } from "react";
import { CartItem } from "@/types";

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: number } };

interface CartState {
  cartItems: CartItem[];

  dispatch: React.Dispatch<CartAction>;
}

const defaultState: CartState = {
  cartItems: [],
  dispatch: () => null
};

const CartContext = createContext<CartState>(defaultState);

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter(item => item.project.id !== action.payload.id);
    default:
      return state;
  }
};

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
