import { CarbonProject } from "@/types";

export const MarketplaceSummary: React.FC<{ projects: CarbonProject[] }> = ({ projects }) => {
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