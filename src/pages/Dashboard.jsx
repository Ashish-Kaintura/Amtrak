import React from 'react'

export default function Dashboard() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-28">
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold mb-4">My Bookings</h3>
        <div className="text-slate-500">No bookings yet — try searching for trains.</div>
      </div>

      <aside className="bg-white p-6 rounded-xl shadow">
        <h4 className="font-semibold mb-3">Profile</h4>
        <div className="text-sm text-slate-600">Signed in as demo@amtrak.com</div>
        <div className="mt-4">
          <button className="px-4 py-2 border rounded">Manage travelers</button>
        </div>
      </aside>
    </div>
  )
}
