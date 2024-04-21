"use client"
import Card from "./card";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import CartContext from "./context/cartContext";
import { CarbonProject } from "@/types";

export default function Home() {
  const { data, isLoading, isError, error } = useQuery<CarbonProject[]>({
    queryKey: ['goods'],
    queryFn: async () => {
      const response = await fetch("/projects");
      return response.json();
    },
  });

  const { cartItems, dispatch } = useContext(CartContext);

  const handleAddToCart = (project: CarbonProject, volume: number) => {
    dispatch({ type: 'ADD_ITEM', payload: { project, volume } });
  };

  if (isLoading) return 'Loading...'

  if (isError) return 'An error has occurred: ' + error.message

  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {data?.map((item) =>
            <Card key={item.name} project={item} addToCart={(item, amount) => handleAddToCart(item, amount)}></Card>
          )}
        </div>
      </div>
    </>
  )
}
