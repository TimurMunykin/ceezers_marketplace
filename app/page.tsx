'use client';
import React, { useContext, useState } from 'react';
import Filters from './filters'; // Import the Filters component
import { useQuery } from '@tanstack/react-query';
import CartContext from './context/cartContext';
import { CarbonProject } from '@/types';
import Card from './card';

export default function Home() {
  const { data, isLoading, isError, error } = useQuery<CarbonProject[]>({
    queryKey: ['goods'],
    queryFn: async () => {
      const response = await fetch("/projects");
      return response.json();
    },
  });

  const { cartItems, dispatch } = useContext(CartContext);
  const [filters, setFilters] = useState<Record<string, any>>({});

  const suppliers = Array.from(new Set(data?.map(item => item.supplier_name) || []));

  const filteredData = data?.filter(item =>
    (!filters.startDate || new Date(item.earliest_delivery) >= new Date(filters.startDate)) &&
    (!filters.endDate || new Date(item.earliest_delivery) <= new Date(filters.endDate)) &&
    (filters.supplier ? item.supplier_name === filters.supplier : true)
  );

  const handleAddToCart = (project: CarbonProject, volume: number) => {
    dispatch({ type: 'ADD_ITEM', payload: { project, volume } });
  };

  if (isLoading) return 'Loading...';

  if (isError) return 'An error has occurred: ' + error.message;

  return (
    <>
      <Filters onFilterChange={setFilters} suppliers={suppliers} />
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {filteredData?.map((item) =>
            <Card key={item.name} project={item} addToCart={(item, amount) => handleAddToCart(item, amount)}></Card>
          )}
        </div>
        <MarketplaceSummary projects={filteredData || []} />
      </div>
    </>
  );
}


const MarketplaceSummary: React.FC<{ projects: CarbonProject[] }> = ({ projects }) => {
  const totalVolume = projects.reduce((sum, project) => sum + project.offered_volume_in_tons, 0);
  const averagePrice = projects.reduce((sum, project) => sum + project.price_per_ton, 0) / projects.length;

  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-bold">Market Summary</h2>
      <p>Total Available Volume: {totalVolume} tons</p>
      <p>Average Price per Ton: ${averagePrice.toFixed(2)}</p>
    </div>
  );
};