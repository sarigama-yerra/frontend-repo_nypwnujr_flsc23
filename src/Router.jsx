import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App'
import Product from './pages/Product'
import LiveChat from './pages/LiveChat'
import Outcomes from './pages/Outcomes'
import Pilot from './pages/Pilot'
import Contact from './pages/Contact'
import Legal from './pages/Legal'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/live-chat" element={<LiveChatPage />} />
      <Route path="/outcomes" element={<OutcomesPage />} />
      <Route path="/pilot" element={<PilotPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/legal" element={<LegalPage />} />
    </Routes>
  )
}

function ProductPage() { return (<div><App /><div className="sr-only" /></div>) }
function LiveChatPage() { return (<div><LiveChatLayout /></div>) }
function OutcomesPage() { return (<div><OutcomesLayout /></div>) }
function PilotPage() { return (<div><PilotLayout /></div>) }
function ContactPage() { return (<div><ContactLayout /></div>) }
function LegalPage() { return (<div><LegalLayout /></div>) }

// The above placeholder wrappers are unnecessary; instead we'll render pages within Layout
