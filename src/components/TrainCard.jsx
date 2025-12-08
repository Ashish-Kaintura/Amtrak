import React from 'react'
import { Link } from 'react-router-dom'

export default function TrainCard({ train }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 grid grid-cols-12 items-center gap-4">
      <div className="col-span-3">
        <div className="font-bold">{train.name}</div>
        <div className="text-xs text-slate-500">Train #{train.id}</div>
      </div>
      <div className="col-span-3 text-center">
        <div className="font-semibold">{train.depart}</div>
        <div className="text-xs text-slate-500">Depart</div>
      </div>
      <div className="col-span-2 text-center">
        <div className="text-sm">{train.duration}</div>
        <div className="text-xs text-slate-500">Duration</div>
      </div>
      <div className="col-span-2 text-center">
        <div className="font-bold text-lg">$'{train.price}</div>
        <div className="text-xs text-slate-500">Starting</div>
      </div>
      <div className="col-span-2 text-right">
        <div className="text-sm text-slate-500">Seats: {'{'}train.availability{'}'}</div>
        <Link to="/seatmap" state={{ train }} className="mt-2 inline-block px-4 py-2 bg-amber-600 text-white rounded">Select seats</Link>
      </div>
    </div>
  )
}
