import React from 'react'
import SearchBox from '../components/SearchBox'
import FeatureCard from '../components/FeatureCard'
import { motion } from 'framer-motion'
import HeroSlider from '../components/HeroSlider'
import { ArrowRight, Clock, Search, Shield, Sparkles, Train } from 'lucide-react'
import PopularRoute from '../components/PopularRoute'
import Whyus from '../components/Whyus'
import Testimonials from '../components/Testimonials'
import TrainSearchBar from '../components/TrainSearchBar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="">
      <HeroSlider />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto mt-12 p-4">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Book in 60 seconds or less
          </div>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Book train tickets quickly —{' '}
            <span className="bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              ACROSS THE NORTHEAST & MORE
            </span>
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Search schedules, pick seats, and complete secure checkout in minutes. Mobile-friendly, accessible, and optimized for performance.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: Search, text: 'Instant search with smart suggestions' },
              { icon: Clock, text: 'Real-time availability and live updates' },
              { icon: Train, text: 'Interactive seat maps & QR e-tickets' },
              { icon: Shield, text: 'Bank-level security & encryption' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-slate-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="/" className="sm:px-8 px-4 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/30">
              Search Tickets
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="px-8 py-4 border-2 border-slate-300 hover:border-slate-400 rounded-full font-semibold transition-colors">
              View Offers
            </button>
          </div>
        </div>

        <motion.div initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow p-6">
          {/* <SearchBox /> */}
          <TrainSearchBar/>
        </motion.div>
      </div>
      <PopularRoute />
      <Whyus/>
      <Testimonials />
      
      <div className="my-12 grid md:grid-cols-3 gap-6">
        <FeatureCard title="Popular routes" desc="Quick access to commonly traveled journeys." />
        <FeatureCard title="Secure payments" desc="PCI-compliant integrations like Stripe or Razorpay." />
        <FeatureCard title="Mobile-friendly" desc="Designed for fast, thumb-first booking on phones." />
      </div>
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl text-slate-300 mb-8">Join millions of travelers who choose Amtrek Reservation  every year</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors">
              Book Your Trip Now
            </button>
            </Link>
           
            <a className="px-8 py-4 border-2 border-white hover:bg-white hover:text-slate-900 font-semibold rounded-full transition-colors" href="tel:8663061219">
               Call Us expert help
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}
