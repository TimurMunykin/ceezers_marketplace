import React, { useContext, useState } from "react";
import CartContext from "../context/cartContext";
import { CartItem as CartItemType } from "@/types";
import { formatCurrency } from "@/lib/utils/formatUtils";

interface CartItemProps {
    item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { dispatch } = useContext(CartContext);
    const [volume, setVolume] = useState(item.volume.toString());

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(e.target.value, 10);
        setVolume(e.target.value);

        if (newVolume > 0) {
            dispatch({ type: 'UPDATE_VOLUME', payload: { id: item.project.id, volume: newVolume } });
        } else {
            dispatch({ type: 'REMOVE_ITEM', payload: { id: item.project.id } });
        }
    };

    return (
        <div className="flex justify-between items-center border-b py-4">
            <div>
                <h2 className="text-xl font-semibold">{item.project.name}</h2>
                <p className="text-gray-600">
                    Volume:
                    <input
                        type="number"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="mx-2 w-20 p-1 border rounded"
                        min="0"
                    />
                    tons
                </p>
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
