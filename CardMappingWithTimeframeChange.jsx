import { useState } from "react";

const CardMappingWithTimeframeChange = () => {
  const packagesData = [
    {
      name: "Basic Package",
      description: "A starter package for small businesses.",

      prices: {
        monthly: 50,
        quarterly: 140,
        yearly: 500,
      },
    },
    {
      name: "Standard Package",
      description: "Perfect for growing businesses.",
      prices: {
        monthly: 100,
        quarterly: 280,
        yearly: 1000,
      },
    },
    {
      name: "Premium Package",
      description: "Comprehensive solutions for established businesses.",
      prices: {
        monthly: 200,
        quarterly: 550,
        yearly: 1900,
      },
    },
  ];

  // State to store the selected timeframe
  const [timeframe, setTimeframe] = useState("monthly");

  // Handle timeframe change
  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <div>
      {/* cards mapping */}
      <div className="flex justify-center mb-8">
        <label htmlFor="timeframe" className="mr-3 text-lg font-semibold">
          Select Timeframe:
        </label>
        <select
          id="timeframe"
          value={timeframe}
          onChange={handleTimeframeChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Packages Mapping */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packagesData.map((pkg, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">{pkg.name}</h2>
            <p className="mb-4">{pkg.description}</p>
            <p className="text-3xl font-bold text-indigo-600 mb-4">
              ${pkg.prices[timeframe]}
            </p>
            <p className="text-sm text-gray-500">Billed {timeframe}</p>
            <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMappingWithTimeframeChange;
