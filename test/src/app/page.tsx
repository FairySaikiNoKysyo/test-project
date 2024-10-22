'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchVehicleMakes } from './utils/api'; // API функції
import { VehicleMake } from './utils/interfaces';

// Визначаємо тип для марки автомобіля


export default function Home() {
  const [makes, setMakes] = useState<VehicleMake[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  const years = Array.from({ length: new Date().getFullYear() - 2015 + 1 }, (_, i) => (2015 + i).toString());

  useEffect(() => {
    async function loadMakes() {
      const vehicleMakes = await fetchVehicleMakes();
      setMakes(vehicleMakes);
    }
    loadMakes();
  }, []);

  useEffect(() => {
    setIsButtonEnabled(!!selectedMake && !!selectedYear);
  }, [selectedMake, selectedYear]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Car Dealer App</h1>
      
      {/* Випадаючий список для вибору марки автомобіля */}
      <div className="mb-4">
        <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-2">
          Select Vehicle Make
        </label>
        <select
          id="make"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select a make</option>
          {makes.map((make) => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>

      {/* Випадаючий список для вибору року */}
      <div className="mb-4">
        <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
          Select Model Year
        </label>
        <select
          id="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select a year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Кнопка переходу на сторінку результатів */}
      <Link href={`/results/${selectedMake}/${selectedYear}`}>
        <button
          disabled={!isButtonEnabled}
          className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md ${
            !isButtonEnabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next
        </button>
      </Link>
    </div>
  );
}
