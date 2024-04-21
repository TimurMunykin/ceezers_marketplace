import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import { CartItem as CartItemType } from "@/types";
import { formatCurrency } from "@/lib/utils/formatUtils";

interface CartItemProps {
    item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { dispatch } = useContext(CartContext);

    return (
        <div className="flex justify-between items-center border-b py-4">
            <div>
                <h2 className="text-xl font-semibold">{item.project.name}</h2>
                <p className="text-gray-600">Volume: {item.volume} tons</p>
                <p className="text-gray-600">Total Cost: {formatCurrency(item.volume * item.project.price_per_ton)}</p>
            </div>
            <button
                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.project.id } })}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            >
                Remove
            </button>
        </div>
    );
};

export default CartItem;
