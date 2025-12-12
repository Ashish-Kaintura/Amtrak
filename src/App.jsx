import React, { useState, useEffect } from 'react'
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
import Offers from './pages/Offers'
import BookNowContact from './pages/BookNowContact'
import AmtrakLoader from './components/AmtrakLoader'
import TrainResults from './pages/TrainResults'
import TrainRoutes from './pages/TrainRoutes'
import PrivacyPolicy from './pages/PrivacyPolicy'
import HelpCenter from './pages/HelpCenter'
import TermsAndCondition from './pages/TermsAndCondition'

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loader hides after 3 seconds
  }, []);
  return (
    <div className=" flex flex-col bg-linear-to-b from-sky-50 to-white text-slate-800">
      {isLoading ? (
        <AmtrakLoader />
      ) : (
        <>
          <Header />
          <main className="grow">
            <AnimatePresence mode="wait" initial={false}>
              <Routes>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper>  <About /> </PageWrapper>} />
                <Route path="/results" element={<PageWrapper><Results /></PageWrapper>} />
                <Route path="/seatmap" element={<PageWrapper><SeatSelector /></PageWrapper>} />
                <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
                <Route path="/success" element={<PageWrapper><Success /></PageWrapper>} />
                <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
                <Route path="/deals&offers" element={<PageWrapper><Offers /></PageWrapper>} />
                <Route path="/train-result" element={<PageWrapper><TrainResults /></PageWrapper>} />
                <Route path="/All-train-routes" element={<PageWrapper><TrainRoutes /></PageWrapper>} />
                <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
                <Route path="/help-center" element={<PageWrapper><HelpCenter /></PageWrapper>} />
                <Route path="/terms-and-condition" element={<PageWrapper><TermsAndCondition /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><BookNowContact /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </>

      )}
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
