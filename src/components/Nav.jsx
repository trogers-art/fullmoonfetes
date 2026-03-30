import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-fmf.png'
import './Nav.css'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/travel',   label: 'Travel' },
  { to: '/gallery',  label: 'Gallery' },
  { to: '/about',    label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <NavLink to="/" className="nav-logo-link">
          <img src={logo} alt="Full Moon Fetes" className="nav-logo" />
        </NavLink>

        <div className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Book a consult
          </NavLink>
        </div>

        <button
          className={`nav-burger ${open ? 'nav-burger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  )
}
