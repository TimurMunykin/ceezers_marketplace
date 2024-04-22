import React, { useState, useEffect } from 'react';

interface FiltersProps {
  onFilterChange: (filters: Record<string, any>) => void;
  suppliers: string[];
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange, suppliers }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [supplier, setSupplier] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    onFilterChange({ startDate, endDate, supplier, maxPrice });
  }, [startDate, endDate, supplier, maxPrice, onFilterChange]);

  const handleClearFilters = () => {
    setStartDate('');
    setEndDate('');
    setSupplier('');
    setMaxPrice('');
    onFilterChange({ startDate: '', endDate: '', supplier: '', maxPrice: '' });
  };

  return (
    <div className="flex flex-wrap justify-between items-center bg-gray-100 p-3 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2 sm:mb-0">
        <label htmlFor="startDate" className="font-semibold">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2 sm:mb-0">
        <label htmlFor="endDate" className="font-semibold">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2 sm:mb-0">
        <label htmlFor="supplier" className="font-semibold">Supplier:</label>
        <select
          id="supplier"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">All Suppliers</option>
          {suppliers.map(supplier => (
            <option key={supplier} value={supplier}>{supplier}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2 sm:mb-0">
        <label htmlFor="maxPrice" className="font-semibold">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border rounded px-2 py-1"
          placeholder="Price per Ton"
        />
      </div>
      <button
        onClick={handleClearFilters}
        className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-700"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
