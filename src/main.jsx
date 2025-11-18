import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import Product from './pages/Product'
import LiveChat from './pages/LiveChat'
import Outcomes from './pages/Outcomes'
import Pilot from './pages/Pilot'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import Layout from './components/Layout'
import CookieBanner from './components/CookieBanner'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <CookieBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/live-chat" element={<LiveChat />} />
          <Route path="/outcomes" element={<Outcomes />} />
          <Route path="/pilot" element={<Pilot />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
