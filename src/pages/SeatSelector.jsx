import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import seatsData from '../data/seats.json'
import { motion } from 'framer-motion'

export default function SeatSelector() {
  const location = useLocation()
  const navigate = useNavigate()

  const train = location.state?.train

  const [seats, setSeats] = useState([])
  const [selected, setSelected] = useState([])
  const passengers = 1

  // Load seats JSON
  useEffect(() => {
    setSeats(seatsData)
  }, [])

  function toggleSeat(id, occupied) {
    if (occupied) return
    setSelected(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  function confirm() {
    if (selected.length < passengers) {
      alert(`Please select ${passengers} seat(s).`)
      return
    }
    navigate("/checkout", { state: { train, seats: selected, passengers } })
  }

  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* TRAIN HEADER */}
      <div className="mb-5">
        <div className="text-sm text-slate-500">
          {train.name} • {train.id}
        </div>
        <div className="font-bold text-xl">
          {train.depart} → {train.arrive}
          <span className="text-sm text-slate-500"> ({train.duration})</span>
        </div>
      </div>

      {/* SEAT MAP */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {seats.map(seat => {
          const isSelected = selected.includes(seat.id)
          return (
            <motion.div
              key={seat.id}
              whileTap={{ scale: seat.occupied ? 1 : 0.9 }}
              onClick={() => toggleSeat(seat.id, seat.occupied)}
              className={`
                w-16 h-10 rounded-md flex items-center justify-center text-sm font-semibold cursor-pointer
                ${seat.occupied ? "bg-slate-200 text-slate-400 cursor-not-allowed" :
                  isSelected ? "bg-amber-600 text-white" :
                    "bg-emerald-50 border border-emerald-300 hover:bg-emerald-100"}
              `}
            >
              {seat.id}
            </motion.div>
          )
        })}
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex justify-between">
        <button className="px-4 py-2 border rounded" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="px-4 py-2 bg-amber-600 text-white rounded" onClick={confirm}>
          Confirm Seats
        </button>
      </div>
    </motion.div>
  )
}
