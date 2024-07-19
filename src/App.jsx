import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import Detail from './components/Detail'
import Bag from './components/Bag'
import Searchpage from './components/searchpage'
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/serch" element={<Searchpage />} />
          <Route path="/bag" element={<Bag />} />
        </Routes>
      </div>
    </>
  )
}

export default App
