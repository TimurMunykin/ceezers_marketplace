import Image from "next/image";
import { useState } from "react";
import { formatCurrency } from "@/lib/utils/formatUtils";
import { formatDate } from "@/lib/utils/formatDate";
import { CarbonProject } from "@/types";

interface CardProps {
  project: CarbonProject;
  addToCart: (project: CarbonProject, volume: number) => void;
}

const Card: React.FC<CardProps> = ({ project, addToCart }) => {
  const [volume, setVolume] = useState<number>(0);
  const [isMaxVolume, setIsMaxVolume] = useState<boolean>(false);

  const handleAddToCart = () => {
    if (volume > 0) {
      addToCart(project, volume);
      setVolume(0);
      setIsMaxVolume(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    setIsMaxVolume(newVolume === project.offered_volume_in_tons);
  };

  const totalCost = formatCurrency(volume * project.price_per_ton);

  return (
    <div className="border p-4 shadow rounded-lg flex flex-col bg-white">
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={`Image of ${project.name}`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between space-y-2">
        <h2 className="font-bold text-xl">{project.name}</h2>
        <p className="text-sm text-gray-600">{project.description}</p>
        <div>
          <p className="text-gray-500">Supplier: {project.supplier_name}</p>
          <p className="text-gray-500">Earliest delivery: {formatDate(project.earliest_delivery)}</p>
          <p className="text-gray-500">Price per ton: {formatCurrency(project.price_per_ton)}</p>
          <p className={`text-gray-500 ${isMaxVolume ? 'text-red-500 font-bold' : ''}`}>Available volume: {project.offered_volume_in_tons} tons</p>
        </div>
        <div className="flex items-center">
          <input
            type="number"
            min="1"
            max={project.offered_volume_in_tons}
            value={volume}
            onChange={handleVolumeChange}
            placeholder="Enter volume in tons"
            className="mr-2 p-1 border rounded w-full"
          />
          <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-shrink-0">
            Add to Cart
          </button>
        </div>
        <div className="text-lg font-bold">
          <span className="text-gray-700">{volume} tons * {formatCurrency(project.price_per_ton)} = </span>
          <span className="text-green-500">{totalCost}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
