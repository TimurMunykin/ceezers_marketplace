"use client";
import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import CartItem from "./item";
import CartSummary from "./summary";

const CartPage: React.FC = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
          <CartSummary cartItems={cartItems} />
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
