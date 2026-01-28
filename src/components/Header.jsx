import React, { useState, useEffect } from 'react'
import { Link, Links, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Train, Search, Ticket } from 'lucide-react'
import TrainRouteSearch from './TrainRouteSearch'
import logo from "../../public/logoam.png"
export default function Header() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)


  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Train Routes', path: '/All-train-routes' },
    { name: 'Deals', path: '/deals&offers' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
        : 'bg-white py-5'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* --- Logo Section --- */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
          {/* <div className="bg-blue-700 text-white p-2.5 rounded-lg group-hover:bg-blue-800 transition-colors">
            <Train className="w-6 h-6" />
          </div> */}
          {/* */}
          <Link to=""> <img width={142} src={logo} alt="logo" /> </Link>
        </div>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}

          {/* Search Icon Button */}
          <div className="p-2 ml-2 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all">
            <TrainRouteSearch />
          </div>

          {/* CTA Button */}
          <Link to="/contact">    <button className="ml-4 flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-full text-sm font-semibold shadow-lg shadow-blue-700/20 transition-all hover:scale-105 active:scale-95">
            <Ticket className="w-4 h-4" />
            Book Tickets
          </button></Link>
        </nav>

        {/* --- Mobile Menu Toggle --- */}
        <button
          className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50 hover:text-blue-700 hover:pl-2 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admin"
                className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50 flex items-center gap-2 hover:text-blue-700 transition-all"
                onClick={() => setIsOpen(false)}
              >
                <Search className="w-5 h-5" />
                Search
              </Link>

              <button className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-xl font-bold shadow-md active:scale-95 transition-transform">
                <Ticket className="w-5 h-5" />
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}