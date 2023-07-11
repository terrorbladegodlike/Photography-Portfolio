import React from 'react'

// Import Pages
import Home from './../pages/Home';
import Contact from './../pages/Contact';
import About from './../pages/About';
import Portfolio from './../pages/Portfolio';

// Import Routes Route & UseLocation Hook
import { Routes, Route, useLocation } from 'react-router-dom'

const AnimRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default AnimRoutes