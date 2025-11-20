import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-white bg-blue-600/70' : 'text-slate-200 hover:text-white hover:bg-white/10'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-blue-600 grid place-items-center text-white font-bold">ZP</div>
            <div className="text-white font-semibold hidden sm:block">Zorgkwekerij Noordbroek</div>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {navItem('/', 'Home')}
            {navItem('/dagbesteding', 'Dagbesteding')}
            {navItem('/partners', 'Voor Zorgpartners')}
            {navItem('/vrijwilligers', 'Vrijwilligers')}
            {navItem('/over-ons', 'Over Ons')}
            {navItem('/contact', 'Contact')}
          </nav>
          <button className="md:hidden p-2 text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-2 flex flex-col gap-1">
            {navItem('/', 'Home')}
            {navItem('/dagbesteding', 'Dagbesteding')}
            {navItem('/partners', 'Voor Zorgpartners')}
            {navItem('/vrijwilligers', 'Vrijwilligers')}
            {navItem('/over-ons', 'Over Ons')}
            {navItem('/contact', 'Contact')}
          </div>
        </div>
      )}
    </header>
  )
}
