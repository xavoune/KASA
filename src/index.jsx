/* React import */
import React from 'react'
import { createRoot } from 'react-dom/client' // createRoot import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
/* Style import */
import './styles/main.scss'
/* Components import */
import Header from './components/Header'
import Footer from './components/Footer'
/* Pages import */
import Home from './pages/Home'
import Accommodation from './pages/Accommodations'
import About from './pages/About'
import Error from './pages/Error'

// Use createRoot for render
const container = document.getElementById('root')
if (container !== null) {
  const root = createRoot(container) // Create a root
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
