import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Gallery from './gallery.jsx'
import About from './about.jsx'
import Services from './services.jsx'
import Features from './features.jsx'
import Contact from './contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
