import React, { useState } from 'react';

export default function ByCityName({ cityName, setCityName, changeCityName }) {
  const [city, setCity] = useState(cityName);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeCityName(city);
  };

  return (
    <div className="border border-gray-500 p-4 my-4 rounded-md bg-white">
      <form onSubmit={handleSubmit} className="flex items-center">
        <label htmlFor="cityName" className="mr-2">
          Enter City Name:
        </label>

        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
          Submit
        </button>
      </form>
    </div>
  );
}
