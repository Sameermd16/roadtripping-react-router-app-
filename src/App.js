import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Vans from './components/Vans'

import "./server"

function App() {
  return (
    <BrowserRouter>
    <header>
        <Link to="/" className='site-logo' >#VanlLife</Link>
      <nav>
        <Link to="/about" >About</Link>
        <Link to="/vans" >Vans</Link>
      </nav>
    </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
