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
import HostVans from "./components/Host/HostVans"
import HostVanDetail from "./components/Host/HostVanDetail"
import Details from "./components/Host/hostVanFullDetails/Details"
import Pricing from "./components/Host/hostVanFullDetails/Pricing"
import Photos from "./components/Host/hostVanFullDetails/Photos"
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
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
