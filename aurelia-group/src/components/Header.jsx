import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { collections } from '../data/collections.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="wrap">
        <NavLink to="/" className="wordmark" onClick={close}>AURELIA <span>GROUP</span></NavLink>
        <nav className={`main-nav${open ? ' open' : ''}`} aria-label="Primary">
          <NavLink to="/the-house" onClick={close}>The House</NavLink>
          <NavLink to="/collections" onClick={close}>Collections</NavLink>
          <NavLink to="/restaurants" onClick={close}>Restaurants</NavLink>
          <NavLink to="/menus" onClick={close}>Menus</NavLink>
          <NavLink to="/reservations" onClick={close} className="btn btn--solid" style={{padding:'0.6em 1.3em'}}>Reservations</NavLink>
        </nav>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
