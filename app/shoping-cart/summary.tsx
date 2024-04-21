import React from "react";
import Link from "next/link";
import { CartItem } from "@/types";
import { formatCurrency } from "@/lib/utils/formatUtils";

interface CartSummaryProps {
  cartItems: CartItem[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.volume * item.project.price_per_ton, 0);
  const totalTons = cartItems.reduce((acc, item) => acc + item.volume, 0);

  return (
    <div className="flex justify-between mt-6">
      <div>
        <p className="text-xl font-semibold">Total Tons: {totalTons} tons</p>
        <p className="text-xl font-semibold">Total Amount: {formatCurrency(totalAmount)}</p>
      </div>
      <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartSummary;
