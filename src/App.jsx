
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Service from './components/Service/Service'
import AllProducts from './components/AllProducts/AllProducts';
import * as React from 'react';

import "./App.css"
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/allproducts" element={<AllProducts />} />


        </Routes>
      </div>


    </>
  )
}

export default App
