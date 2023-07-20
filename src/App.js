import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Vans from './components/Vans';
import VanDetail from './components/VanDetail';
import Layout from './components/Layout'
import Dashboard from "./components/Host/Dashboard"
import Income from "./components/Host/Income"
import Reviews from "./components/Host/Reviews"
import HostLayout from "./components/Host/HostLayout"

import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
