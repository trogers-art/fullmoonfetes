import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-fmf.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <img src={logo} alt="Full Moon Fetes" className="footer-logo" />
          <p className="footer-tagline">Moon-inspired magic for every moment.</p>
        </div>

        <div className="footer-links">
          <span className="footer-col-label">Navigation</span>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/travel">Travel</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer-contact">
          <span className="footer-col-label">Get in touch</span>
          <a href="mailto:party@fullmoonfetes.com">party@fullmoonfetes.com</a>
          <a href="tel:6269359661">(626) 935-9661</a>
          <a href="https://instagram.com/fullmoonfetes" target="_blank" rel="noreferrer">@fullmoonfetes</a>
          <p className="footer-area">Orange County, California</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Full Moon Fetes. All rights reserved.</p>
          <p>Site by <a href="https://rogers-websolutions.com" target="_blank" rel="noreferrer">Rogers Web Solutions</a></p>
        </div>
      </div>
    </footer>
  )
}
