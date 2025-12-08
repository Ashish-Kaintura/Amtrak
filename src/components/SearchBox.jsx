import React from 'react'
import { useNavigate } from 'react-router-dom'
import stations from '../data/stations.json'
import { motion, AnimatePresence } from 'framer-motion'

export default function SearchBox({ defaultRoute }) {
  const [local, setLocal] = React.useState(
    defaultRoute || {
      from: 'New York, NY (NYP)',
      to: 'Boston, MA (BOS)',
      date: '2025-12-20',
    }
  )

  const [passengers, setPassengers] = React.useState(1)

  const [fromQuery, setFromQuery] = React.useState('')
  const [toQuery, setToQuery] = React.useState('')

  const [showFromList, setShowFromList] = React.useState(false)
  const [showToList, setShowToList] = React.useState(false)

  const navigate = useNavigate()

  function onSearch() {
    const params = new URLSearchParams({
      from: local.from,
      to: local.to,
      date: local.date,
      pax: passengers,
    })
    navigate(`/results?${params.toString()}`)
  }

  const filterStations = (q) =>
    stations.filter((s) =>
      s.label.toLowerCase().includes(q.toLowerCase())
    )

  return (
    <div className="space-y-6 bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl">

      {/* FROM FIELD */}
      <div className="relative">
        <label className="text-xs font-semibold">From</label>
        <input
          className="w-full mt-1 p-3 rounded-lg border"
          value={fromQuery || local.from}
          onChange={(e) => {
            setFromQuery(e.target.value)
            setShowFromList(true)
          }}
        />

        <AnimatePresence>
          {showFromList && fromQuery.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute z-50 bg-white border rounded-lg mt-2 w-full shadow-xl max-h-48 overflow-auto"
            >
              {filterStations(fromQuery).map((station) => (
                <li
                  key={station.code}
                  className="p-3 hover:bg-amber-100 cursor-pointer"
                  onClick={() => {
                    setLocal({ ...local, from: station.label })
                    setFromQuery('')
                    setShowFromList(false)
                  }}
                >
                  {station.label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* TO FIELD */}
      <div className="relative">
        <label className="text-xs font-semibold">To</label>
        <input
          className="w-full mt-1 p-3 rounded-lg border"
          value={toQuery || local.to}
          onChange={(e) => {
            setToQuery(e.target.value)
            setShowToList(true)
          }}
        />

        <AnimatePresence>
          {showToList && toQuery.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute z-50 bg-white border rounded-lg mt-2 w-full shadow-xl max-h-48 overflow-auto"
            >
              {filterStations(toQuery).map((station) => (
                <li
                  key={station.code}
                  className="p-3 hover:bg-amber-100 cursor-pointer"
                  onClick={() => {
                    setLocal({ ...local, to: station.label })
                    setToQuery('')
                    setShowToList(false)
                  }}
                >
                  {station.label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* DATE + PASSENGERS + BUTTON */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold">Date</label>
          <input
            type="date"
            className="w-full mt-1 p-3 rounded-lg border"
            value={local.date}
            onChange={(e) =>
              setLocal({ ...local, date: e.target.value })
            }
          />
        </div>

        <div>
          <label className="text-xs font-semibold">Passengers</label>
          <select
            className="w-full mt-1 p-3 rounded-lg border"
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            className="w-full p-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all"
            onClick={onSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
