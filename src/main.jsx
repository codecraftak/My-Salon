import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Gallery from './gallery.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
