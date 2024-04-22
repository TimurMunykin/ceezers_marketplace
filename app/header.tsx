"use client"
import React, { useContext } from "react";
import { ShoppingCartIcon, TableCellsIcon } from "@heroicons/react/24/solid"
import Link from "next/link";
import CartContext, { getTotalCost } from "./context/cartContext";
import { formatCurrency } from "@/lib/utils/formatUtils";


const Header: React.FC = () => {
  const { cartItems, dispatch } = useContext(CartContext);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:underline flex items-center">
            <TableCellsIcon className="h-6 w-6 mr-1" stroke="currentColor" /> Products
          </Link>
        </div>
        <Link href="shoping-cart" className="hover:underline flex items-center">
          <ShoppingCartIcon className="h-6 w-6" />
          {cartItems.length > 0 && (
            <span className="ml-2">
              {cartItems.length} items - {formatCurrency(getTotalCost(cartItems))}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
