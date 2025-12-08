import React from 'react'

export default function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  )
}
