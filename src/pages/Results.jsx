import React from 'react'
import { useSearchParams } from 'react-router-dom'
import TrainCard from '../components/TrainCard'

export default function Results() {
  const [params] = useSearchParams()
  const from = params.get('from') || 'New York, NY (NYP)'
  const to = params.get('to') || 'Boston, MA (BOS)'
  const date = params.get('date') || '2025-12-20'

  const sampleTrains = [
    { id: 'A123', name: 'Northeast Regional', depart: '08:15', arrive: '11:45', duration: '3h 30m', price: 45, availability: 12 },
    { id: 'A456', name: 'Acela Express', depart: '09:00', arrive: '10:40', duration: '1h 40m', price: 120, availability: 5 },
    { id: 'A789', name: 'Coastal Breeze', depart: '13:30', arrive: '17:10', duration: '3h 40m', price: 60, availability: 20 },
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-sm text-slate-500">Results for</div>
          <div className="font-semibold">{from} → {to} • {date}</div>
        </div>
      </div>

      <div className="space-y-4">
        {sampleTrains.map(t => <TrainCard key={t.id} train={t} />)}
      </div>
    </section>
  )
}
