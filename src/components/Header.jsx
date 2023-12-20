import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div>
        {/* <img src="logo.jpg" alt="" className="h-10" /> */}
        <h2 className='font-bold text-2xl'>Weather API</h2>
      </div>

      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/compare" className="text-white hover:text-gray-300">
          Compare Weathers
        </Link>
      </div>
    </div>
  );
}
