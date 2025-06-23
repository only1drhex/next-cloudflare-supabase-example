
import React from 'react';

export default function RandomDate() {
  const now = new Date().toLocaleString();
  const randomNumber = Math.floor(Math.random() * 1000);

  return (
    <div className="p-6 m-4 bg-white rounded shadow text-center space-y-2">
      <p className="text-xl font-bold text-gray-700">Current Date & Time:</p>
      <p className="text-lg text-blue-500">{now}</p>
      <p className="text-xl font-bold text-gray-700">Random Number:</p>
      <p className="text-lg text-green-500">{randomNumber}</p>
    </div>
  );
}
