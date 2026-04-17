import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
