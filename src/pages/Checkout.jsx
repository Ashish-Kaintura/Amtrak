import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Checkout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { train, seats, passengers } = location.state || {}
  const [form, setForm] = React.useState({ name: '', email: '', phone: '' })

  function pay() {
    if (!form.name || !form.email) { alert('Fill required'); return }
    const payment = { method: 'Card', tx: `TX${Date.now()}` }
    navigate('/success', { state: { train, seats, passengers, payment } })
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="font-bold text-lg mb-4">Passenger details</h3>
          <div className="space-y-3">
            <input className="w-full p-3 rounded border" placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input className="w-full p-3 rounded border" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <input className="w-full p-3 rounded border" placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg">
          <h4 className="font-semibold">Summary</h4>
          <div className="text-sm text-slate-500 mt-2">{train?.name} • {seats?.join(', ')}</div>
          <div className="mt-3 flex justify-between"><div>Tickets</div><div>${(train?.price)||0} x {passengers}</div></div>
          <div className="mt-2 flex justify-between font-bold"><div>Total</div><div>${((train?.price)||0) * (passengers||1)}</div></div>

          <div className="mt-4">
            <button className="w-full px-4 py-2 bg-amber-600 text-white rounded" onClick={pay}>Pay securely</button>
            <button className="w-full mt-2 px-4 py-2 border rounded" onClick={() => navigate(-1)}>Change seats</button>
          </div>
        </div>
      </div>
    </div>
  )
}
