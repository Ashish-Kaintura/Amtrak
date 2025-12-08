import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Success() {
  const location = useLocation()
  const navigate = useNavigate()
  const info = location.state || {}
  return (
    <div className="bg-white rounded-xl p-6 shadow text-center">
      <div className="text-emerald-600 font-bold">Booking Confirmed</div>
      <h3 className="font-bold text-lg mt-2">{info.payment?.tx || '—'}</h3>
      <p className="text-sm text-slate-600 mt-2">We've emailed your ticket. You can download it from your bookings.</p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button className="px-4 py-2 border rounded" onClick={() => navigate('/dashboard')}>Go to My Bookings</button>
        <button className="px-4 py-2 bg-amber-600 text-white rounded" onClick={() => navigate('/')}>Book another ticket</button>
      </div>
    </div>
  )
}
