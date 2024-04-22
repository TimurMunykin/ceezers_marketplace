"use client";
import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import CartItem from "./item";
import CartSummary from "./summary";

const CartPage: React.FC = () => {
  const { cartItems, dispatch } = useContext(CartContext);
  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.project.id} item={item} />
          ))}
          <button onClick={handleClearCart} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
            Clear Cart
          </button>
          <CartSummary cartItems={cartItems} />
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
