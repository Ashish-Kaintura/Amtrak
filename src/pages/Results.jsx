import React from 'react'
import { useSearchParams } from 'react-router-dom'
import TrainCard from '../components/TrainCard'
import routes from '../data/routes.json'

export default function Results() {
  const [params] = useSearchParams()

  const from = params.get("from")   // NYP
  const to = params.get("to")       // BOS
  const date = params.get("date")
  const fromLabel = params.get("fromLabel")
  const toLabel = params.get("toLabel")

  const routeKey = `${from}_${to}`  // NYP_BOS

  const trains = routes[routeKey] || []

  return (
    <section className="max-w-6xl mx-auto p-2 mt-32">
      <div className="mb-6">
        <div className="text-sm text-slate-500">Results for</div>
        <div className="font-semibold">{fromLabel} → {toLabel} • {date}</div>
      </div>

      {trains.length === 0 ? (
        <div className="py-20 text-center text-slate-500">
          No trains found for this route.
        </div>
      ) : (
        <div className="space-y-4">
          {trains.map(train => (
            <TrainCard key={train.id} train={train} />
          ))}
        </div>
      )}
    </section>
  )
}
