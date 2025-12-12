import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        <div>© {new Date().getFullYear()} Amtrek Reservation TrainTickets</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href='/terms-and-condition'  className="hover:underline">Terms</a>
          <a href='/privacy-policy'  className="hover:underline">Privacy</a>
          <a href='/help-center'  className="hover:underline">Help</a>
        </div>
      </div>
    </footer>
  )
}
