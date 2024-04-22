import { CartItem } from "@/types";
import { CartAction } from "./cartActions";

export const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.find(item => item.project.id === action.payload.project.id);
      if (existingItem) {
        return state.map(item =>
          item.project.id === action.payload.project.id
            ? { ...item, volume: item.volume + action.payload.volume }
            : item
        );
      } else {
        return [...state, action.payload];
      }
    case 'REMOVE_ITEM':
      return state.filter(item => item.project.id !== action.payload.id);
    case 'UPDATE_VOLUME':
      return state.map(item =>
        item.project.id === action.payload.id ? { ...item, volume: action.payload.volume } : item
      );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};
