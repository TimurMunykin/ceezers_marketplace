import React from "react";
import Link from "next/link";
import { CartItem } from "@/types";
import { formatCurrency } from "@/lib/utils/formatUtils";

interface CartSummaryProps {
  cartItems: CartItem[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
  const totalVolume = cartItems.reduce((total, item) => total + item.volume, 0);
  const totalCost = cartItems.reduce((total, item) => total + (item.volume * item.project.price_per_ton), 0);
  const averagePrice = totalCost / totalVolume;

  return (
    <div className="flex justify-between items-center mt-6 bg-gray-100 p-4 rounded-lg">
      <div>
        <p className="text-xl font-semibold">Total Tons: {totalVolume} tons</p>
        <p className="text-xl font-semibold">Total Amount: {formatCurrency(totalCost)}</p>
        <p className="text-xl font-semibold">Average Price per Ton: {formatCurrency(averagePrice)}</p>
      </div>
      <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
        Proceed to Checkout
      </Link>
    </div>

  );
};
export default CartSummary;
