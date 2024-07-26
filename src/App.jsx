import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import './App.css'
import Calender from './components/Calender/Calender'

function App() {
  return (
    <>
      <div className="iphone-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calender />} />
        </Routes>
      </div>
    </>
  )
}

export default App
