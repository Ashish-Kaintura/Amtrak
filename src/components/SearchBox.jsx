import React from 'react'
import { useNavigate } from 'react-router-dom'
import stations from '../data/stations.json'
import { motion, AnimatePresence } from 'framer-motion'

export default function SearchBox() {
  const navigate = useNavigate()

  const [local, setLocal] = React.useState({
    from: '',
    fromLabel: '',
    to: '',
    toLabel: '',
    date: ''
  })
  const [passengers, setPassengers] = React.useState(1)
  const [fromQuery, setFromQuery] = React.useState('')
  const [toQuery, setToQuery] = React.useState('')
  const [showFromList, setShowFromList] = React.useState(false)
  const [showToList, setShowToList] = React.useState(false)

  const filterStations = (q) =>
    stations.filter((s) =>
      s.label.toLowerCase().includes(q.toLowerCase())
    )

  function onSearch() {
    if (!local.from || !local.to || !local.date) {
      alert("Please fill all fields")
      return
    }

    const params = new URLSearchParams({
      from: local.from,
      to: local.to,
      fromLabel: local.fromLabel,
      toLabel: local.toLabel,
      date: local.date,
      pax: passengers
    })

    navigate(`/results?${params.toString()}`)
  }

  return (
    <div className="space-y-6 bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
      {/* FROM */}
      <div className="relative">
        <label className="text-xs font-semibold">From</label>
        <input
          className="w-full mt-1 p-3 rounded-lg border"
          value={fromQuery.length > 0 ? fromQuery : local.fromLabel}
          onChange={(e) => {
            setFromQuery(e.target.value)
            setShowFromList(true)
          }}
          placeholder="Search departure station"
        />
        <AnimatePresence>
          {showFromList && fromQuery.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute z-50 bg-white border rounded-lg mt-2 w-full shadow-lg max-h-48 overflow-auto"
            >
              {filterStations(fromQuery).map((station) => (
                <li
                  key={station.code}
                  className="p-3 hover:bg-amber-100 cursor-pointer"
                  onClick={() => {
                    setLocal({
                      ...local,
                      from: station.code,
                      fromLabel: station.label
                    })
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

      {/* TO */}
      <div className="relative">
        <label className="text-xs font-semibold">To</label>
        <input
          className="w-full mt-1 p-3 rounded-lg border"
          value={toQuery.length > 0 ? toQuery : local.toLabel}
          onChange={(e) => {
            setToQuery(e.target.value)
            setShowToList(true)
          }}
          placeholder="Search destination"
        />
        <AnimatePresence>
          {showToList && toQuery.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute z-50 bg-white border rounded-lg mt-2 w-full shadow-lg max-h-48 overflow-auto"
            >
              {filterStations(toQuery).map((station) => (
                <li
                  key={station.code}
                  className="p-3 hover:bg-amber-100 cursor-pointer"
                  onClick={() => {
                    setLocal({
                      ...local,
                      to: station.code,
                      toLabel: station.label
                    })
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

      {/* DATE + PASSENGERS */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold">Date</label>
          <input
            type="date"
            className="w-full mt-1 p-3 rounded-lg border"
            value={local.date}
            onChange={(e) => setLocal({ ...local, date: e.target.value })}
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
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <button
            className="w-full p-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700"
            onClick={onSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
