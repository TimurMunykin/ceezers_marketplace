import { CartItem } from "@/types";

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'UPDATE_VOLUME'; payload: { id: number; volume: number } }
  | { type: 'CLEAR_CART' };