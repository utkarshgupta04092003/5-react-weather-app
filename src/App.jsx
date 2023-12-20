import React from 'react'
import Home from './components/Home';
import CompareTwoWeather from './components/CompareTwoWeather';
import { MemoryRouter, BrowserRouter, Routes, Route } from 'react-router-dom';



export default function App() {
  return (
    <div>
      {/* app.js working */}

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="compare/*" element={<CompareTwoWeather />} />
          

        </Routes>

      </BrowserRouter>

    </div>
  )
}
