import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link>Mission</Link>
        <Link>Contact Us</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
