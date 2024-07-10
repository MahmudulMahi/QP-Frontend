import React, { useState } from 'react';

const ColorChanger = () => {
  // State to hold the current background color
  const [bgColor, setBgColor] = useState('bg-white');

  // Mapping of colors to Tailwind CSS classes
  const colorMapping = {
    red: 'bg-red-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    // Add more colors as needed
  };

  // Function to handle button clicks
  const handleColorChange = (color) => {
    setBgColor(colorMapping[color]);
  };

  return (
    <div className={`min-h-screen p-5 ${bgColor}`}>
      <div className="mb-5">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded w-full"
          placeholder="Enter some text..."
        />
      </div>
      <div className="flex space-x-2">
        {Object.keys(colorMapping).map((color) => (
          <button
            key={color}
            className={`p-2 rounded ${colorMapping[color]}`}
            onClick={() => handleColorChange(color)}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorChanger;
