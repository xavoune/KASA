import React from 'react'
import { createRoot } from 'react-dom/client' // Importe createRoot
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/main.scss'
import Home from './pages/Home'
import Accommodation from './pages/Accommodations'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

// Utilise createRoot pour le rendu
const container = document.getElementById('root')
if (container !== null) {
  const root = createRoot(container) // Crée une racine pour l'application
  root.render(
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodations/:id" element={<Accommodation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>,
  )
}
