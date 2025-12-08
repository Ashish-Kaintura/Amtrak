import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Results from './pages/Results'
import SeatSelector from './pages/SeatSelector'
import Checkout from './pages/Checkout'
import Success from './pages/Success'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import About from './pages/About'

export default function App() {
  return (
    <div className=" flex flex-col bg-gradient-to-b from-sky-50 to-white text-slate-800">
      <Header />
      <main className="flex-grow ">
        <AnimatePresence mode="wait" initial={false}>
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper>  <About/> </PageWrapper>} />
            <Route path="/results" element={<PageWrapper><Results /></PageWrapper>} />
            <Route path="/seatmap" element={<PageWrapper><SeatSelector /></PageWrapper>} />
            <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
            <Route path="/success" element={<PageWrapper><Success /></PageWrapper>} />
            <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
            <Route path="/admin" element={<PageWrapper><Admin /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

function PageWrapper({ children }) {
  return (
    <motion.div
      key={window.location.pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.28 }}
    >
      {children}
    </motion.div>
  )
}
