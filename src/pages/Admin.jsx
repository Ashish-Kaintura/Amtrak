import React from 'react'

export default function Admin() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-bold mb-4">Admin Panel (Demo)</h3>
      <div className="text-sm text-slate-500 mb-4">Manage trains, offers, and view revenue statistics.</div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">Trains <div className="text-2xl font-bold mt-2">24</div></div>
        <div className="p-4 border rounded">Bookings <div className="text-2xl font-bold mt-2">0</div></div>
        <div className="p-4 border rounded">Revenue <div className="text-2xl font-bold mt-2">$0</div></div>
      </div>
    </div>
  )
}
